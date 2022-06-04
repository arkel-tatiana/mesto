export class Section {
  constructor({renderer, containerSelector} ) {
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
  renderItems(renderedItems) {
     renderedItems.forEach(item => {
     this._renderer(item);
    });
  }
}