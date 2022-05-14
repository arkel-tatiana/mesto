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
const imagePopup = document.querySelector('.popup_images');
const popupimagetitle = imagePopup.querySelector('.popup__image-title');
const popupimage = imagePopup.querySelector('.popup__image');
const popups = document.querySelectorAll('.popup');

import {initialCards, settings} from './utils.js';
import {Card} from './Card.js';
import {Section} from './Section.js';
import {FormValidator} from './FormValidator.js';
import {UserInfo} from './UserInfo.js';
//import {Popup} from './Popup.js';
import {PopupWithForm} from './PopupWithForm.js';
import {PopupWithImage} from './PopupWithImage.js';

function appendSection(dataCard, place){
  const section = new Section({
  data: dataCard,
  renderer: (item) => {
    const card = new Card(item, '#cards-template', handleCardClick);
    const cardElement = card.generateCard();
    section.addItem(cardElement, place);
  }
  }, '.cards__container');
  console.log(section)
  section.renderItems();
};  
appendSection(initialCards, 'end');

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

const userInfo = new UserInfo ('.profile__title', '.profile__subtitle');
const popupWithFormEdit = new PopupWithForm({
  popupSelector: profilePopup,
  handlerSubmitForm: (formData) => {
    const userInfo = new UserInfo ('.profile__title', '.profile__subtitle');
    userInfo.setUserInfo(formData);
  }
});
const popupWithFormAdd = new PopupWithForm({
  popupSelector: cardsPopup,
  handlerSubmitForm: (formData) => {
    const dataValue = [{ 
      name: formData.namecards,
      link: formData.linkcards
    }];
    console.log(dataValue);
    appendSection(dataValue, 'start')
  }
});

buttonOpen.addEventListener('click', function() {
  userInfo.getUserInfo();
  formValidators['profile'].resetValidation()
  popupWithFormEdit.openPopup();
  popupWithFormEdit.setEventListeners();
});
buttonAdd.addEventListener('click', function() {
  formValidators['cards'].resetValidation()
  popupWithFormAdd.openPopup();
  popupWithFormAdd.setEventListeners();
});

function handleCardClick (name, link) {
  const popupWithImage = new PopupWithImage (imagePopup, name, link);
  popupWithImage.openPopup();
};

