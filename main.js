'use strict';

const modalBtn = document.querySelector('.modalbtn');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.clsbtn');

modalBtn.addEventListener('click', openModal);
//modal.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);

function openModal() {
    modal.style.display ='block';   
}


function closeModal() {
    modal.style.display = 'none';
}