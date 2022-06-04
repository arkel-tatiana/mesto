import {Popup} from './Popup.js';
export class PopupSubmitDelete extends Popup{
  constructor({popupSelector, handlerSubmitForm}) {
    super(popupSelector);
    this._handlerSubmitForm = handlerSubmitForm;
    this._formElement = this._popupSelector.querySelector('.popup__forma');
  };
  openPopup = (cardThis) => {
    this._cardThis = cardThis;
    super.openPopup();
  };  
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handlerSubmitForm(this._cardThis);
    });
  }
  closePopup() {
    this._formElement.reset();
    super.closePopup();
  };
};
