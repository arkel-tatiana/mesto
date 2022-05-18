const profilePopup = document.querySelector('.popup_profile');
const cardsPopup = document.querySelector('.popup_cards');
const buttonOpen = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const imagePopup = document.querySelector('.popup_images');
const nameInput = profilePopup.querySelector('.popup__input_name_username');
const jobInput = profilePopup.querySelector('.popup__input_name_userjob');
import "./index.css";
import {initialCards, settings} from '../utils/utils.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {FormValidator} from '../components/FormValidator.js';
import {UserInfo} from '../components/UserInfo.js';
//import {Popup} from './Popup.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';

function createCard(item) {
  const card = new Card(item, '#cards-template', handleCardClick);
  const cardElement = card.generateCard();
  return cardElement;
}
const section = new Section({
  data: initialCards,
  renderer: (item) => {
    section.addItem(createCard(item), 'end');
  }
  }, '.cards__container');
section.renderItems();

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

const userInfo = new UserInfo ({nameSelector:'.profile__title', jobSelector:'.profile__subtitle'});
const popupWithFormEdit = new PopupWithForm({
  popupSelector: profilePopup,
  handlerSubmitForm: (formData) => {
    userInfo.setUserInfo(formData);
    popupWithFormEdit.closePopup();
  }
});
popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm({
  popupSelector: cardsPopup,
  handlerSubmitForm: (formData) => {
    const dataValue = { 
      name: formData.namecards,
      link: formData.linkcards
    };
    popupWithFormAdd.closePopup()
    section.addItem(createCard(dataValue), 'start');
  }
});
popupWithFormAdd.setEventListeners();
//const dataInfo = {};
buttonOpen.addEventListener('click', function() {
  const dataInfo = userInfo.getUserInfo();
  console.log(555)
  nameInput.value = dataInfo.username;
  jobInput.value = dataInfo.userjob;
  formValidators['profile'].resetValidation();
  popupWithFormEdit.openPopup();
});
const popupWithImage = new PopupWithImage (imagePopup);

buttonAdd.addEventListener('click', function() {
  formValidators['cards'].resetValidation()
  popupWithFormAdd.openPopup();
});

function handleCardClick (name, link) {
  popupWithImage.openPopup(name, link);
  popupWithImage.setEventListeners();
};