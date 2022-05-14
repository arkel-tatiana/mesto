//const profilePopup = document.querySelector('.popup_profile');
//const formElementEdit = profilePopup.querySelector('.popup__forma');
//const nameInput = profilePopup.querySelector('.popup__input_name_username');
//const jobInput = profilePopup.querySelector('.popup__input_name_userjob');
const cardsPopup = document.querySelector('.popup_cards');
const formElementADD = cardsPopup.querySelector('.popup__forma');
const cardsnameInput = cardsPopup.querySelector('.popup__input_name_namecards');
const cardslinkInput = cardsPopup.querySelector('.popup__input_name_linkcards');
const buttonOpen = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
//const title = document.querySelector('.profile__title');
//const subtitle = document.querySelector('.profile__subtitle');
const cardsContainer = document.querySelector('.cards__container')

import {closePopup, openPopup, initialCards, settings} from './utils.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {Popup, PopupWithImage, PopupWithForm} from './Popup.js';
import {UserInfo} from './UserInfo.js';

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
  const UserInfo = new UserInfo('.popup__input_name_username', '.popup__input_name_userjob')
  UserInfo.getUserInfo();
  //nameInput.value = title.textContent;
  //jobInput.value = subtitle.textContent;
  formValidators['profile'].resetValidation()
  const popupWithFormProfile = new PopupWithForm('profilePopup')
  popupWithFormProfile.openPopup;
});
buttonAdd.addEventListener('click', function() {
  formElementADD.reset()
  formValidators['cards'].resetValidation()
  const popupWithFormAdd = new PopupWithForm('cardsPopup')
  popupWithFormAdd.openPopup;
});


function handleCardClick (name, link) {
  const popupWithImage = new PopupWithImage('imagePopup', name, link)
  popupWithImage.openPopup;
};


