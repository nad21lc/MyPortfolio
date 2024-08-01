// Typing effect
const typedTextSpan = document.querySelector(".typing-text span");
const textArray = ["Web Designer", "Full-Stack Developer", "Software Engineer"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () { // On DOM Load initiate the effect
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// Toggle navbar
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Update active link
const navLinks = document.querySelectorAll('.navbar a');

navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navLinks.forEach(navLink => navLink.classList.remove('active'));
        this.classList.add('active');
    });
});

// Copy to clipboard
function copyToClipboard(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    alert('WhatsApp number copied to clipboard');
}

document.addEventListener('DOMContentLoaded', function() {
    const projectFilters = document.querySelectorAll('.project-filter li');

    projectFilters.forEach(filter => {
        filter.addEventListener('click', function() {
            //Remove active class from all filters
            projectFilters.forEach(item => item.classList.remove('project-filter-active'));
            
            //Add active class to the clicked filter
            this.classList.add('project-filter-active');

            // Get the filter value
            const filterValue = this.getAttribute('data-filter');

            // Get all project boxes
            const projects = document.querySelectorAll('.project-box');

            // Loop through all project boxes
            projects.forEach(project => {
                const projectType = project.classList;

                if (filterValue === 'all' || projectType.contains(filterValue)) {
                    project.style.display = 'block';
                } else {
                    project.style.display = 'none';
                }
            });
        });
    });
});
