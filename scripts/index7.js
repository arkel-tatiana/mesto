const profilePopup = document.querySelector('.popup_profile');
const formElementEdit = profilePopup.querySelector('.popup__forma');
const nameInput = profilePopup.querySelector('.popup__input_name_username');
const jobInput = profilePopup.querySelector('.popup__input_name_userjob');
const cardsPopup = document.querySelector('.popup_cards');
const formElementADD = cardsPopup.querySelector('.popup__forma');
const cardsnameInput = cardsPopup.querySelector('.popup__input_name_namecards');
const cardslinkInput = cardsPopup.querySelector('.popup__input_name_linkcards');
const buttonOpen = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const imagePopup = document.querySelector('.popup_images');
const popupimagetitle = imagePopup.querySelector('.popup__image-title');
const popupimage = imagePopup.querySelector('.popup__image');
const popups = document.querySelectorAll('.popup');
const cardsContainer = document.querySelector('.cards__container')

import {closePopup, openPopup, initialCards, settings} from './utils.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
function createCard(item) {
  const card = new Card(item, '#cards-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
};
function renderElements(items){
  items.forEach((item) => {
    cardsContainer.append(createCard(item));
  });
};  
renderElements(initialCards);

const formValidators = {}
const startValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
startValidation (settings);

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
  cardsContainer.prepend(cardsElement);
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
