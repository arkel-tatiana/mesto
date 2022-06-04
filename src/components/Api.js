export class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers
  }
  getInitialCards() {
    return fetch(this._baseUrl + '/cards', {
      headers: this._headers
    })
    .then(this._getResponseData)
  }
  addCardElement(dataValue) {
    return fetch(this._baseUrl + '/cards/', {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name: dataValue.name,
        link: dataValue.link
      })
    })
    .then(this._getResponseData)
  };  
  deleteCardElement(idCard) {
    return fetch(this._baseUrl + '/cards/' + idCard, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._getResponseData)
  };
  getUserData() {
    return fetch(this._baseUrl + '/users/me', {
    headers: this._headers
    })
    .then(this._getResponseData)
  };
  editUserData(formData) {
    return fetch(this._baseUrl + '/users/me', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name: formData.username,
        about: formData.userjob
      })
      })
      .then(this._getResponseData)
  }
  editUserAvatar(dataValue) {
    return fetch(this._baseUrl + '/users/me/avatar', {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar: dataValue.link
      })
      })
      .then(this._getResponseData)
  }
  likeCardElement(idCard) {
    return fetch(this._baseUrl + '/cards/likes/' + idCard, {
      method: 'PUT',
      headers: this._headers
      })
      .then(this._getResponseData)
  };
  deleteLikeCardElement(idCard) {
    return fetch(this._baseUrl + '/cards/likes/' + idCard, {
      method: 'DELETE',
      headers: this._headers
    })
    .then(this._getResponseData)
  };
  _getResponseData(res) {
    if (!res.ok) {
        return Promise.reject(`Ошибка: ${res.status}`); 
    }
    return res.json();
  } 
};