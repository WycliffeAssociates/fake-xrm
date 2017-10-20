import Control from './Control'

export default class OptionSetControl extends Control{
  constructor(config = {}) {
    super(config)
  }

  addOption(option, index) {
    if (index >= 0) {
      this._attribute._options[index] = option
    } else {
      this._attribute._options.push(option)
    }
  }

  clearOptions() {
    this._attribute._options = []
  }

  removeOption(value) {
    this._attribute._options = this._attribute._options.filter(o => o.value !== value)
  }
}
