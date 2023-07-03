import './style.scss';

const BODY = document.body;

// open hamburger menu
const hamburgerMenu = document.getElementById('ham-menu');
hamburgerMenu.addEventListener('click', () => BODY.classList.toggle('open'));

// prevent form submitting
const forms = document.querySelectorAll('form');
[...forms].map((form) => form.addEventListener('submit', (e) => e.preventDefault()));

// footer zipper

const arrow1 = document.getElementById('arrow-1');
const arrow2 = document.getElementById('arrow-2');

const menuAccount = document.getElementById('expand-account');
const menuInfo = document.getElementById('expand-info');

arrow1.addEventListener('click', () => {
    menuAccount.classList.toggle('desktop')
});
arrow2.addEventListener('click', () => {
    menuInfo.classList.toggle('desktop')
});

