import {closePopup, openPopup, onDocumentKeyup, onPopupClick} from './utils.js';
const imagePopup = document.querySelector('.popup_images');
const buttonCloseImage = imagePopup.querySelector('.popup__close-button');
const popupimagetitle = imagePopup.querySelector('.popup__image-title');
const popupimage = imagePopup.querySelector('.popup__image');
export class Card {
    constructor(data, cardSelector) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
    }
    _getTemplate() {
      const cardElement = document
        .querySelector(this._cardSelector)
        .content
        .querySelector('.cards__item')
        .cloneNode(true);
        return cardElement;
    }
    generateCard() {
      this._element = this._getTemplate();
      this._setEventListeners();
      this._element.querySelector('.cards__image').src = this._link;
      this._element.querySelector('.cards__image').alt = "фото " + this._name;
      this._element.querySelector('.cards__title').textContent = this._name;
      return this._element;
    }
    _setEventListeners(){
      this._element.querySelector('.cards__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('cards__like_active');
      });
     // this._element.querySelector('.cards__delete').addEventListener('click', (evt) => {
     //   this._handleDeleteClick(evt);
     // });
      this._element.querySelector('.cards__delete').addEventListener('click', () => {
        this._handleDeleteClick();
      });
      this._element.querySelector('.cards__image').addEventListener('click', () => {
        this._handleImageClick();
      });
      buttonCloseImage.addEventListener('click', function() {
        closePopup(imagePopup);
      }); 
    };
    _handleDeleteClick() {
      //    let cardsItem = evt.target.closest('.cards__item');
      let cardsItem = this._element.querySelector('.cards__delete').closest('.cards__item');
      cardsItem.remove();
    };
    _handleImageClick() {
     // this._element.querySelector('.cards__delete')
      popupimage.src = this._link;
      popupimage.alt = "фото " + this._name;
      popupimagetitle.textContent = this._name;
      openPopup(imagePopup);
    };
  };