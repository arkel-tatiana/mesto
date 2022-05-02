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
const cardsContainer = document.querySelector('.cards__container');
export let popupName = imagePopup;
//const cardsTemplate = document.querySelector('#cards-template').content;
//const formSelector = document.querySelector('.popup__forma');
//const inputSelector = formSelector.querySelector('.popup__input');
//const inputErrorClass = formSelector.querySelector(`.${inputSelector.id}-error`);
//const submitButtonSelector = formSelector.querySelector('.popup__submit-button');
//console.log(formSelector)
import {closePopup, openPopup, onDocumentKeyup, onPopupClick, initialCards} from './utils.js';
import {Card} from './Card.js';
import {FormValidator} from './FormValidator.js';
import {settings} from './utils.js';
const renderElements = (items) => {
  console.log(items);
  items.forEach((item) => {
  const card = new Card(item, '#cards-template');
  const cardElement = card.generateCard();
  document.querySelector('.cards__container').prepend(cardElement);
  });
};
renderElements(initialCards);

buttonOpen.addEventListener('click', function() {
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  popupName = profilePopup;
  statusSubmitButton(popupName);
  resetErrors(popupName);
  resetInputs(popupName);
  openPopup(popupName);
});
buttonAdd.addEventListener('click', function() {
  popupName = cardsPopup;
  statusSubmitButton(popupName);
  resetErrors(popupName);
  resetInputs(popupName);
  openPopup(popupName);
});

function statusSubmitButton(popupName){
  popupName.querySelector('.popup__submit-button').disabled = true;
  popupName.querySelector('.popup__submit-button').classList.remove('popup__submit-button_active');
}

function resetErrors(popupName){
  const errorList = Array.from(popupName.querySelectorAll('.popup__input-error_active'));
  errorList.forEach((error) => {
    error.textContent = '';
    error.removeAttribute('style', `display: block`);
  });
};

function resetInputs(popupName){
  const inputsList = Array.from(popupName.querySelectorAll('.popup__input'));
  inputsList.forEach((inputs) => {
    inputs.removeAttribute('style', `border-bottom: 1px solid #FF0000`);
  });
}

buttonClose.addEventListener('click', function() {
  closePopup(profilePopup);
});
buttonCloseCards.addEventListener('click', function() {
  closePopup(cardsPopup);
});



function handlerSubmitFormAdd (evt) {
  evt.preventDefault();
    let dataValue = [{ 
      name: cardsnameInput.value,
      link: cardslinkInput.value
    }];
  renderElements(dataValue);
  closePopup(popupName);
  formElementADD.reset();
};
formElementADD.addEventListener('submit', handlerSubmitFormAdd);
function handlerSubmitFormEdit (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(popupName);
};
formElementEdit.addEventListener('submit', handlerSubmitFormEdit);


