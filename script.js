

// Typing animation in Index.html
document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.getElementById("name");
    const text = "Francesco Caglianone";
    let index = 0;

    function type() {
        if (index < text.length) {
            nameElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 150);
        }
    }

    type();
});





// Navigation toggle for media query
let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    navlist.classList.toggle('active');
};

window.onscroll = () => {
    navlist.classList.remove('active');
};















const slides = document.querySelector('.slides');
const slideCount = document.querySelectorAll('.slide').length;
const dots = document.querySelectorAll('.dot');
let currentIndex = 0;
let slideInterval;

function showNextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlidePosition();
}

function showPrevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlidePosition();
}

function currentSlide(index) {
    currentIndex = index;
    updateSlidePosition();
}

function updateSlidePosition() {
    slides.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
    resetInterval();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(showNextSlide, 5000);
}

document.querySelector('.left').addEventListener('click', showPrevSlide);
document.querySelector('.right').addEventListener('click', showNextSlide);

updateSlidePosition();
resetInterval();

