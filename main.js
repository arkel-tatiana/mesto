(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.data,r=e.cardSelector,o=e.userId,i=e.handleCardClick,c=e.handleDeleteClick,a=e.handleLikeClick;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._name=n.name,this._link=n.link,this._id=n._id,this._likes=n.likes,this._owner=n.owner,this._userId=o,this._cardSelector=r,this._handleCardClick=i,this._handleDeleteClick=c.bind(this),this._handleLikeClick=a.bind(this)}var n,r;return n=t,(r=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardSelector).content.querySelector(".cards__item").cloneNode(!0)}},{key:"generateCard",value:function(){return this._element=this._getTemplate(),this._cardImage=this._element.querySelector(".cards__image"),this._likesCards=this._element.querySelector(".cards__likecount"),console.log(this._likes),this._setEventListeners(),this._handleLikes(),this._handleDeleteButton(),this._cardImage.src=this._link,this._cardImage.alt="фото "+this._name,this._element.querySelector(".cards__title").textContent=this._name,this._likesCards.textContent=this._likes.length,this._element}},{key:"_handleDeleteButton",value:function(){this._owner._id!==this._userId&&(console.log(this._owner._id+":"+this._userId),this._element.querySelector(".cards__delete").classList.add("cards__delete_hidden"))}},{key:"_handleLikes",value:function(){var e=this;this._likes.forEach((function(t){(t._id=e._userId)&&e._element.querySelector(".cards__likelogo").classList.add("cards__logolike_active")}))}},{key:"_setEventListeners",value:function(){var e=this;this._element.querySelector(".cards__like").addEventListener("click",(function(){e._handleLikeClick(e._element,e._id)})),this._element.querySelector(".cards__delete").addEventListener("click",(function(){e._handleDeleteClick(e._element,e._id)})),this._cardImage.addEventListener("click",(function(){e._handleCardClick(e._name,e._link)}))}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var r=function(){function e(t,n){var r=t.data,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderedItems=r,this._renderer=o,this._container=document.querySelector(n)}var t,r;return t=e,(r=[{key:"addItem",value:function(e,t){"start"===t?this._container.prepend(e):"end"===t&&this._container.append(e)}},{key:"renderItems",value:function(){var e=this;console.log(this._renderedItems),this._renderedItems.forEach((function(t){e._renderer(t)}))}}])&&n(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=function(){function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_showInputError",(function(e,t){var n=r._formaSelector.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputErrorClass),n.classList.add(r._errorClass),n.textContent=t})),i(this,"_hideInputError",(function(e){var t=r._formaSelector.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputErrorClass),t.classList.remove(r._errorClass),t.textContent=""})),i(this,"_hasInvalidInput",(function(){return r._inputList.some((function(e){return!e.validity.valid}))})),i(this,"_toggleButtonState",(function(){r._hasInvalidInput(r._inputList)?r._disableButton(r._buttonElement):r._enableButton(r._buttonElement)})),i(this,"_enableButton",(function(){r._buttonElement.classList.add(r._activeButtonClass),r._buttonElement.disabled=!1})),i(this,"_disableButton",(function(){r._buttonElement.disabled=!0,r._buttonElement.classList.remove(r._activeButtonClass)})),i(this,"enableValidation",(function(){r._setEventListenersInput()})),i(this,"_setEventListenersInput",(function(){r._inputList.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),i(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),this._formSelector=t.formSelector,this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._activeButtonClass=t.activeButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._formaSelector=n,this._inputList=Array.from(this._formaSelector.querySelectorAll(this._inputSelector)),this._buttonElement=this._formaSelector.querySelector(this._submitButtonSelector)}var t,n;return t=e,(n=[{key:"resetValidation",value:function(){var e=this;this._toggleButtonState(),this._inputList.forEach((function(t){e._hideInputError(t)}))}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t){var n=t.nameSelector,r=t.jobSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameSelector=document.querySelector(n),this._jobSelector=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){var e={};return e.username=this._nameSelector.textContent,e.userjob=this._jobSelector.textContent,e}},{key:"setUserInfo",value:function(e){this._nameSelector.textContent=e.username,this._jobSelector.textContent=e.userjob}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupSelector=t,this._handleEscKey=this._handleEscKey.bind(this),this._handleClickPopup=this._handleClickPopup.bind(this)}var t,n;return t=e,(n=[{key:"openPopup",value:function(){this._popupSelector.classList.add("popup_opened"),document.addEventListener("keyup",this._handleEscKey)}},{key:"closePopup",value:function(){this._popupSelector.classList.remove("popup_opened"),document.removeEventListener("keyup",this._handleEscKey)}},{key:"_handleEscKey",value:function(e){"Escape"===e.key&&this.closePopup()}},{key:"setEventListeners",value:function(){this._popupSelector.addEventListener("mousedown",this._handleClickPopup)}},{key:"_handleClickPopup",value:function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close-button"))&&this.closePopup()}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(){return d="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=h(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},d.apply(this,arguments)}function h(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}function _(e,t){return _=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},_(e,t)}function y(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},m(e)}var b=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&_(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=m(r);if(o){var n=m(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return y(this,e)});function c(e){var t,n=e.popupSelector,r=e.handlerSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,n))._handlerSubmitForm=r,t._formElement=t._popupSelector.querySelector(".popup__forma"),t}return t=c,(n=[{key:"setEventListeners",value:function(){var e=this;d(m(c.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handlerSubmitForm(e._getInputValues())}))}},{key:"_getInputValues",value:function(){var e=this;return this._inputList=this._formElement.querySelectorAll(".popup__input"),this._formValues={},this._inputList.forEach((function(t){return e._formValues[t.name]=t.value})),this._formValues}},{key:"closePopup",value:function(){this._formElement.reset(),d(m(c.prototype),"closePopup",this).call(this)}}])&&f(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(s);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function S(e,t){return S=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},S(e,t)}function k(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return g(e)}function g(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=w(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},E.apply(this,arguments)}function w(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=P(e)););return e}function P(e){return P=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},P(e)}var j=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=P(n);if(r){var o=P(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return k(this,e)});function i(e){var t,n,r,c,a;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),a=function(e,r){n._popupimage.src=r,n._popupimage.alt="фото "+e,n._popupimagetitle.textContent=e,E((t=g(n),P(i.prototype)),"openPopup",t).call(t)},(c="openPopup")in(r=g(n=o.call(this,e)))?Object.defineProperty(r,c,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[c]=a,n._popupimagetitle=n._popupSelector.querySelector(".popup__image-title"),n._popupimage=n._popupSelector.querySelector(".popup__image"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(s);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function L(e,t){return L=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},L(e,t)}function q(e,t){if(t&&("object"===C(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return I(e)}function I(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function R(){return R="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=B(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},R.apply(this,arguments)}function B(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var U=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&L(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function c(e){var t,n,r,o,a,u=e.popupSelector,l=e.handlerSubmitForm;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),a=function(e,r){n._idElement=r,n._deleteElement=e,R((t=I(n),T(c.prototype)),"openPopup",t).call(t)},(o="openPopup")in(r=I(n=i.call(this,u)))?Object.defineProperty(r,o,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[o]=a,n._handlerSubmitForm=l,n._formElement=n._popupSelector.querySelector(".popup__forma"),n}return t=c,(n=[{key:"setEventListeners",value:function(){var e=this;R(T(c.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handlerSubmitForm(e._deleteElement,e._idElement)}))}},{key:"closePopup",value:function(){this._formElement.reset(),R(T(c.prototype),"closePopup",this).call(this)}}])&&O(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(s);function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var x,V=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._baseUrl=t.baseUrl,this._headers=t.headers}var t,n;return t=e,(n=[{key:"getInitialCards",value:function(){return fetch(this._baseUrl+"/cards",{headers:this._headers})}},{key:"addCardElement",value:function(e){return fetch(this._baseUrl+"/cards/",{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})})}},{key:"deleteCardElement",value:function(e){return fetch(this._baseUrl+"/cards/"+e,{method:"DELETE",headers:this._headers})}},{key:"getUserData",value:function(){return fetch(this._baseUrl+"/users/me",{headers:this._headers})}},{key:"editUserData",value:function(e){return fetch(this._baseUrl+"/users/me",{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.username,about:e.userjob})})}},{key:"editUserAvatar",value:function(e){return fetch(this._baseUrl+"/users/me/avatar",{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.link})})}},{key:"likeCardElement",value:function(e){return fetch(this._baseUrl+"/cards/likes/"+e,{method:"PUT",headers:this._headers})}},{key:"deleteLikeCardElement",value:function(e){return fetch(this._baseUrl+"/cards/likes/"+e,{method:"DELETE",headers:this._headers})}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),A=document.querySelector(".popup_profile"),F=document.querySelector(".popup_cards"),K=document.querySelector(".popup_delete"),N=document.querySelector(".popup_avatar"),J=document.querySelector(".profile__edit-button"),H=document.querySelector(".profile__add-button"),z=document.querySelector(".profile__avatar-button"),M=document.querySelector(".popup_images"),G=A.querySelector(".popup__input_name_username"),Q=A.querySelector(".popup__input_name_userjob"),W="",X=new V({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-42",headers:{authorization:"cb8c837c-2a8a-4df5-98d7-679ca756a7f3","Content-Type":"application/json"}}),Y={};x={formSelector:".popup__forma",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",activeButtonClass:"popup__submit-button_active",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(x.formSelector)).forEach((function(e){var t=new c(x,e),n=e.getAttribute("name");Y[n]=t,t.enableValidation()}));var Z=new u({nameSelector:".profile__title",jobSelector:".profile__subtitle"}),$=new b({popupSelector:A,handlerSubmitForm:function(e){re(!0,A,"Сохранить"),X.editUserData(e).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(e){Z.setUserInfo({username:e.name,userjob:e.about})})).catch((function(e){console.log("ошибка ".concat(e))})).finally((function(){re(!1,A,"Сохранить")})),$.closePopup()}}),ee=new b({popupSelector:N,handlerSubmitForm:function(e){re(!0,N,"Сохранить");var t={link:e.linkavatar};X.editUserAvatar(t).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(){document.querySelector(".profile__avatar").src=t.link})).catch((function(e){console.log("ошибка ".concat(e))})).finally((function(){re(!1,N,"Сохранить")})),ee.closePopup()}}),te=new U({popupSelector:K,handlerSubmitForm:function(e,t){X.deleteCardElement(t).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(){e.remove()})).catch((function(e){console.log("ошибка ".concat(e))})),te.closePopup()}});$.setEventListeners(),ee.setEventListeners(),te.setEventListeners(),z.addEventListener("click",(function(){ee.openPopup()})),J.addEventListener("click",(function(){var e=Z.getUserInfo();G.value=e.username,Q.value=e.userjob,Y.profile.resetValidation(),$.openPopup()}));var ne=new j(M);function re(e,t,n){t.querySelector(".popup__submit-button").textContent=e?"Сохранение...":n}function oe(e){return new t({data:e,cardSelector:"#cards-template",userId:W,handleCardClick:function(e,t){ne.openPopup(e,t)},handleDeleteClick:function(e,t){te.openPopup(e,t)},handleLikeClick:function(e,t){e.querySelector(".cards__logolike_active")?X.deleteLikeCardElement(t).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(t){e.querySelector(".cards__likelogo").classList.remove("cards__logolike_active"),e.querySelector(".cards__likecount").textContent=t.likes.length})).catch((function(e){console.log("ошибка ".concat(e))})):X.likeCardElement(t).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(t){e.querySelector(".cards__likelogo").classList.add("cards__logolike_active"),e.querySelector(".cards__likecount").textContent=t.likes.length})).catch((function(e){console.log("ошибка ".concat(e))}))}}).generateCard()}ne.setEventListeners(),X.getUserData().then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(e){var t;dataServer={username:e.name,userjob:e.about},Z.setUserInfo(dataServer),t=e._id,W=t,document.querySelector(".profile__avatar").src=e.avatar})).catch((function(e){console.log("ошибка ".concat(e))})),X.getInitialCards().then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(e){console.log(e);var t=new r({data:e,renderer:function(e){t.addItem(oe(e),"end")}},".cards__container");t.renderItems();var n=new b({popupSelector:F,handlerSubmitForm:function(e){re(!0,F,"Создать");var r={name:e.namecards,link:e.linkcards};X.addCardElement(r).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).then((function(e){t.addItem(oe(e),"start")})).catch((function(e){console.log("ошибка ".concat(e))})).finally((function(){re(!1,F,"Создать")})),n.closePopup()}});n.setEventListeners(),H.addEventListener("click",(function(){Y.cards.resetValidation(),n.openPopup()}))})).catch((function(e){console.log("ошибка ".concat(e))}))})();