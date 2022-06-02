export class Card {
  constructor({data, cardSelector, userId, handleCardClick, handleDeleteClick, handleLikeClick}) {
    this._name = data.name;
    this._link = data.link;
    this._id = data._id;
    this._likes = data.likes;
    this._owner = data.owner
    this._userId = userId;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick.bind(this);
    this._handleLikeClick = handleLikeClick.bind(this);
  }
  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.cards__item')
      .cloneNode(true);
      return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.cards__image');
    this._likesCards = this._element.querySelector('.cards__likecount');
    console.log(this._likes)
    this._setEventListeners();
    this._handleLikes();
    this._handleDeleteButton();
    this._cardImage.src = this._link;
    this._cardImage.alt = "фото " + this._name;
    this._element.querySelector('.cards__title').textContent = this._name;
    this._likesCards.textContent = this._likes.length;
    return this._element;
  }
  _handleDeleteButton(){
    if (this._owner._id !==  this._userId){
      console.log(this._owner._id + ":" + this._userId)
      this._element.querySelector('.cards__delete').classList.add('cards__delete_hidden');
    };
  };
  _handleLikes(){
    this._likes.forEach((like) => {
      if (like._id =  this._userId){
        this._element.querySelector('.cards__likelogo').classList.add('cards__logolike_active');
      };
    });
  };
  _setEventListeners(){
    this._element.querySelector('.cards__like').addEventListener('click', () => {
      this._handleLikeClick(this._element, this._id); 
    });
    this._element.querySelector('.cards__delete').addEventListener('click', () => {
      this._handleDeleteClick(this._element, this._id)
    });
    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._link);
    });
  };
};
