"use strict";

const animateName = document.querySelector('.h1_anim');
const animateLinks = document.querySelectorAll('.animate');
console.log(animateLinks);



const init = function () {

    if (sessionStorage.getItem("hasCodeRunBefore") === null) {

        console.log('here');
        sessionStorage.setItem("hasCodeRunBefore", false);

    } else {
        console.log('there');
        animateName.classList.remove('h1_anim');
        for (var i = 0; i < animateLinks.length; i++) {
            animateLinks[i].classList.remove('animate')
        }
    }
}
init();