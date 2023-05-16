import { Component } from "./8_component.mjs";

export class Form extends Component {
  constructor(parent, options) {
    super("form", parent, options);
  }

  addChildren(...children) {
    children.forEach((child) => {
      this.getElement().appendChild(child.getElement());
    });
  }
}
