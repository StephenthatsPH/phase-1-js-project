/** Global Variables **/



/** Node Getters **/
const mainDiv = () => document.getElementById('main');
const homeLink = () => document.getElementById('home-link');
const createPostLink = () => document.getElementById('create-post-link');
const discussionsLink = () => document.getElementById('discussions-link');

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

    mainDiv().appendChild(h1);
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


/** Startup **/

document.addEventListener('DOMContentLoaded', function(){
    loadhome();
    attachHomePageLinkEvent();
    attachCreatePostLinkEvent();
    attachDiscussionsLinkEvent();
})
