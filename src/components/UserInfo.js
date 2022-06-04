export class UserInfo{
  constructor({nameSelector, jobSelector, avatarSelector}) {
    this._nameSelector = document.querySelector(nameSelector);
    this._jobSelector = document.querySelector(jobSelector);
    this._avatarSelector = document.querySelector(avatarSelector);
  };
  getUserInfo(){
    const dataTitle = {};
    dataTitle.username = this._nameSelector.textContent;
    dataTitle.userjob = this._jobSelector.textContent;
    return dataTitle;
  };
  setUserInfo(formData){
    this._nameSelector.textContent = formData.username;
    this._jobSelector.textContent = formData.userjob;
  };
  setUserAvatar(formData){
    this._avatarSelector.src = formData;
  };
}