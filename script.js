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

// Skills and Experience/Education section toggle
function showSection(section, type) {
    let sections, buttons;

    // Identify which type of section we are toggling (experience-education OR skills-tools)
    if (type === 'experience-education') {
        sections = document.querySelectorAll('#experience, #education');
        buttons = document.querySelectorAll('.toggle-btn');
    } else if (type === 'skills-tools') {
        sections = document.querySelectorAll('#skills, #tools');
        buttons = document.querySelectorAll('.btn');
    }

    // Hide all sections and remove active class from buttons
    sections.forEach(el => {
        if (type === 'experience-education') {
            el.classList.remove('active');
        } else {
            el.style.display = 'none';
        }
    });
    buttons.forEach(el => el.classList.remove('active'));

    // Show the selected section
    const selectedSection = document.getElementById(section);
    if (type === 'experience-education') {
        selectedSection.classList.add('active');
    } else {
        selectedSection.style.display = 'grid';
    }

    // Add active class to clicked button
    document.querySelector(`[onclick="showSection('${section}', '${type}')"]`).classList.add('active');
}

// Initialize by showing the default active sections
document.addEventListener('DOMContentLoaded', function () {
    // Show experience section by default
    document.getElementById('experience').classList.add('active');
    document.querySelector('.toggle-btn[onclick="showSection(\'experience\', \'experience-education\')"]').classList.add('active');
    
    // Show skills section by default
    document.getElementById('skills').style.display = 'grid';
    document.querySelector('.btn[onclick="showSection(\'skills\', \'skills-tools\')"]').classList.add('active');
});

// project

