/** Global Variables **/
const baseUrl = 'http://localhost:3000';
let posts = [];

/** Node Getters **/
const mainDiv = () => document.getElementById('main');
const homeLink = () => document.getElementById('home-link');
const createPostLink = () => document.getElementById('create-post-link');
const discussionsLink = () => document.getElementById('discussions-link');
const loginLink = () => document.getElementById('login-link');
const createAccountLink = () => document.getElementById('linkCreateAccount');
const formUserName = () => document.getElementById('user-name');
const formTitle = () => document.getElementById('title');
const formTags = () => document.getElementById('tags');
const formPostText = () => document.getElementById('postText');
const postTitleModal = () =>document.getElementById('post-title-modal');
const postUserNameModal = () =>document.getElementById('post-user-modal');
const postTagsModal = () =>document.getElementById('post-tags-modal');
const postTextModal = () =>document.getElementById('post-text-modal');
const modalFooter = () => document.getElementById('modal-footer');

/** Event Listeners **/
const attachHomePageLinkEvent = () => {
    homeLink().addEventListener('click', loadhome );
}
const attachCreatePostLinkEvent = () => {
    createPostLink().addEventListener('click', loadCreatePost);
}
const attachDiscussionsLinkEvent = () => {
    discussionsLink().addEventListener('click', loadDiscussions);
}
const attachLoginLink = () => {
    loginLink().addEventListener('click',loadLogin);
}

/** Event Handlers **/
const populateModal = event => {
    event.preventDefault();
    const post = posts.find(post => event.target.innerText === post.title)
    postTitleModal().innerText = post.title;
    postUserNameModal().innerText = post.username;
    postTagsModal().innerText = post.tags;
    postTextModal().innerText = post.text;
    const deletePost = event => {
        // delete fetch
        fetch(baseUrl + '/posts/' + post.id, {
            method: "DELETE",
            headers: {
                "Accept": "application/json",
                "Content-type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => {
                posts = posts.filter(p => p.id !== post.id);
                var elems = document.querySelectorAll('.modal');
                var instances = M.Modal.init(elems);
                instances[0].close();
                loadDiscussions();
            })
    }
    modalFooter.innerHTML = ''
    const button = document.createElement('button');
  const editButton = document.createElement('button');
  button.innerText = 'Delete'
  editButton.innerText = 'Edit'
  button.className = 'btn'
  editButton.className="btn"
  editButton.style.marginRight = '10px';
  button.addEventListener('click', deletePost);
  editButton.addEventListener('click', () => populateEditForm(post));
  

  modalFooter().appendChild(editButton);
  modalFooter().appendChild(button);
};
const sumbitForm = event => {
    event.preventDefault();
    const jsonObject = {
        username: formUserName().value,
        title: formTitle().value,
        tags: formTags().value,
        text: formPostText().value
    };
    fetch(baseUrl + '/posts', {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonObject)
    })
        .then(resp => resp.json())
        .then(data => {
            posts.push(data);
            loadDiscussions();
        });
};
const loadhome = event => {
    if(event) {
        event.preventDefault();
    }
    resetMainDiv();
    const h1 = document.createElement('h1')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')
    
    h1.className = 'center-align';
    h3.className = 'center-align';
    p.className = 'center-align';
    
    h1.innerText = 'Versus';
    h3.innerText = 'Welcome to Versus!';
    p.innerText = 'This is Versus, Versus is a blog/forum site where you can compare videos of any you like against eachother. We are currently working on adding more functionality to the page as time and support goes on.';
    
    mainDiv().appendChild(h1);
    mainDiv().appendChild(h3);
    mainDiv().appendChild(p);
}

const closeModal = () => {
    var elem = document.querySelector('.modal');
    var instance = M.Modal.getInstance(elem);
    instance.close();
  }

const populateEditForm = (post) => {
  resetMainDiv();
  closeModal();
  loadForm('Edit ' + post.title, updatepost, post)  
}

const updatepost = (post) => {
    const jsonObject = {
        username: formUserName().value,
        title: formTitle().value,
        tags: formTags().value,
        text: formPostText().value
    }

    fetch(baseUrl + '/posts/' + post.id, {
        method: "PATCH",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonObject)
    })
    .then(resp => resp.json())
    .then(data => {
        const index = posts.indexOf(post);
        posts[index] = data;
        loadDiscussions();
    })
}

