const loaderContainer = document.querySelector('.loader-container');
window.addEventListener('load', () => {
    setTimeout(() => {
        loaderContainer.style.display = 'none';
    }, 1000);
});