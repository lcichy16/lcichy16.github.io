let index = 0;
const slides = document.querySelector(".portfolio-slider");
const totalSlides = document.querySelectorAll(".portfolio-item").length;
const visibleSlides = 3;

function moveSlide(direction) {
    const maxIndex = totalSlides - visibleSlides;
    index += direction;
    if (index < 0) index = 0;
    if (index > maxIndex) index = maxIndex;
    slides.style.transform = `translateX(-${index * (100 / visibleSlides)}%)`;
}

window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let options = {
        strings: [
            "JESTEM WEB DEVELOPEREM.",
            "TWORZĘ NOWOCZESNE STRONY.",
            "KOCHAM PROGRAMOWANIE."
        ],
        typeSpeed: 90,  // Szybkość pisania
        backSpeed: 50,  // Szybkość usuwania
        backDelay: 1500, // Czas oczekiwania przed usunięciem
        startDelay: 500, // Czas startu po załadowaniu strony
        loop: true,  // Powtarzanie w nieskończoność
        showCursor: false, // Pokazuje kursor
        cursorChar: "_",  // Styl kursora
    };

    let typed = new Typed("#typed-text", options);
});

function toggleMenu() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('open');
}

// Close menu when clicking outside
window.addEventListener('click', function(e) {
    const navbar = document.querySelector('.navbar');
    const navbarLinks = document.querySelector('.navbar-links');
    const hamburger = document.querySelector('.hamburger');

    // Close the menu if the click is outside the navbar or hamburger
    if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
        navbar.classList.remove('open');
    }
});


