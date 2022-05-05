const settings = {
  formSelector: '.popup__forma',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  activeButtonClass: 'popup__submit-button_active',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__input-error_active'
};

export class FormValidator{
  constructor(dataValidate, formaSelector) {
    this._formSelector = dataValidate.formSelector,
    this._inputSelector = dataValidate.inputSelector,
    this._submitButtonSelector = dataValidate.submitButtonSelector,
    this._activeButtonClass = dataValidate.activeButtonClass;
    this._inputErrorClass = dataValidate.inputErrorClass;
    this._errorClass = dataValidate.errorClass;
    this._formaSelector = formaSelector;
    this._inputList = Array.from(this._formaSelector.querySelectorAll(this._inputSelector));
    this._buttonElement = this._formaSelector.querySelector(this._submitButtonSelector);
  };
  _showInputError = (inputElement, errorMessage) => {
    const errorElement = this._formaSelector.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  };
  _hideInputError = (inputElement) => {
    const errorElement = this._formaSelector.querySelector(`.${inputElement.id}-error`);
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = '';
  };
  
  _hasInvalidInput = () => {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  };
  _toggleButtonState = () => {
    if (this._hasInvalidInput(this._inputList)) {
      this._disableButton(this._buttonElement);
    } else {
      this._enableButton(this._buttonElement);
    };
  };
  _enableButton = () => {
    this._buttonElement.classList.add(this._activeButtonClass);
    this._buttonElement.disabled = false;
  };
  _disableButton = () => {
    this._buttonElement.disabled = true;
    this._buttonElement.classList.remove(this._activeButtonClass);
  }; 
  enableValidation = () => {
    this._setEventListenersInput();
  };

  _setEventListenersInput = () => { 
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInputValidity(inputElement);
        this._toggleButtonState();
      });
    });
  };
  _checkInputValidity = (inputElement) => {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      };
  };
  resetValidation() {
    this._toggleButtonState(); 
    this._inputList.forEach((inputElement) => {
      this._hideInputError(inputElement) 
    });
  };  
};

export const formValidators = {}
const startValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector))
  formList.forEach((formElement) => {
    const validator = new FormValidator(config, formElement)
    const formName = formElement.getAttribute('name')
    formValidators[formName] = validator;
    validator.enableValidation();
  });
};
startValidation (settings);
