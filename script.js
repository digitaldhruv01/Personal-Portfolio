// Typing Effect
const typedText = document.querySelector(".typing");
const textArray = ["Web Developer", "AI/ML Enthusiast", "Freelancer", "Tech Lover"];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentText = textArray[textIndex];
    if (isDeleting) {
        typedText.textContent = currentText.substring(0, charIndex--);
    } else {
        typedText.textContent = currentText.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(typeEffect, 1000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % textArray.length;
        setTimeout(typeEffect, 500);
    } else {
        setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);


let slides = document.querySelectorAll(".slide");
let index = 0;

function showSlide() {
    slides.forEach((slide, i) => {
        slide.classList.remove("active");
        if (i === index) {
            slide.classList.add("active");
        }
    });

    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000);
