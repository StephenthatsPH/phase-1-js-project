/** Global Variables **/



/** Node Getters **/
const mainDiv = () => document.getElementById('main');
const homeLink = () => document.getElementById('home-link');
const createPostLink = () => document.getElementById('create-post-link');
const discussionsLink = () => document.getElementById('discussions-link');
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
})