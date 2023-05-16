import { Component } from "./8_component";

export class Label extends Component {
  constructor(text, parent, options) {
    super("label", parent, Object.assign({}, options, { textContent: text }));
  }
}
