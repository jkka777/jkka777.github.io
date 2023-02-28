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
