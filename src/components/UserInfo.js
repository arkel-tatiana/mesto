const profilePopup = document.querySelector('.popup_profile');
const nameInput = profilePopup.querySelector('.popup__input_name_username');
const jobInput = profilePopup.querySelector('.popup__input_name_userjob');
export class UserInfo{
  constructor(nameSelector, jobSelector) {
    this._nameSelector = nameSelector;
    this._jobSelector = jobSelector;
  };
  getUserInfo(){
    nameInput.value = document.querySelector(this._nameSelector).textContent;
    jobInput.value = document.querySelector(this._jobSelector).textContent;
  };
  setUserInfo(formData){
    document.querySelector(this._nameSelector).textContent = formData.username;
    document.querySelector(this._jobSelector).textContent = formData.userjob;
  };
}
