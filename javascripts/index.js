/** Global Variables **/



/** Node Getters **/
const mainDiv = () => document.getElementById('main');
const homelink = () => document.getElementById('home-link');


/** Event Listeners **/
const attachHomePageLinkEvent = () => {
    homelink().addEventListener('click', loadhome );
}


/** Event Handlers **/
const loadhome = () => {
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


/** MISC **/
const resetMainDiv = () => {
    mainDiv().innerHTML = '';
}


/** Startup **/

document.addEventListener('DOMContentLoaded', function(){
    loadhome();
    attachHomePageLinkEvent();
})
