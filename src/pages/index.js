const profilePopup = document.querySelector('.popup_profile');
const cardsPopup = document.querySelector('.popup_cards');
const deletePopup = document.querySelector('.popup_delete');
const avatarPopup = document.querySelector('.popup_avatar');
const buttonOpen = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const buttonAvatar = document.querySelector('.profile__avatar-button');
const imagePopup = document.querySelector('.popup_images');
const nameInput = profilePopup.querySelector('.popup__input_name_username');
const jobInput = profilePopup.querySelector('.popup__input_name_userjob');
let dataUserServer = "";

import "./index.css";
import {settings} from '../utils/utils.js';
import {Card} from '../components/Card.js';
import {Section} from '../components/Section.js';
import {FormValidator} from '../components/FormValidator.js';
import {UserInfo} from '../components/UserInfo.js';
import {PopupWithForm} from '../components/PopupWithForm.js';
import {PopupWithImage} from '../components/PopupWithImage.js';
import {PopupSubmitDelete} from '../components/PopupSubmitDelete.js';
import {Api} from '../components/Api.js';

const api = new Api({
  baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-42',
  headers: {
    authorization: 'cb8c837c-2a8a-4df5-98d7-679ca756a7f3',
    'Content-Type': 'application/json'
  }
});

const formValidators = {}
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
const userInfo = new UserInfo ({nameSelector:'.profile__title', jobSelector:'.profile__subtitle', avatarSelector:'.profile__avatar'});
const popupWithFormEdit = new PopupWithForm({
  popupSelector: profilePopup,
  handlerSubmitForm: (formData) => {
    renderLoading (true, profilePopup,"Сохранить");
    api.editUserData(formData)
    .then ((res) => {
      userInfo.setUserInfo({ 
        username: res.name,
        userjob: res.about
      });
    })
    .then (() => {
      popupWithFormEdit.closePopup();
    })
    .catch((err) => {
      console.log(`ошибка ${err}`); 
    })
    .finally(() => {
      renderLoading (false, profilePopup, "Сохранить");
    });
  }
});

const popupWithFormAvatar = new PopupWithForm({
popupSelector: avatarPopup,
  handlerSubmitForm: (formData) => {
    renderLoading (true, avatarPopup,"Сохранить");
    const dataValue = { 
      link: formData.linkavatar
    };
    api.editUserAvatar(dataValue)
    .then ((res) => {
      userInfo.setUserAvatar(res.avatar);
    })
    .then (() => {
      popupWithFormAvatar.closePopup();
    })
    .catch((err) => {
      console.log(`ошибка ${err}`); 
    })
    .finally(() => {
      renderLoading (false, avatarPopup, "Сохранить");
    });
  }
});
const popupWithFormAdd = new PopupWithForm({
  popupSelector: cardsPopup,
  handlerSubmitForm: (formData) => {
    renderLoading (true, cardsPopup, "Создать")
    let dataValue = { 
      name: formData.namecards,
      link: formData.linkcards
    };
  api.addCardElement(dataValue)
    .then ((res) => {
      section.addItem(createCard(res), 'start');
    })
    .then(() => {
      popupWithFormAdd.closePopup();
    })
    .catch((err) => {
      console.log(`ошибка ${err}`); 
    })
    .finally(() => {
      renderLoading (false, cardsPopup, "Создать");
    });
  }
});
const popupWithImage = new PopupWithImage (imagePopup);
const popupSubmitDelete = new PopupSubmitDelete({
  popupSelector: deletePopup,
  handlerSubmitForm: (cardThis) => {
    api.deleteCardElement(cardThis._id)
      .then (() => {
        cardThis.deleteCard()
      })
      .then (() => {
        popupSubmitDelete.closePopup();;
      })
      .catch((err) => {
        console.log(`ошибка ${err}`); 
      });
  }
});
popupWithFormAdd.setEventListeners();
popupWithFormEdit.setEventListeners();
popupWithFormAvatar.setEventListeners();
popupSubmitDelete.setEventListeners();
popupWithImage.setEventListeners();
buttonAvatar.addEventListener('click', function() {
  formValidators['avatar'].resetValidation();
  popupWithFormAvatar.openPopup();
});
buttonOpen.addEventListener('click', function() {
  const dataInfo = userInfo.getUserInfo();
  nameInput.value = dataInfo.username;
  jobInput.value = dataInfo.userjob;
  formValidators['profile'].resetValidation();
  popupWithFormEdit.openPopup();
});
buttonAdd.addEventListener('click', function() {
  formValidators['cards'].resetValidation()
  popupWithFormAdd.openPopup();
});
const section = new Section({
  renderer: (item) => {
    section.addItem(createCard(item), 'end');
  },
  containerSelector: '.cards__container'
  });

Promise.all([api.getUserData(), api.getInitialCards()]) 
 .then((value)=>{
    userInfo.setUserInfo({ 
     username: value[0].name,
     userjob: value[0].about
    });
    getIdUser(value[0]._id);
    userInfo.setUserAvatar(value[0].avatar);
    section.renderItems(value[1]);
 }) 
 .catch((err)=>{ 
  console.log(`ошибка ${err}`); ; 
}) 

function renderLoading (isLoading, popupName, textButton) {
  if (!isLoading) {
    popupName.querySelector('.popup__submit-button').textContent = textButton;
  } else {
    popupName.querySelector('.popup__submit-button').textContent = "Сохранение...";
  };
};
function getIdUser(idUser) {
  dataUserServer = idUser;
};
function createCard(item) {
  const card = new Card({
    data: item,
    cardSelector: '#cards-template',
    userId: dataUserServer,
    handleCardClick: (name, link) => {
      popupWithImage.openPopup(name, link);
    },
    handleDeleteClick: (cardThis) => {
      popupSubmitDelete.openPopup(cardThis);
    },
    handleLikeClick: (cardThis) => {
      if (cardThis._element.querySelector('.cards__logolike_active')) {
        api.deleteLikeCardElement(cardThis._id)
          .then ((res) => {
            cardThis.deleteLikes(res.likes.length)
          })
          .catch((err) => {
            console.log(`ошибка ${err}`); 
          });
       } else {
        api.likeCardElement(cardThis._id)
          .then ((res) => {
            cardThis.addLikes(res.likes.length)
          })
          .catch((err) => {
            console.log(`ошибка ${err}`); 
          });
      };
    }
  });
  const cardElement = card.generateCard();
  return cardElement;
};