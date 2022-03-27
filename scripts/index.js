let popupElement = document.querySelector('.popup');
let openButton = document.querySelector('.profile__edit-button');
let closeButton = popupElement.querySelector('.popup__close-button');
let addButton = document.querySelector('.profile__add-button');
let popupContainer = popupElement.querySelector('.popup__container');
let formElement = document.querySelector('.popup__forma');
let popuptitle = formElement.querySelector('.popup__title');
let nameInput = formElement.querySelector('.popup__input_name_username');
let jobInput = formElement.querySelector('.popup__input_name_userjob');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
let popupimage = popupElement.querySelector('.popup__image');
let popupimagetitle = popupElement.querySelector('.popup__image-title');
let image = document.querySelectorAll('.cards__image');
let cardsContainer = document.querySelector('.cards__container');
let starttitle = popuptitle.textContent
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
 
initialCards.forEach(function(card){
    addimage(card.name, card.link);
})

function openPopup() {
    popupElement.classList.add('popup_opened');
    nameInput.value = title.textContent;
    jobInput.setAttribute('type', 'text');
    jobInput.value = subtitle.textContent;
    popuptitle.textContent = starttitle;
};
function openPopupADD() {
    openPopup();
    nameInput.value = "Название";
    jobInput.value = "Ссылка на картинку";
    popuptitle.textContent = "Новое место";
    jobInput.setAttribute('type', 'url');
    nameInput.classList.add('popup__input_add');
    jobInput.classList.add('popup__input_add');
};
function openPopupimage() {
    openPopup();
    popupimage.classList.add('popup__image_opened');
    popupimagetitle.classList.add('popup__image-title_opened');
    formElement.classList.add('popup__forma_close');
    popupContainer.classList.add('popup__container_image');
    popupElement.classList.add('popup_image');
};
function closePopup() {
    popupElement.classList.remove('popup_opened');
    popupimage.classList.remove('popup__image_opened');
    popupimagetitle.classList.remove('popup__image-title_opened');
    formElement.classList.remove('popup__forma_close');
    popupContainer.classList.remove('popup__container_image');
    nameInput.classList.remove('popup__input_add');
    jobInput.classList.remove('popup__input_add');
    popupContainer.classList.remove('popup__container_image');
    popupElement.classList.add('popup_image');
};
openButton.addEventListener('click', openPopup);
closeButton.addEventListener('click', closePopup);
addButton.addEventListener('click', openPopupADD);

function addimage(nameInputvalue, jobInputvalue){
    const cardsTemplate = document.querySelector('#cards-template').content;
    const cardsElement = cardsTemplate.querySelector('.cards__item').cloneNode(true);
    cardsElement.querySelector('.cards__title').textContent = nameInputvalue;
    cardsElement.querySelector('.cards__image').src = jobInputvalue;
    cardsElement.querySelector('.cards__image').addEventListener('click', function (evt) {
      let imagesrc = evt.target.getAttribute('src');
      popupimage.setAttribute('src', imagesrc);
      let imagetitle = cardsElement.querySelector('.cards__title').textContent;
      popupimagetitle.textContent = imagetitle;
      openPopupimage();
    });
    cardsElement.querySelector('.cards__like').addEventListener('click', function (evt) {
       evt.target.classList.toggle('cards__like_active');
      });
    cardsElement.querySelector('.cards__delete').addEventListener('click', function (evt) {
        cardsElement.remove();
     });   
    cardsContainer.prepend(cardsElement);
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    if (popuptitle.textContent === "Новое место") {
       addimage(nameInput.value, jobInput.value);
    } else {
        title.textContent = nameInput.value;
        subtitle.textContent = jobInput.value;
    }
    closePopup()
}
formElement.addEventListener('submit', formSubmitHandler);



   