const loadCreatePost = event => {
    event.preventDefault();
    resetMainDiv();
    const h1 = document.createElement('h1');
    h1.innerText = 'Create Post';
    const div = document.createElement('div');
    const form = document.createElement('form');
    
    const label1 = document.createElement('label');
    label1.innerText = 'Username';
    const label2 = document.createElement('label');
    label2.innerText = 'Title';
    const label3 = document.createElement('label');
    label3.innerText = 'Tags (Optional)';
    const label4 = document.createElement('label');
    label4.innerText = 'Text (optional)';
    
    const input1 = document.createElement('input');
    input1.type = "text";
    input1.id = "user-name";
    input1.name = "UserName";
    input1.placeholder = "Username";
    input1.required;
    const input2 = document.createElement('input');
    input2.type = "text";
    input2.id = "title";
    input2.name = "title";
    input2.placeholder = "Enter Title";
    input2.required;
    const input3 = document.createElement('input');
    input3.type = "text";
    input3.id = "tags";
    input3.name = "tags";
    input3.placeholder = "Enter Tags (Optional)";
    const submit = document.createElement('input');
    submit.type = 'submit';
    submit.id = 'submit-form';
    submit.innerText = 'Create Post';
    
    const textarea = document.createElement('textarea');
    textarea.name = "text";
    textarea.id = "postText";
    textarea.placeholder = "Enter Text";
    
    
    
    form.appendChild(label1);
    form.appendChild(input1);
    form.appendChild(label2);
    form.appendChild(input2);
    form.appendChild(label3);
    form.appendChild(input3);
    form.appendChild(label4);
    form.appendChild(textarea);
    form.appendChild(submit);
    form.addEventListener('submit', sumbitForm);
    
    div.appendChild(form);
    
    mainDiv().appendChild(h1);
    mainDiv().appendChild(div);
    
}
const loadDiscussions = event => {
    if(event) {
        event.preventDefault();
    }
    resetMainDiv();
    const h1 = document.createElement('h1');
    h1.innerText = 'Discussions';
    const div = document.createElement('div');
    div.className = 'collection';
    
    posts.forEach( post => {
        const a = document.createElement('a');
        a.setAttribute('href', "#modal1")
        a.className = 'collection-item modal-trigger';
        a.innerText = post.title;
        a.addEventListener('click', populateModal);
        
        div.appendChild(a);
    });
    $('.modal').modal();
    mainDiv().appendChild(h1);
    mainDiv().appendChild(div);
    
};
const loadLogin = event => {
event.preventDefault();
resetMainDiv();
    const h1 = document.createElement('h1');
    h1.innerText = 'Login';
    const h1two = document.createElement('h1');
    h1two.className = 'form__title';
    h1two.innerText = 'Login';
    const h13rd = document.createElement('h1');
    h13rd.className = 'form__title';
    h13rd.innerText = 'Create Account';
    
    const div1 = document.createElement('div');
    div1.className = 'container-login';
    div1.id = 'login';
    const div2 = document.createElement('div');
    div2.className = 'form__message', 'form__message--error';
    const div3 = document.createElement('div');
    div3.className = 'form__input-group';
    const div4 = document.createElement('div');
    div4.className = 'form__input-error-message';
    const div5 = document.createElement('div');
    div5.className = 'form__input-group';
    const div6 = document.createElement('div');
    div6.className = 'form__input-error-message';
    const div7 = document.createElement('div');
    div7.className = 'form__message', 'form__message--error';
    const div8 = document.createElement('div');
    div8.className = 'form__input-group';
    const div9 = document.createElement('div');
    div9.className = 'form__input-error-message';
    const div10 = document.createElement('div');
    div10.className = 'form__input-group';
    const div11 = document.createElement('div');
    div11.className = 'form__input-error-message';
    const div12 = document.createElement('div');
    div12.className = 'form__input-group';
    const div13 = document.createElement('div');
    div13.className = 'form__input-error-message';
    const div14 = document.createElement('div');
    div14.className = 'form__input-group';
    const div15 = document.createElement('div');
    div15.className = 'form__input-error-message';
    
    const form1 = document.createElement('form');
    form1.className = 'form';
    form1.id = 'login';
    const form2 = document.createElement('form');
    form2.className = 'form', 'form--hidden';
    form2.id = 'createAccount';
    
    const input1 = document.createElement('input');
    input1.className = "form__input";
    input1.type = 'text';
    input1.placeholder = 'Username or email';
    input1.autofocus;
    const input2 = document.createElement('input');
    input2.className = "form__input";
    input2.type = 'password';
    input2.placeholder = 'Password';
    input2.autofocus;
    const input3 = document.createElement('input');
    input3.className = "form__input";
    input3.id = 'signupUsername';
    input3.type = 'text';
    input3.placeholder = 'Username';
    input3.autofocus;
    const input4 = document.createElement('input');
    input4.className = "form__input";
    input4.type = 'text';
    input4.placeholder = 'Email Address';
    input4.autofocus;    
    const input5 = document.createElement('input');
    input5.className = "form__input";
    input5.type = 'password';
    input5.placeholder = 'Password';
    input5.autofocus;
    const input6 = document.createElement('input');
    input6.className = "form__input";
    input6.type = 'password';
    input6.placeholder = 'Confirm Password';
    input6.autofocus;
        
    const a1 = document.createElement('a');
    a1.className = 'form__link';
    a1.href = '#';
    a1.innerText = 'Forgot your password?';
    const a2 = document.createElement('a');
    a2.className = 'form__link';
    a2.href = './';
    a2.id = 'linkCreateAccount';
    a2.innerText = 'Don\'t have an account? Create account';
    const a3 = document.createElement('a');
    a3.className = 'form__link';
    a3.href = './';
    a3.id = 'linkLogin';
    a3.innerText = 'Already have an account? Sign in';
    
    const p1 = document.createElement('p');
    p1.className = 'form__text';
    const p2 = document.createElement('p');
    p2.className = 'form__text';
    const p3 = document.createElement('p');
    p3.className = 'form__text';
    
    const button1 = document.createElement('button');
    button1.className = 'form_button';
    button1.type = 'submit';
    button1.innerText = 'Continue';
    
    const button2 = document.createElement('button');
    button2.className = 'form_button';
    button2.type = 'submit';
    button2.innerText = 'Continue';
    
    
    
    
mainDiv().appendChild(h1);
mainDiv().appendChild(div1);
    
div1.appendChild(form1);
    
form1.appendChild(h1two);
form1.appendChild(div2);
form1.appendChild(div3);
    
div3.appendChild(input1);
div3.appendChild(div4);
    
form1.appendChild(div5);
div5.appendChild(input2);
div5.appendChild(div6);
form1.appendChild(button1);
form1.appendChild(p1);
p1.appendChild(a1);
form1.appendChild(p2);
p2.appendChild(a2);
//Above is login^^
//Below is Create account vvv
div1.appendChild(form2);
    
form2.appendChild(h13rd);
form2.appendChild(div7);
form2.appendChild(div8);
    
div8.appendChild(input3);
div8.appendChild(div9);
    
form2.appendChild(div10);
div10.appendChild(input4);
div10.appendChild(div11);
    
form2.appendChild(div12);
div12.appendChild(input5);
div12.appendChild(div13);
    
form2.appendChild(div14);
div14.appendChild(input6);
div14.appendChild(div15);
    
form2.appendChild(button2);
form2.appendChild(p3);
p3.appendChild(a3);
};

