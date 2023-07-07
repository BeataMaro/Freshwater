// Hero carousel

const carousel = document.querySelector('.hero-slider');
const carouselSlides = carousel.getElementsByTagName('li');
const carouselNavButtons = document.querySelectorAll('.hero-carousel-nav');
const navButtons = document.querySelector('.hero-slide-controls');
let currentIndex = 0;

// Show the current slide and hide the rest
function showSlide(index) {
  [...carouselSlides].map((slide) => slide.classList.remove('active'));
  carouselSlides[index].classList.add('active');

  [...carouselNavButtons].map((dot) => dot.classList.remove('active'));
  carouselNavButtons[index].classList.add('active');
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselSlides.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Automatic slide change
let slideInterval = setInterval(nextSlide, 3000);

// Change slide on click
navButtons.addEventListener('click', (e) => {
  let target = e.target;

  if (target.tagName === 'BUTTON') {
    const slideIndex = parseInt(target.getAttribute('data-slide-index'));
    clearInterval(slideInterval);
    currentIndex = slideIndex;
    showSlide(currentIndex);
    slideInterval = setInterval(nextSlide, 3000);
  }
});
