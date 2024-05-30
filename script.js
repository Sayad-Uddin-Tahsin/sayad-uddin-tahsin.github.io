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
    if (typedTitle && typedDescription && buttons) {
        // Specific logic for index.html
        typewriterEffect('Sayad Uddin Tahsin', typedTitle);
        typewriterEffect('Passionate Software Developer and Tech Enthusiast', typedDescription);
        setTimeout(() => {
            buttons.classList.add('fade-visible');
        }, 1000);
    }
});