/** Requests **/
const loadPosts = () => {
    fetch(baseUrl + '/posts')
        .then(resp => resp.json())
        .then(data => {
            posts = data;
        })
};

/** MISC **/
const resetMainDiv = () => {
    mainDiv().innerHTML = '';
};

/** Startup **/
document.addEventListener('DOMContentLoaded', function(){
    loadPosts();
    loadhome();
    attachHomePageLinkEvent();
    attachCreatePostLinkEvent();
    attachDiscussionsLinkEvent();
    attachLoginLink();
});









/** Fix this later vvvv **/ 
    
//function setFormMessage(formElement, type, message) {
//    const messageElement = formElement.querySelector(".form__message");
//
//    messageElement.textContent = message;
//    messageElement.classList.remove("form__message--success", "form__message--error");
//    messageElement.classList.add(`form__message--${type}`);
//};
//
//function setInputError(inputElement, message) {
//    inputElement.classList.add("form__input--error");
//    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
//};
//
//function clearInputError(inputElement) {
//    inputElement.classList.remove("form__input--error");
//    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
//};
//    
//    const loginForm = document.querySelector("#login");
//    const createAccountForm = document.querySelector("#createAccount");
//    
//    createAccountLink().addEventListener("click", e => {
//        e.preventDefault();
//        loginForm.classList.add("form--hidden");
//        createAccountForm.classList.remove("form--hidden");
//    });
//    document.querySelector("#linkLogin").addEventListener("click", e => {
//        e.preventDefault();
//        loginForm.classList.remove("form--hidden");
//        createAccountForm.classList.add("form--hidden");
//    });
//    
//    loginForm.addEventListener("submit", e => {
//        e.preventDefault();
//        
//        // Perform your AJAX/Fetch login
//        
//        setFormMessage(loginForm, "error", "Invalid username/password combination");
//    });
//    
//    document.querySelectorAll(".form__input").forEach(inputElement => {
//        inputElement.addEventListener("blur", e => {
//            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 8) {
//                setInputError(inputElement, "Username must be at least 8 characters in length");
//            }
//        });
//        
//        inputElement.addEventListener("input", e => {
//            clearInputError(inputElement);
//        });
//    });