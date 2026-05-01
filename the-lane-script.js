// Interactive JavaScript Functionality for That's My Lingo

// Smooth Scrolling Navigation
const scrollToSection = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    targetSection.scrollIntoView({ behavior: 'smooth' });
};

const menuLinks = document.querySelectorAll('a[href^="#"]');
menuLinks.forEach(link => link.addEventListener('click', scrollToSection));

// Active Menu Highlighting
const sections = document.querySelectorAll('section');
const highlightMenu = () => {
    const scrollPos = window.scrollY;
    sections.forEach(section => {
        if (section.offsetTop <= scrollPos && section.offsetTop + section.offsetHeight > scrollPos) {
            const activeId = section.getAttribute('id');
            menuLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + activeId) {
                    link.classList.add('active');
                }
            });
        }
    });
};

window.addEventListener('scroll', highlightMenu);

// Mobile Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
});

// Animate-On-Scroll Effects for Feature Cards
const featureCards = document.querySelectorAll('.feature-card');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
});
featureCards.forEach(card => observer.observe(card));

// Counter Animations for Stats
const counters = document.querySelectorAll('.counter');
counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = Math.trunc(target / 100);
        if (count < target) {
            counter.innerText = count + increment;
            setTimeout(updateCount, 10);
        } else {
            counter.innerText = target;
        }
    };
    observer.observe(counter);
});

// Modal Popups for CTAs
const modalButtons = document.querySelectorAll('.modal-button');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
modalButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.classList.add('active');
    });
});
closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputs = form.querySelectorAll('input, textarea');
    let valid = true;
    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    if (valid) {
        form.submit();
    }
});

// Lazy Loading for Images
const lazyLoadImages = document.querySelectorAll('img[data-src]');
const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.onload = () => img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
};

const imgObserver = new IntersectionObserver(lazyLoad);
lazyLoadImages.forEach(img => imgObserver.observe(img));

// Smooth Page Transitions
const transitionLinks = document.querySelectorAll('a');
transitionLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetUrl = event.currentTarget.href;
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = targetUrl;
        }, 500);
    });
});

// Event Listeners for Interactive Elements
const interactiveElements = document.querySelectorAll('.interactive');
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.classList.add('hover');
    });
    element.addEventListener('mouseleave', () => {
        element.classList.remove('hover');
    });
});

