// === Dynamic navigation active state ===

// Select all sections and nav links
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

// Add scroll event listener
window.addEventListener('scroll', () => {
    let current = '';

    // Find current section in view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute('id');
        }
    });

    // Update active class in nav links
    navLinks.forEach((link) => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// === Scroll down arrow functionality ===
const scrollDown = document.querySelector('.scroll-down');
const nextSection = document.querySelector('#education');

if (scrollDown && nextSection) {
    scrollDown.addEventListener('click', () => {
        nextSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Fade-in effect for project cards
const cards = document.querySelectorAll('.project-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));