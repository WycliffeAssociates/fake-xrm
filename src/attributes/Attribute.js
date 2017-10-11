export default class Attribute {
  constructor(config) {
    this._value = (config && config.value) || null
    this._originalValue = this._value
    this._onChangeHandlers = (config && config.onChangeHandlers) || []
    this.getValue = this.getValue.bind(this)
    this.setValue = this.setValue.bind(this)
    this.getIsDirty = this.getIsDirty.bind(this)
  }

  getValue() {
    return this._value
  }

  setValue(value) {
    this._value = value
  }

  getIsDirty() {
    return this._value !== this._originalValue
  }

  addOnChange(handler) {
    this._onChangeHandlers.push(handler)
  }

  removeOnChange(handler) {
    this._onChangeHandlers = this._onChangeHandlers.filter(h => h !== handler)
  }
}
