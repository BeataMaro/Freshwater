// Hero carousel

const carousel = document.querySelector('.hero-slider');
const carouselImages = carousel.getElementsByTagName('li');
const carouselNavButtons = document.querySelectorAll('.hero-carousel-nav');
let currentIndex = 0;

// Show the current slide and hide the rest
function showSlide(index) {
  [...carouselImages].map((image) => image.classList.remove('active'));
  carouselImages[index].classList.add('active');

  [...carouselNavButtons].map((dot) => dot.classList.remove('active'));
  carouselNavButtons[index].classList.add('active');
}

function nextSlide() {
  currentIndex++;
  if (currentIndex >= carouselImages.length) {
    currentIndex = 0;
  }
  showSlide(currentIndex);
}

// Automatic slide change
let slideInterval = setInterval(nextSlide, 3000);

// Event listener for navigation buttons
[...carouselNavButtons].forEach((button) => {
  button.addEventListener('click', (e) => {
    const slideIndex = parseInt(e.target.getAttribute('data-slide-index'));
    clearInterval(slideInterval);
    currentIndex = slideIndex;
    showSlide(currentIndex);
    slideInterval = setInterval(nextSlide, 3000);
  });
});
