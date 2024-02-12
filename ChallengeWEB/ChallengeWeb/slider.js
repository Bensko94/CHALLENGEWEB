let currentSlide = 0;
const slides = document.querySelectorAll('.article-container > article');

function showSlide(index) {
    if (index >= slides.length) index = 0;
    if (index < 0) index = slides.length - 1;
    slides.forEach((slide, ind) => {
        slide.style.transform = `translateX(${(ind - index) * 100}%)`;
    });
    currentSlide = index;
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide); 
    document.querySelector('.scroll-left').addEventListener('click', () => {
        showSlide(currentSlide - 1);
    });
    document.querySelector('.scroll-right').addEventListener('click', () => {
        showSlide(currentSlide + 1);
    });
});
