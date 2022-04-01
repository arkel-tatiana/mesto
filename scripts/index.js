const profilePopup = document.querySelector('.popup_profile');
const formElementEdit = profilePopup.querySelector('.popup__forma');
const nameInput = profilePopup.querySelector('.popup__input_name_username');
const jobInput = profilePopup.querySelector('.popup__input_name_userjob');
const buttonClose = profilePopup.querySelector('.popup__close-button');
const cardsPopup = document.querySelector('.popup_cards');
const formElementADD = cardsPopup.querySelector('.popup__forma');
const cardsnameInput = cardsPopup.querySelector('.popup__input_name_namecards');
const cardslinkInput = cardsPopup.querySelector('.popup__input_name_linkcards');
const buttonCloseCards = cardsPopup.querySelector('.popup__close-button');
const buttonOpen = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const title = document.querySelector('.profile__title');
const subtitle = document.querySelector('.profile__subtitle');
const imagePopup = document.querySelector('.popup_images');
const popupimagetitle = imagePopup.querySelector('.popup__image-title');
const popupimage = imagePopup.querySelector('.popup__image');
const buttonCloseImage = imagePopup.querySelector('.popup__close-button');
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
  addImage(card.name, card.link);
})

buttonOpen.addEventListener('click', function() {
  nameInput.value = title.textContent;
  jobInput.value = subtitle.textContent;
  openPopup(profilePopup);
});
buttonAdd.addEventListener('click', function() {
  openPopup(cardsPopup);
});
buttonClose.addEventListener('click', function() {
  closePopup(profilePopup);
});
buttonCloseCards.addEventListener('click', function() {
  closePopup(cardsPopup);
});
buttonCloseImage.addEventListener('click', function() {
  closePopup(imagePopup);
});

function openPopup(popup) {
  popup.classList.add('popup_opened');
}
function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function addImage(names, links){
  const cardsResult = createImage(names, links);
  cardsContainer.prepend(cardsResult);
}
function createImage (cardsInputvalue, linkInputvalue){
//  console.log(cardsInputvalue);
  const cardsElement = cardsTemplate.querySelector('.cards__item').cloneNode(true);
  cardsElement.querySelector('.cards__title').textContent = cardsInputvalue;
  cardsElement.querySelector('.cards__image').src = linkInputvalue;
  cardsElement.querySelector('.cards__image').addEventListener('click', function () {
    handleLikeimage (linkInputvalue, cardsInputvalue);
  })  
  cardsElement.querySelector('.cards__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('cards__like_active');
  });
  cardsElement.querySelector('.cards__delete').addEventListener('click', deleteCard);
  return cardsElement;
};
function deleteCard (evt) {
  let cardsItem = evt.target.closest('.cards__item');
  cardsItem.remove();
};
function handleLikeimage (linkImage, nameImage) {
  popupimage.setAttribute('src', linkImage);
  popupimage.setAttribute('alt', "фото " + nameImage);
  popupimagetitle.textContent = nameImage;
  openPopup(imagePopup);
};



function formSubmitHandlerADD (evt) {
  evt.preventDefault();
  addImage(cardsnameInput.value, cardslinkInput.value);
  closePopup(cardsPopup);
  formElementADD.reset();
};
formElementADD.addEventListener('submit', formSubmitHandlerADD);
function formSubmitHandlerEdit (evt) {
  evt.preventDefault();
  title.textContent = nameInput.value;
  subtitle.textContent = jobInput.value;
  closePopup(profilePopup)
};
formElementEdit.addEventListener('submit', formSubmitHandlerEdit);
