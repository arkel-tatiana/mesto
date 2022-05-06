export class Card {
    constructor(data, cardSelector, handleCardClick) {
      this._name = data.name;
      this._link = data.link;
      this._cardSelector = cardSelector;
      this._handleCardClick = handleCardClick;
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
      this._setEventListeners();
      this._cardImage.src = this._link;
      this._cardImage.alt = "фото " + this._name;;
      this._element.querySelector('.cards__title').textContent = this._name;
      return this._element;
    }
    _setEventListeners(){
      this._element.querySelector('.cards__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('cards__like_active');
      });
      this._element.querySelector('.cards__delete').addEventListener('click', () => {
        this._handleDeleteClick()
      });
      this._cardImage.addEventListener('click', () => {
        this._handleCardClick(this._name, this._link);
      });
    };
    _handleDeleteClick() {
      this._element.remove();
    };
};
