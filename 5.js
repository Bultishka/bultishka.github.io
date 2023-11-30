const imageSources = [
    "195.jpg",
    "295.jpeg",
    "395.jpg",
    "595.jpg",
    "695.webp",
    "795.jpg",
    "895.jpg"
];

var curimg = 0;

function getRandomImage() {
    curimg += 1;
    return imageSources[curimg%imageSources.length];
}

function updateImage() {
    const imagesContainer = document.getElementById("images");
    const newImageSrc = getRandomImage();

    const newImage = document.createElement("img");
    newImage.src = newImageSrc;
    newImage.alt = "Random Image";

    imagesContainer.innerHTML = "";
    imagesContainer.appendChild(newImage);
}

setInterval(updateImage, 3000);

const loaderContainer = document.querySelector('.loader-container');

window.addEventListener('load', () => {
    setTimeout(() => {
        loaderContainer.style.display = 'none';
    }, 1000);
});
