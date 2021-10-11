const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');

const formButton = document.querySelector('.popup__button');
const form = document.querySelector('.popup__form');

const nameField = document.querySelector('.popup__input');
const nameProfile = document.querySelector('.profile__name');

const professionField = document.querySelector('#profession');
const professionText =document.querySelector('.profile__text');


function openPopup() {
    popup.classList.add('popup_open');
    nameField.value = nameProfile.textContent.trim();
    professionField.value = professionText.textContent.trim();
}

function closePopup() {
    popup.classList.remove('popup_open');
}

editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);

function submitForm(event) {
    event.preventDefault();

    nameProfile.textContent = nameField.value;
    professionText.textContent = professionField.value;

    closePopup();
}

form.addEventListener('submit', submitForm);