// landing-script.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Counter animations
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    counter.innerText = '0';
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;
        const increment = Math.trunc(target / 100);
        if (c < target) {
            counter.innerText = c + increment;
            setTimeout(updateCounter, 1);
        } else {
            counter.innerText = target;
        }
    };\n    updateCounter();
});

// Form handling
const form = document.getElementById('contact-form');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
});

// Demo interactions for buttons
const buttons = document.querySelectorAll('.demo-button');
bbuttons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Demo button clicked!');
    });
});

// Navigation functionality
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});