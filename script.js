function showPopup(title, description, imageUrl) {
    const popup = document.getElementById('popup');
    const popupTitle = document.getElementById('popup-title');
    const popupDescription = document.getElementById('popup-description');
    const popupImage = document.getElementById('popup-image');

    popupTitle.textContent = title;
    popupDescription.textContent = description;
    popupImage.src = imageUrl;

    popup.style.display = 'flex';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}

document.getElementById('show-email').addEventListener('click', (event) => {
    event.preventDefault();
    const emailDisplay = document.getElementById('email-display');
    emailDisplay.textContent = 'rafaelcosta.2600@gmail.com';
    emailDisplay.style.display = 'block';
});
