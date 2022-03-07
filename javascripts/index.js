/** Global Variables **/



/** Node Getters **/
const mainDiv = () => document.getElementById('main');
const homeLink = () => document.getElementById('home-link');
const createPostLink = () => document.getElementById('create-post-link');
const discussionsLink = () => document.getElementById('discussions-link');
const loginLink = () => document.getElementById('login-link');
const versusLink = () => document.getElementById("name-logo");

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
const loadhome = event => {
    if(event) {
        event.preventDefault();
    }
    resetMainDiv();
    const h1 = document.createElement('h1')
    const p = document.createElement('p')
    
    h1.className = 'center-align';
    p.className = 'center-align';
    
    h1.innerText = 'Versus';
    p.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi placeat, optio voluptatem, magni voluptas fuga architecto nesciunt sequi praesentium suscipit nihil dolore hic esse. In iure maxime quos tenetur pariatur!';
    
    mainDiv().appendChild(h1);
    mainDiv().appendChild(p);
}

const loadCreatePost = event => {
    event.preventDefault();
    resetMainDiv();
    const h1 = document.createElement('h1');
    h1.innerText = 'Create Post';
    const div = document.createElement('div');
    const form = document.createElement('form');
    
    const label1 = document.createElement('label');
        label1.innerText = 'UserName';
    const label2 = document.createElement('label');
        label2.innerText = 'Title';
    const label3 = document.createElement('label');
        label3.innerText = 'Tags (Optional)';
    const label4 = document.createElement('label');
        label4.innerText = 'Text (optional)';

    const input1 = document.createElement('input');
        input1.type = "text";
        input1.id = "Username";
        input1.name = "UserName";
        input1.placeholder = "UserName";
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
    const input4 = document.createElement('input');
        input4.type = "submit";
        input4.innerText = "Post";

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
    form.appendChild(input4);
    
    div.appendChild(form);
    
    mainDiv().appendChild(h1);
    mainDiv().appendChild(div);
}

const loadDiscussions = event => {
    event.preventDefault();
    resetMainDiv();
    const h1 = document.createElement('h1');
    h1.innerText = 'Discussions';
    
    mainDiv().appendChild(h1);
}

// loadLogin goes here

/** MISC **/
const resetMainDiv = () => {
    mainDiv().innerHTML = '';
}

versusLink().addEventListener('click', function() {
    alert('Keep touching me and we will 1v1!');
});

/** Startup **/

document.addEventListener('DOMContentLoaded', function(){
    loadhome();
    attachHomePageLinkEvent();
    attachCreatePostLinkEvent();
    attachDiscussionsLinkEvent();
    attachLoginLink();
})







const loadLogin = event => {
    event.preventDefault();
    resetMainDiv();
    const h1 = document.createElement('h1');
        h1.innerText = 'Login';
    const h1two = document.createElement('h1');
        h1two.className = 'form__title';
    const h1three = document.createElement('h1');
        h1two.className = 'form__title';
    
    const div1 = document.createElement('div');
        div1.className = 'container-login';
        div1.id = 'login';
    const div2 = document.createElement('div');
        div2.className = 'form__message', 'form__message--error';
    const div3 = document.createElement('div');
        div3.className = 'form__input-group';
    const div4 = document.createElement('div');
        div4.className = 'form__input-error-message';

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

    const button = document.createElement('button');
        button.className = 'form_button';
        button.type = 'submit';
        button.innerText = 'Continue';

     mainDiv().appendChild(h1);
     mainDiv().appendChild(div1);
    }
    // <div class="container-login">
    //     <form class="form" id="login">
    //         <h1 class="form__title">Login</h1>
    //         <div class="form__message form__message--error"></div>
    //         <div class="form__input-group">
    //             <input type="text" class="form__input" autofocus placeholder="Username or email">
    //             <div class="form__input-error-message"></div>
    //         </div>
    //         <div class="form__input-group">
    //             <input type="password" class="form__input" autofocus placeholder="Password">
    //             <div class="form__input-error-message"></div>
    //         </div>
    //         <button class="form__button" type="submit">Continue</button>
    //         <p class="form__text">
    //             <a href="#" class="form__link">Forgot your password?</a>
    //         </p>
    //         <p class="form__text">
    //             <a class="form__link" href="./" id="linkCreateAccount">Don't have an account? Create account</a>
    //         </p>
    //     </form>
    //     <form class="form form--hidden" id="createAccount">
    //         <h1 class="form__title">Create Account</h1>
    //         <div class="form__message form__message--error"></div>
    //         <div class="form__input-group">
    //             <input type="text" id="signupUsername" class="form__input" autofocus placeholder="Username">
    //             <div class="form__input-error-message"></div>
    //         </div>
    //         <div class="form__input-group">
    //             <input type="text" class="form__input" autofocus placeholder="Email Address">
    //             <div class="form__input-error-message"></div>
    //         </div>
    //         <div class="form__input-group">
    //             <input type="password" class="form__input" autofocus placeholder="Password">
    //             <div class="form__input-error-message"></div>
    //         </div>
    //         <div class="form__input-group">
    //             <input type="password" class="form__input" autofocus placeholder="Confirm password">
    //             <div class="form__input-error-message"></div>
    //         </div>
    //         <button class="form__button" type="submit">Continue</button>
    //         <p class="form__text">
    //             <a class="form__link" href="./" id="linkLogin">Already have an account? Sign in</a>
    //         </p>
    //     </form>
    // </div>