export class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._handleEscKey = this._handleEscKey.bind(this);
    this._handleClickPopup = this._handleClickPopup.bind(this);
  }
  openPopup(){
    this._popupSelector.classList.add('popup_opened');
    document.addEventListener('keyup', this._handleEscKey);
  };
  closePopup(){
    this._popupSelector.classList.remove('popup_opened');
    document.removeEventListener('keyup', this._handleEscKey);
  };
  _handleEscKey(event){
    if (event.key === "Escape"){
      this.closePopup();
    };
  };
  setEventListeners(){
    this._popupSelector.addEventListener('mousedown', this._handleClickPopup);
  };  
  _handleClickPopup(evt) {
      if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
        this.closePopup();
      };
  };
};
