export default class Page {
  constructor() {
    this._attributes = []
  }

  getAttribute(name) {
    if (!name) {
      return this._attributes.slice()
    }
    return this._attributes.find(a => a.name === name)
  }

}
