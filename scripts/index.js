import { navbar, footer } from "../components/navbar.js";

let catchElement = (element) => {
    return document.querySelector(element);
};

let createElement = (element) => {
    return document.createElement(element);
};


catchElement('.navbar').innerHTML = navbar();

/* Resume opening link */

catchElement('.nav-resume-button').addEventListener('click', () => {
    window.open("https://drive.google.com/file/d/1G_7xHAzAIzyTWsdCWVrVXyJtqMYzrhYX/view?usp=sharing");
});

catchElement('.resume-button').addEventListener('click', () => {
    window.open("https://drive.google.com/file/d/1G_7xHAzAIzyTWsdCWVrVXyJtqMYzrhYX/view?usp=sharing");
});


/* navbar menu */

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");

hamburger.addEventListener("click", mobileMenu);
navLink.forEach(n => n.addEventListener("click", closeMenu));

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

catchElement('.git-contri').addEventListener('click', () => {
    window.open("https://github.com/jkka777");
});

catchElement('.git-status').addEventListener('click', () => {
    window.open("https://github.com/jkka777");
});