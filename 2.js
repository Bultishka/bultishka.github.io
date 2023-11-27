const loaderContainer = document.querySelector('.loader-container');
const chatContainer = document.getElementById('chat-container');
const messages = [
    "Что это?",
    "Это сайт",
    "О чём это?",
    "Данный сайт посвящён персонажам мультфильмов",
    "Когда это было сделано?",
    "Данный сайт выпущен в раннем доступе в 2023 году"
];

window.addEventListener('load', () => {
    setTimeout(() => {
        loaderContainer.style.display = 'none';
    }, 1000);

    let currentIndex = 0;
    const intervalId = setInterval(() => {
        if (currentIndex < messages.length) {
            const messageContainer = document.createElement('div');
            const messageClass = currentIndex % 2 === 0 ? 'incoming' : 'outgoing';
            messageContainer.className = `message-container ${messageClass}`;
            messageContainer.innerHTML = `
                    <div class="message">
                        <p class="message-text">${messages[currentIndex]}</p>
                    </div>
                `;
            chatContainer.appendChild(messageContainer);
            currentIndex++;
        } else {
            clearInterval(intervalId);
        }
    }, 2500);
});