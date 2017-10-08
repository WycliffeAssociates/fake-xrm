import UsefulHelper, { uselessHelper } from './helpers/helpers'

export default class JSStarterKit {
  constructor(text) {
    this._message = text || 'hello, world.'
    this._usefulHelper = new UsefulHelper()
    this._uselessHelper = uselessHelper()
  }

  get message() {
    return `${this._message}!`
  }
}
