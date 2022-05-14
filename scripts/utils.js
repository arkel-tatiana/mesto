//import {popupName} from './index.js';
export const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  export const settings = {
    formSelector: '.popup__forma',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    activeButtonClass: 'popup__submit-button_active',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__input-error_active'
  };

//export function openPopup(popup) {
//  popup.classList.add('popup_opened');
//  document.addEventListener('keyup', handleEscKey);
////  popup.addEventListener('click', handlePopupClick);
//};
//export function closePopup(popup) {
//  popup.classList.remove('popup_opened');
//  document.removeEventListener('keyup', handleEscKey);
////  popup.removeEventListener('click', handlePopupClick);
//};
//function handleEscKey(event){
//  document.querySelector('.popup_opened');
//  if (event.key === "Escape"){
//    closePopup(document.querySelector('.popup_opened'));
//  };
//};

 
