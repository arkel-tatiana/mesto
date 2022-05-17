import {Popup} from './Popup.js';
export class PopupWithImage extends Popup{
  constructor(popupSelector, name, link) {
    super(popupSelector);
    this._popupimagetitle = this._popupSelector.querySelector('.popup__image-title');
    this._popupimage = this._popupSelector.querySelector('.popup__image');
    this._name = name;
    this._link = link;
  }
  openPopup = () => {
    this._popupimage.src = this._link;
    this._popupimage.alt = "фото " + this._name;
    this._popupimagetitle.textContent = this._name;
    console.log(this._popupimage)
    console.log(this._popupimagetitle)
    console.log(this)
    super.openPopup();
  };  
}
