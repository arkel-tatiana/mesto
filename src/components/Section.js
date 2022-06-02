export class Section {
  constructor({ data, renderer }, containerSelector) {
    this._renderedItems = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  addItem (element, place) {
      if (place === 'start') {
           this._container.prepend(element);
      } else if (place === 'end') {
          this._container.append(element);
      }; 
  };
  renderItems() {
     console.log(this._renderedItems)
     this._renderedItems.forEach(item => {
     this._renderer(item);
    });
  };
};