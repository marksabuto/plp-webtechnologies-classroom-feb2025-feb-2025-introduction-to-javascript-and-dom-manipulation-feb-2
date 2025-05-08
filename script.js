// Wait for DOM to be fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const changeTextBtn = document.getElementById('change-text-btn');
    const changeableText = document.getElementById('changeable-text');
    
    changeTextBtn.addEventListener('click', function() {
        changeableText.textContent = "The text has been changed successfully!";
    });
    
    // 2. Modify CSS styles via JavaScript
    const styleBox = document.getElementById('style-box');
    
    styleBox.addEventListener('click', function() {
        // Toggle between two different styles
        if (styleBox.style.backgroundColor === 'lightblue') {
            styleBox.style.backgroundColor = 'lightcoral';
            styleBox.style.color = 'white';
            styleBox.style.borderRadius = '50px';
            styleBox.textContent = 'New styles applied!';
        } else {
            styleBox.style.backgroundColor = 'lightblue';
            styleBox.style.color = 'black';
            styleBox.style.borderRadius = '0';
            styleBox.textContent = 'This box will change style when clicked';
        }
    });
    
    // 3. Add or remove an element when a button is clicked
    const toggleElementBtn = document.getElementById('toggle-element-btn');
    const elementContainer = document.getElementById('element-container');
    let toggleableElement = document.querySelector('.toggleable');
    
    toggleElementBtn.addEventListener('click', function() {
        if (toggleableElement) {
            elementContainer.removeChild(toggleableElement);
            toggleableElement = null;
        } else {
            toggleableElement = document.createElement('p');
            toggleableElement.className = 'toggleable';
            toggleableElement.textContent = 'This element can be toggled';
            elementContainer.appendChild(toggleableElement);
        }
    });
});