export default class Attribute {
  constructor(config = {}) {
    this._value = config.value || null
    this._originalValue = this._value
    this._onChangeHandlers = config.onChangeHandlers || []
    this._name = config.name || ''
    this.controls = config.controls || []
    this.getValue = this.getValue.bind(this)
    this.setValue = this.setValue.bind(this)
    this.getIsDirty = this.getIsDirty.bind(this)
  }

  getName() {
    return this._name
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

  fireOnChange() {
    this._onChangeHandlers.forEach(h => h())
  }
}
