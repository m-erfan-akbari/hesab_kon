// change nav-item color
const text_change = document.querySelectorAll('.nav-link');

text_change.forEach(element => {
    element.parentElement.addEventListener('mouseover', () => {
        element.classList.remove('text-light');
    })
    element.parentElement.addEventListener('mouseleave', () => {
        element.classList.add('text-light');
    })
});