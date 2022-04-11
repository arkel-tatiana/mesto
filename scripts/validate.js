//const settings = {
//    formSelector: '.popup__forma',
//    inputSelector: '.popup__input',
 //   submitButtonSelector: '.popup__submit-button',
 //   activeButtonClass: 'popup__submit-button_active'};
function enablesettings(settings) { 
    const formList = Array.from(document.querySelectorAll(settings.formSelector));
    formList.forEach((formElement) => {
      setEventListeners(formElement, settings);  
    });
};  

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.setAttribute('style', `border-bottom: 1px solid #FF0000`);
  errorElement.setAttribute('style', `display: block`);
  errorElement.textContent = errorMessage;
};
  
const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.removeAttribute('style', `border-bottom: 1px solid #FF0000`);
  errorElement.removeAttribute('style', `display: block`);
  errorElement.textContent = '';
};
  
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  };
};
  
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}; 
  
const setButtonStatys = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement, settings);
  } else {
    enableButton(buttonElement, settings);
  };
}; 
const enableButton = (buttonElement,settings ) => {
  buttonElement.classList.add(settings.activeButtonClass);
  buttonElement.disabled = false;
}; 
const disableButton = (buttonElement, settings) => {
  buttonElement.disabled = true;
  buttonElement.classList.remove(settings.activeButtonClass);
}; 

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputSelector));
//  console.log(inputList);
  const buttonElement = formElement.querySelector(settings.submitButtonSelector);
  setEventListenersInput(formElement, inputList, buttonElement, settings);
};
const setEventListenersInput = (formElement, inputList, buttonElement, settings) => { 
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      setButtonStatys(inputList, buttonElement, settings);
    });
  });
};
enablesettings({
    formSelector: '.popup__forma',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    activeButtonClass: 'popup__submit-button_active'});