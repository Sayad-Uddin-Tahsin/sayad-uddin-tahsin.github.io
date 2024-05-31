const typedTitle = document.getElementById('typed-text');
const typedDescription = document.getElementById('typed-description');
const buttons = document.querySelector('.buttons');

const typewriterEffect = (text, element) => {
    let charIndex = 0;
    const typeInterval = setInterval(() => {
        if (charIndex === text.length) {
            clearInterval(typeInterval);
            return;
        }
        element.textContent += text[charIndex];
        charIndex++;
    }, 50);
};

window.addEventListener('load', () => {
    if (typedTitle) {
        const title = typedTitle.getAttribute('data-typed');
        typewriterEffect(title, typedTitle);
    }
    if (typedDescription) {
        const description = typedDescription.getAttribute('data-typed');
        typewriterEffect(description, typedDescription);
    }
    if (buttons) {
        setTimeout(() => {
            buttons.classList.add('fade-visible');
        }, 1000);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var profilePic = document.querySelector('.profile-pic');
    if (profilePic) {
        profilePic.addEventListener('load', function() {
            setTimeout(() => {
                profilePic.classList.add('loaded');
            }, 100);
        });
    };
});

document.addEventListener("DOMContentLoaded", function() {
    var blackRegion = document.querySelector('.black-region');
    var fadeInSection = document.querySelector('.fade-in-page-title');
    var header = document.querySelector('header');

    if (blackRegion && fadeInSection) {
        blackRegion.style.opacity = '1';
        blackRegion.style.height = '25vh';
        fadeInSection.classList.add('show');
    }

    if (header) {
        header.classList.add('show');
    }
});
