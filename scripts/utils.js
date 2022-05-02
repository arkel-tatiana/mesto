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
import {onDocumentKeyup, onPopupClick} from './index.js';
export function openPopup(popup) {
    popup.classList.add('popup_opened');
    document.addEventListener('keyup', onDocumentKeyup);
    popup.addEventListener('click', onPopupClick);
  };
export function closePopup(popup) {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keyup', onDocumentKeyup);
    popup.removeEventListener('click', onPopupClick);
  };
export const settings = {
  formSelector: '.popup__forma',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  activeButtonClass: 'popup__submit-button_active'};  
