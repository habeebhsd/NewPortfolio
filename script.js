const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Check if dark mode was previously enabled
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.classList.remove('fa-sun');
    themeToggle.classList.add('fa-moon');
} else {
    body.classList.remove('dark-mode');
    themeToggle.classList.remove('fa-moon');
    themeToggle.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
    if (body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        themeToggle.classList.remove('fa-sun');
        themeToggle.classList.add('fa-moon');
    } else {
        localStorage.setItem('theme', 'light');
        themeToggle.classList.remove('fa-moon');
        themeToggle.classList.add('fa-sun');
    }
});

const menuBtn = document.getElementById('menuBtn');
const nav = document.querySelector('.nav');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('active');
    menuBtn.classList.toggle('fa-bars');
    menuBtn.classList.toggle('fa-times');
});

const typingText = document.getElementById("typingText");
const texts = ["I'm a Web Developer", "I'm a Frontend Developer", "I'm a Social Media Manager"];
let index = 0;
function typeEffect() {
    typingText.textContent = texts[index];
    index = (index + 1) % texts.length;
    setTimeout(typeEffect, 3000);
}
typeEffect();

// eduction
function showSection(section) {
    // Hide all sections
    document.querySelectorAll('.content').forEach(el => el.classList.remove('active'));
    
    // Show selected section
    document.getElementById(section).classList.add('active');

    // Remove active class from all buttons
    document.querySelectorAll('.toggle-btn').forEach(btn => btn.classList.remove('active'));

    // Add active class to clicked button
    document.querySelector(`.toggle-btn[onclick="showSection('${section}')"]`).classList.add('active');
}

// Skills

function showSection(section, type) {
    let sections, buttons;

    // Identify which type of section we are toggling (experience-education OR skills-tools)
    if (type === 'experience-education') {
        sections = document.querySelectorAll('.content');
        buttons = document.querySelectorAll('.toggle-btn');
    } else if (type === 'skills-tools') {
        sections = document.querySelectorAll('.grid');
        buttons = document.querySelectorAll('.btn');
    }

    // Hide all sections and remove active class from buttons
    sections.forEach(el => el.style.display = 'none');
    buttons.forEach(el => el.classList.remove('active'));

    // Show the selected section
    document.getElementById(section).style.display = section.includes('skills') || section.includes('tools') ? 'grid' : 'block';

    // Add active class to clicked button
    document.querySelector(`[onclick="showSection('${section}', '${type}')"]`).classList.add('active');
}

// Initialize by showing the default active sections
document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('.content.active').style.display = 'block';
    document.getElementById('skills').style.display = 'grid';
});

// project

