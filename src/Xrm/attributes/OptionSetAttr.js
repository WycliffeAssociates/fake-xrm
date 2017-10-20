import Attribute from './Attribute'

export default class OptionSetAttr extends Attribute{
  constructor(config = {}) {
    super(config)
    this._options = config.options || []
    this._selectedIndex = null
    this.getOptions = this.getOptions.bind(this)
  }

  getOptions() {
    return this._options.slice()
  }

  getOption(value) {
    return this._options.find(o => o.value === value) || null
  }

  getValue() {
    return this._selectedIndex === null
      ? null
      : this._options[this._selectedIndex].value
  }

  _setSelectedIndex(number) {
    if (number < 0 || number >= this._options.length) {
      throw Error('number is outside of valid range')
    }
    this._selectedIndex = number
  }
}
