const profilePopup = document.querySelector('.popup_profile');
const cardsPopup = document.querySelector('.popup_cards');
const buttonOpen = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const imagePopup = document.querySelector('.popup_images');
import "./index.css";
import {initialCards, settings} from '../utils/utils.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {FormValidator} from '../components/FormValidator.js';
import {UserInfo} from '../components/UserInfo.js';
//import {Popup} from './Popup.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';

function appendSection(dataCard, place){
  const section = new Section({
  data: dataCard,
  renderer: (item) => {
    const card = new Card(item, '#cards-template', handleCardClick);
    const cardElement = card.generateCard();
    section.addItem(cardElement, place);
  }
  }, '.cards__container');
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
popupWithFormEdit.setEventListeners();
const popupWithFormAdd = new PopupWithForm({
  popupSelector: cardsPopup,
  handlerSubmitForm: (formData) => {
    const dataValue = [{ 
      name: formData.namecards,
      link: formData.linkcards
    }];
    appendSection(dataValue, 'start')
  }
});
popupWithFormAdd.setEventListeners();
buttonOpen.addEventListener('click', function() {
  userInfo.getUserInfo();
  formValidators['profile'].resetValidation()
  popupWithFormEdit.openPopup();
  
});
buttonAdd.addEventListener('click', function() {
  formValidators['cards'].resetValidation()
  popupWithFormAdd.openPopup();
});

function handleCardClick (name, link) {
  const popupWithImage = new PopupWithImage (imagePopup, name, link);
  popupWithImage.openPopup();
  popupWithImage.setEventListeners();
};

