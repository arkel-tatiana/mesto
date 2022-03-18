let popupElement = document.querySelector('.popup');
let openButton = document.querySelector('.profile__edit-button');
let closeButton = popupElement.querySelector('.popup__close-button');
let formElement = document.querySelector('.popup__container');
let nameInput = formElement.querySelector('.popup__input_name_username');
let jobInput = formElement.querySelector('.popup__input_name_userjob');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');

function openPopup() {
    popupElement.classList.add('popup_opened');
    nameInput.value = title.textContent;
    jobInput.value = subtitle.textContent;
};

function closePopup() {
    popupElement.classList.remove('popup_opened');
};
openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);

let name1; 
let info1;
function formSubmitHandler (evt) {
    evt.preventDefault();

//    let nameInput = formElement.querySelector('.popup__input_name_username');
//	let jobInput = formElement.querySelector('.popup__input_name_userjob');
    name1 = nameInput.value;
    info1 = jobInput.value;
//    console.log(name1 + info1)
//    let title = document.querySelector('.profile__title');
//    let subtitle = document.querySelector('.profile__subtitle');
//    console.log(title)
    title.textContent = name1;
    subtitle.textContent = info1;
    
    
}
formElement.addEventListener('submit', formSubmitHandler);
