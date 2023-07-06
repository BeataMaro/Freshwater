import './style.scss';
import './components/heroComponent/hero';
import './components/productsComponent/products';
import './components/footerComponent/footer.js';

const BODY = document.body;

// open hamburger menu
const hamburgerMenu = document.getElementById('ham-menu');
hamburgerMenu.addEventListener('click', () => BODY.classList.toggle('open'));

// prevent form submitting
const forms = document.querySelectorAll('form');
[...forms].map((form) => form.addEventListener('submit', (e) => e.preventDefault()));
