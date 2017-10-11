export default class Context {
  constructor(config) {
    this._baseUrl = (config && config.baseUrl) || ''
  }

  getClientUrl() {
    return this._baseUrl
  }
}
