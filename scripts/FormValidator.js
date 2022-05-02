import {settings} from './utils.js';
//import {formElementEdit} from './index.js';
const formElementEdit = profilePopup.querySelector('.popup__forma');
const formElementADD = cardsPopup.querySelector('.popup__forma');
export class FormValidator{
  constructor(dataValidate) {
    this._formSelector = dataValidate.formSelector,
    this._inputSelector = dataValidate.inputSelector,
    this._submitButtonSelector = dataValidate.submitButtonSelector,
    this._activeButtonClass = dataValidate.activeButtonClass;
  };
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formaSelector.querySelector(`.${inputElement.id}-error`);
    inputElement.setAttribute('style', `border-bottom: 1px solid #FF0000`);
    errorElement.setAttribute('style', `display: block`);
    errorElement.textContent = errorMessage;
  };
  _hideInputError = (formElement, inputElement) => {
    const errorElement = this._formaSelector.querySelector(`.${inputElement.id}-error`);
    inputElement.removeAttribute('style', `border-bottom: 1px solid #FF0000`);
    errorElement.removeAttribute('style', `display: block`);
    errorElement.textContent = '';
  };
  //_checkInputValidity = (inputElement) => {
  //  console.log(inputElement)
  //  if (!inputElement.validity.valid) {
  //    this._showInputError(inputElement, inputElement.validationMessage);
  //  } else {
  //    this._hideInputError(inputElement);
  //  };
  //};

  
  _hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  _setButtonStatys = (inputList, buttonElement) => {
    if (this._hasInvalidInput(inputList)) {
      this._disableButton(buttonElement);
    } else {
      this._enableButton(buttonElement);
    };
  };
  _enableButton = (buttonElement) => {
    buttonElement.classList.add(this._activeButtonClass);
    buttonElement.disabled = false;
  };
  _disableButton = (buttonElement) => {
    buttonElement.disabled = true;
    buttonElement.classList.remove(this._activeButtonClass);
  }; 
  enableValidation = () => {
    const inputList = Array.from(this._formaSelector.querySelectorAll(this._inputSelector));
    console.log(inputList)
    const buttonElement = this._formaSelector.querySelector(this._submitButtonSelector);
    this._setEventListenersInput(inputList, buttonElement);
  };

  _setEventListenersInput = (inputList, buttonElement) => { 
    console.log(this);
    inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', function () {
        console.log(this);
        this._checkInputValidity(inputElement);
        this._setButtonStatys(inputList, buttonElement);
      });
    });
  };
  _checkInputValidity = (inputElement) => {
    //  console.log(inputElement)
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      };
    };
  _check (inputElement) {
    console.log(inputElement)
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    };
  };
    
};

class FormValidatorProfile extends FormValidator{
  constructor(dataValidate, formaSelector) {
    super(dataValidate);
    this._formaSelector = formaSelector;
  };
};  

class FormValidatorCards extends FormValidator{
  constructor(dataValidate, formaSelector) {
    super(dataValidate);
    this._formaSelector = formaSelector;
  //  super(dataValidate);
  };
};
function startValidation (item) {
  const formList = Array.from(document.querySelectorAll(item.formSelector));
  console.log(formList)
  formList.forEach((formElement) => {
    if (formElement.classList.contains('popup__forma_profile')) {
      const formValidatorProfile = new FormValidatorProfile(item, formElementEdit);
   //   console.log(form)
      formValidatorProfile.enableValidation();
    } else {
      const formValidatorCards = new FormValidatorCards(item, formElementADD);
  //    console.log(form)
      formValidatorCards.enableValidation();
    };
  });
}
startValidation (settings);
