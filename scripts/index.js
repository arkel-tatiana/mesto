// большое спасибо за классное ревью. незнаю куда написать поэтому решила ЗДЕСЬ.
// эт пожалуй лучшее ревью из того что я получала. сразу понятно что Вам не все равно,
// а ВЫ пытаетесь чему то научить. Еще раз большой респект за крутое ревью.
const profilePopup = document.querySelector('.popup_profile');
export const formElementEdit = profilePopup.querySelector('.popup__forma');
const nameInput = profilePopup.querySelector('.popup__input_name_username');
const jobInput = profilePopup.querySelector('.popup__input_name_userjob');
const buttonClose = profilePopup.querySelector('.popup__close-button');
const cardsPopup = document.querySelector('.popup_cards');
export const formElementADD = cardsPopup.querySelector('.popup__forma');
const cardsnameInput = cardsPopup.querySelector('.popup__input_name_namecards');
const cardslinkInput = cardsPopup.querySelector('.popup__input_name_linkcards');
const buttonCloseCards = cardsPopup.querySelector('.popup__close-button');
const buttonOpen = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const imagePopup = document.querySelector('.popup_images');
const buttonCloseImage = imagePopup.querySelector('.popup__close-button');
const popupimagetitle = imagePopup.querySelector('.popup__image-title');
const popupimage = imagePopup.querySelector('.popup__image');
const popups = document.querySelectorAll('.popup')

import {closePopup, openPopup, initialCards} from './utils.js';
import {Card} from './Card.js';
import {FormValidator, formValidators} from './FormValidator.js';
function createCard(item) {
  const card = new Card(item, '#cards-template', handleCardClick);
  const cards = card.generateCard();
  return cards;
};
function renderElements(items){
  items.forEach((item) => {
    const cardsElement = createCard(item)
    document.querySelector('.cards__container').append(cardsElement);
  });
};  
renderElements(initialCards);

buttonOpen.addEventListener('click', function() {
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  formValidators['profile'].resetValidation()
  openPopup(profilePopup);
});
buttonAdd.addEventListener('click', function() {
  formElementADD.reset()
  formValidators['cards'].resetValidation()
  openPopup(cardsPopup);
});
popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    };
  });
});

function handleCardClick (name, link) {
  popupimage.src = link;
  popupimage.alt = "фото " + name;
  popupimagetitle.textContent = name;
  openPopup(imagePopup);
};

function handlerSubmitFormAdd (evt) {
  evt.preventDefault();
    const dataValue = { 
      name: cardsnameInput.value,
      link: cardslinkInput.value
    };
  const cardsElement = createCard(dataValue);
  document.querySelector('.cards__container').prepend(cardsElement);
  closePopup(cardsPopup);
  formElementADD.reset();
};
formElementADD.addEventListener('submit', handlerSubmitFormAdd);
function handlerSubmitFormEdit (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(profilePopup);
};
formElementEdit.addEventListener('submit', handlerSubmitFormEdit);
