export default class JSStarterKit {
  constructor(text) {
    this._message = text || 'hello, world.'
  }

  get message() {
    return `${this._message}!`
  }
}
