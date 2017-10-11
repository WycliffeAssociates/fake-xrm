export default class BooleanAttr {
  constructor(name, value) {
    this.name = name || ''
    this.value = value || false
  }

  getName() {
    return this.name;
  }

  getValue() {
    return this.value;
  }
}
