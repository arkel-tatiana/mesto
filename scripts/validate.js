const Validation = {
    formSelector: '.popup__forma',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__submit-button',
    activeButtonClass: 'popup__submit-button_active'};
function enableValidation() { 
    const formList = Array.from(document.querySelectorAll(Validation.formSelector));
 //   console.log(formList);
    formList.forEach((formElement) => {
      setEventListeners(formElement);  
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
  
const setButtonStatys = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    disableButton(buttonElement);
  } else {
    enableButton(buttonElement);
  };
}; 
const enableButton = (buttonElement) => {
  buttonElement.classList.add(Validation.activeButtonClass);
  buttonElement.disabled = false;
}; 
const disableButton = (buttonElement) => {
  buttonElement.disabled = true;
  buttonElement.classList.remove(Validation.activeButtonClass);
}; 

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(Validation.inputSelector));
//  console.log(inputList);
  const buttonElement = formElement.querySelector(Validation.submitButtonSelector);
  setEventListenersInput(formElement, inputList, buttonElement);
};
const setEventListenersInput = (formElement, inputList, buttonElement) => { 
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      setButtonStatys(inputList, buttonElement);
    });
  });
};
enableValidation(Validation);