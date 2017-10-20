export default class Control {
  constructor(config = {}) {
    this._name = config.name || ''
    this._label = config.label || ''
    this._disabled = config.disabled === true
    this._visible = config.visible !== false
    this._attribute = config.attribute
    this.getAttribute = this.getAttribute.bind(this)
  }

  getAttribute() {
    return this._attribute
  }

  getControlType() {
    throw Error('not implemented')
  }

  getParent() {
    throw Error('not implemented')
  }

  getValue() {
    throw Error('not implemented')
  }

  getName() {
    return this._name
  }

  getLabel() {
    return this._label
  }

  setLabel(text) {
    return this._label = text
  }

  getDisabled() {
    return this._disabled
  }

  setDisabled(isDisabled) {
    this._disabled = isDisabled
  }

  getVisible() {
    return this._visible
  }

  setVisible(isVisible) {
    this._visible = isVisible
  }
}
