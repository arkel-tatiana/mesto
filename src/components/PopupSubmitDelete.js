import {Popup} from './Popup.js';
export class PopupSubmitDelete extends Popup{
  constructor({popupSelector, handlerSubmitForm}) {
    super(popupSelector);
    this._handlerSubmitForm = handlerSubmitForm;
    this._formElement = this._popupSelector.querySelector('.popup__forma');
  };
  openPopup = (deleteElement, deleteIdElement) => {
    this._idElement = deleteIdElement;
    this._deleteElement = deleteElement
    super.openPopup();
  };  
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handlerSubmitForm(this._deleteElement, this._idElement);
    });
  }
  closePopup() {
    this._formElement.reset();
    super.closePopup();
  };
};
