import Page from './Page'
import BooleanAttr from './attributes/BooleanAttr'

export default class FakeXrm {
  constructor() {
    this.Page = new Page()
    this.generate = {
      booleanAttr: this.generateBooleanAttr.bind(this)
    }
  }

  generateBooleanAttr(name, value) {
    const attr = new BooleanAttr(name, value)
    this.Page._attributes.push(attr)
    return attr
  }
}
