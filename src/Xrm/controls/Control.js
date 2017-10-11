export default class Control {
  constructor(config) {
    this._name = (config && config.name) || ''
    this._label = (config && config.label) || ''
    this._disabled = (config && config.disabled) === true
    this._visible = (config && config.visible) !== false
    this.getName = this.getName.bind(this)
    this.getLabel = this.getLabel.bind(this)
    this.getDisabled = this.getDisabled.bind(this)
    this.setDisabled = this.setDisabled.bind(this)
    this.getVisible = this.getVisible.bind(this)
    this.setVisible = this.setVisible.bind(this)
  }

  getName() {
    return this._name
  }

  getLabel() {
    return this._label
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
