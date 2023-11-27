const loaderContainer = document.querySelector('.loader-container');
const mainImage = document.getElementById('main-image');
const imageSources = [
    "1char4.jpg",
    "2char4.jpg",
    "34chars4.jpg",
    "5char4.jpg",
    "6char4.jpg",
    "7char4.jpg",
    "8char4.jpg",
    "9char4.jpg"
];

var currentImageIndex = 0;

function updateOverlay() {
    const overlay = document.getElementById("overlay");

    const newLine = document.createElement("p");
    if(currentImageIndex === 7)
    {
        const ref = document.createElement("a");
        ref.style.width = "100%";
        ref.style.height = "100%";
        ref.href = "5.html";
        ref.style.display = "flex";
        ref.style.alignItems = "center";
        ref.style.justifyContent = "center";
        newLine.textContent = "Нажмите, чтобы перейти";
        newLine.style.color = getComputedStyle(document.querySelector(":root")).getPropertyValue("--event-color");
        ref.style.textDecoration = "none";
        overlay.innerHTML = "";
        ref.appendChild(newLine);
        overlay.appendChild(ref);
    }
    else
    {
        newLine.textContent = "В разработке";
        overlay.innerHTML = "";
        overlay.appendChild(newLine);
    }
}

function changeImage(direction) {
    currentImageIndex += direction;

    if (currentImageIndex < 0) {
        currentImageIndex = imageSources.length - 1;
    } else if (currentImageIndex >= imageSources.length) {
        currentImageIndex = 0;
    }

    mainImage.style.opacity = 0;

    setTimeout(() => {
        mainImage.src = imageSources[currentImageIndex];
        mainImage.style.opacity = 1;
    }, 500);
    updateOverlay();
}

window.addEventListener('load', () => {
    setTimeout(() => {
        loaderContainer.style.display = 'none';
    }, 1000);
});