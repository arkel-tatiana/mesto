const profilePopup = document.querySelector('.popup_profile');
const formElementEdit = profilePopup.querySelector('.popup__forma');
let nameInput = profilePopup.querySelector('.popup__input_name_username');
let jobInput = profilePopup.querySelector('.popup__input_name_userjob');
const cardsPopup = document.querySelector('.popup_cards');
const formElementADD = cardsPopup.querySelector('.popup__forma');
let cardsnameInput = cardsPopup.querySelector('.popup__input_name_namecards');
let cardslinkInput = cardsPopup.querySelector('.popup__input_name_linkcards');
const ButtonOpen = document.querySelector('.profile__edit-button');
const ButtonAdd = document.querySelector('.profile__add-button');
let title = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
const imagePopup = document.querySelector('.popup_images');
let popupimagetitle = imagePopup.querySelector('.popup__image-title');
let popupimage = imagePopup.querySelector('.popup__image');
let ButtonClose = profilePopup.querySelector('.popup__close-button');
let popupName;
const cardsContainer = document.querySelector('.cards__container');
const cardsTemplate = document.querySelector('#cards-template').content;
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
  AddImage(card.name, card.link);
})

ButtonOpen.addEventListener('click', function() {
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  popupName = profilePopup;
  openPopup(popupName);
  addButtonClose(popupName);
});
ButtonAdd.addEventListener('click', function() {
  popupName = cardsPopup;
  openPopup(popupName);
  addButtonClose(popupName);
});
function addButtonClose(popupName) {
  ButtonClose = popupName.querySelector('.popup__close-button');
  ButtonClose.addEventListener('click', function() {
    closePopup(popupName);
  });
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
//  console.log(ButtonClose)  
  ButtonClose.removeEventListener('click', function() {
    closePopup(popupName);
  });
}

function AddImage(names, links){
  const cardsElement = cardsTemplate.querySelector('.cards__item').cloneNode(true);
  let CardsResult = CreateImage(names, links);
  cardsContainer.prepend(CardsResult);
}
function CreateImage (cardsInputvalue, linkInputvalue){
//  console.log(cardsInputvalue);
  const cardsElement = cardsTemplate.querySelector('.cards__item').cloneNode(true);
  cardsElement.querySelector('.cards__title').textContent = cardsInputvalue;
  cardsElement.querySelector('.cards__image').src = linkInputvalue;
  cardsElement.querySelector('.cards__image').addEventListener('click', function (evt) {
    let imagesrc = evt.target.getAttribute('src');
    let imagetitle = cardsElement.querySelector('.cards__title').textContent;
    ImageCards(imagesrc,imagetitle );
  })  
  cardsElement.querySelector('.cards__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like_active');
  });
  cardsElement.querySelector('.cards__delete').addEventListener('click', DeleteCard);
  return cardsElement;
};
function DeleteCard (evt) {
  let cardsItem = evt.target.closest('.cards__item');
  cardsItem.remove();
};
function ImageCards (linkImage, nameImage) {
  popupimage.setAttribute('src', linkImage);
  popupimagetitle.textContent = nameImage.textContent;
  popupName = imagePopup;
  openPopup(popupName);
  addButtonClose(popupName);
};



function formSubmitHandlerADD (evt) {
  evt.preventDefault();
  AddImage(cardsnameInput.value, cardslinkInput.value);
  closePopup(popupName)
};
formElementADD.addEventListener('submit', formSubmitHandlerADD);
function formSubmitHandlerEdit (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(popupName)
};
formElementEdit.addEventListener('submit', formSubmitHandlerEdit);
