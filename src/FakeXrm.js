import Page from './Page'
import BooleanAttr from './attributes/BooleanAttr'
import OptionSetAttr from './attributes/OptionSetAttr'

export default class FakeXrm {
  constructor() {
    this.Page = new Page()
    this._generate = {
      booleanAttr: this._generateBooleanAttr.bind(this),
      optionSetAttr: this._generateOptionSetAttr.bind(this),
    }
  }

  _generateBooleanAttr(name, value) {
    const attr = new BooleanAttr(name, value)
    this.Page._attributes.push(attr)
    return attr
  }

  _generateOptionSetAttr(name, options) {
    const attr = new OptionSetAttr(name, options)
    this.Page._attributes.push(attr)
    return attr
  }
}
