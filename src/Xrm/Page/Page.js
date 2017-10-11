export default class Page {
  constructor(config) {
    this.context = (config && config.context) || {}
    this.data = (config && config.data) || {}
    this._attributes = (config && config.attributes) || []
    this._controls = (config && config.controls) || []
  }

  getAttribute(name) {
    if (!name) {
      return this._attributes.slice()
    }
    return this._attributes.find(a => a.name === name) || null
  }

  getControl(name) {
    if (!name) {
      return this._controls.slice()
    }
    return this._controls.find(c => c.name === name) || null
  }

}
