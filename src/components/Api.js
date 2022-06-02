export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers
  }
  getInitialCards() {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers
      });
  }
  addCardElement(dataValue) {
    return fetch(this._baseUrl + '/cards/', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: dataValue.name,
        link: dataValue.link
      })
    });
  };  
  deleteCardElement(idCard) {
    return fetch(this._baseUrl + '/cards/' + idCard, {
      method: 'DELETE',
      headers: this._headers
    });
  };
  getUserData() {
    return fetch(this._baseUrl + '/users/me', {
    headers: this._headers
    });
  };
  editUserData(formData) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: formData.username,
        about: formData.userjob
      })
      });
  }
  editUserAvatar(dataValue) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: dataValue.link
      })
      });
  }
  
  likeCardElement(idCard) {
    return fetch(this._baseUrl + '/cards/likes/' + idCard, {
      method: 'PUT',
      headers: this._headers
      });
  };
  deleteLikeCardElement(idCard) {
    return fetch(this._baseUrl + '/cards/likes/' + idCard, {
      method: 'DELETE',
      headers: this._headers
    });
  };
};