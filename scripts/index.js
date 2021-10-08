const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close');
const editButton = document.querySelector('.profile__edit-button');

const formButton = document.querySelector('.popup__button');
const form = document.querySelector('.popup__form');

const nameField = document.querySelector('.popup__input_name');
const nameProfile =document.querySelector('.profile__name');

const professionField = document.querySelector('.popup__input_profession');
const professionText =document.querySelector('.profile__text');


function openPopup() {
    popup.classList.add('popup__open');
}

function closePopup() {
    popup.classList.remove('popup__open');
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