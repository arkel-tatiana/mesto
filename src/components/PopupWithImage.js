import {Popup} from './Popup.js';
export class PopupWithImage extends Popup{
  constructor(popupSelector) {
    super(popupSelector);
    this._popupimagetitle = this._popupSelector.querySelector('.popup__image-title');
    this._popupimage = this._popupSelector.querySelector('.popup__image');
  }
  openPopup = (name, link) => {
    this._popupimage.src = link;
    this._popupimage.alt = "фото " + name;
    this._popupimagetitle.textContent = name;
    super.openPopup();
  };  
}

