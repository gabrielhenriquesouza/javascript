class Component {
  #element = null;

  constructor(tag) {
    this.tag = tag;
  }

  getElement() {
    return this.#element;
  }

  build() {
    this.#element = document.createElement(this.tag);
  }
}
