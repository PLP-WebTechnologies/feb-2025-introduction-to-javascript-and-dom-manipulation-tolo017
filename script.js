// Change text content dynamically
const dynamicText = document.getElementById('dynamic-text');
const textChangeBtn = document.getElementById('text-change-btn');

textChangeBtn.addEventListener('click', () => {
    dynamicText.textContent = "The text has been changed successfully!";
});

// Modify CSS styles via JavaScript
const styleBox = document.getElementById('style-box');
const styleChangeBtn = document.getElementById('style-change-btn');

styleChangeBtn.addEventListener('click', () => {
    styleBox.classList.toggle('styled-box');
});

// Add or remove an element when a button is clicked
const toggleElementBtn = document.getElementById('toggle-element-btn');
const toggleableElement = document.getElementById('toggleable-element');
const elementContainer = document.getElementById('element-container');

let elementExists = true;

toggleElementBtn.addEventListener('click', () => {
    if (elementExists) {
        elementContainer.removeChild(toggleableElement);
        toggleElementBtn.textContent = 'Add Element';
    } else {
        elementContainer.appendChild(toggleableElement);
        toggleElementBtn.textContent = 'Remove Element';
    }
    elementExists = !elementExists;
});