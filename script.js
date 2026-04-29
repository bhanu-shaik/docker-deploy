// script.js

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const menu = document.querySelector('.menu');

mobileMenuButton.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Smooth scrolling
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href')); 
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Form handling
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    // handle form data, e.g., send to server
    console.log('Form submitted with:', Object.fromEntries(formData));
});