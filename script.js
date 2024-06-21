document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    var newUrl = currentUrl;

    if (currentUrl.includes("github.io")) {
        // Handle index.html or index
        if (currentUrl.endsWith("index.html")) {
            newUrl = currentUrl.replace(/index\.html$/, '');
        } else if (currentUrl.endsWith("index")) {
            newUrl = currentUrl.replace(/index$/, '');
        }

        // Ensure URL ends with a '/'
        if (!newUrl.endsWith('/')) {
            newUrl += '/';
        }

        // Handle other .html extensions
        if (currentUrl.endsWith(".html") && !currentUrl.endsWith("index.html")) {
            newUrl = newUrl.replace(/\.html$/, '');
        }

        // Redirect to the new URL if it has been modified
        if (newUrl !== currentUrl) {
            window.history.replaceState(null, null, newUrl);
        }
    }
});

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
        if (profilePic.complete) {
            profilePic.classList.add('loaded');
        } else {
            profilePic.onload = function() {
                profilePic.classList.add('loaded');
            };
        }
    }
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

document.addEventListener("DOMContentLoaded", function() {
    const projects = document.querySelectorAll('.project');
    let currentExpandedProject = null;

    projects.forEach(project => {
        const fullDescription = project.querySelector('.full-description');
        const buttons = project.querySelector('.project-buttons');

        project.addEventListener('click', () => {
            if (project.classList.contains('expanded')) {
                fullDescription.style.maxHeight = null;
                project.classList.remove('expanded');
                if (buttons) {
                    buttons.style.maxHeight = "0";
                    buttons.style.overflow = "hidden";
                    console.log("Buttons hidden");
                }
                currentExpandedProject = null;
            } else {
                if (currentExpandedProject) {
                    const prevFullDescription = currentExpandedProject.querySelector('.full-description');
                    prevFullDescription.style.maxHeight = null;
                    currentExpandedProject.classList.remove('expanded');
                    const prevButtons = currentExpandedProject.querySelector('.project-buttons');
                    if (prevButtons) {
                        prevButtons.style.maxHeight = "0";
                        prevButtons.style.overflow = "hidden";
                        console.log("Previous buttons hidden");
                    }
                }
                fullDescription.style.maxHeight = fullDescription.scrollHeight + "px";
                project.classList.add('expanded');
                if (buttons) {
                    buttons.style.maxHeight = "100%";
                    buttons.style.overflow = "visible";
                    console.log("Buttons shown");
                }
                currentExpandedProject = project;
            }
        });
    });
});
