
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
let currentSlide = 0;

function showSlide(n) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
}

// Nächstes Bild anzeigen
nextBtn.addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Vorheriges Bild anzeigen
prevBtn.addEventListener('click', () => {
    showSlide(currentSlide - 1);
});
   