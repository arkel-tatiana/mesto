import {Popup} from './Popup.js';
export class PopupWithForm extends Popup{
  constructor({popupSelector, handlerSubmitForm}) {
    super(popupSelector);
    this._handlerSubmitForm = handlerSubmitForm;
    this._formElement = this._popupSelector.querySelector('.popup__forma');
  };
 
  setEventListeners() {
    super.setEventListeners();
    this._formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
      console.log(this)
      this._handlerSubmitForm(this._getInputValues());
      this.closePopup();
    });
  }
  _getInputValues() {
    this._inputList = this._formElement.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  };
  closePopup() {
    this._formElement.reset();
    super.closePopup();
  };
};
