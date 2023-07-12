// tooltip bootstrap
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

// spans that copy to clipboard by clicking
const needToCopy = document.querySelectorAll('.click-to-copy');

needToCopy.forEach(element => {
    element.addEventListener('click', () => {
        copyToClipboard(element.textContent);
    })
});

function copyToClipboard(text) {
    navigator.clipboard.writeText(text);
}
