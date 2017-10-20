export default class Collection {
  constructor(config = {}) {
    this._list = config.list || []
    this.get = this.get.bind(this)
    // this.getAll = this.getAll.bind(this)
    this.getLength = this.getLength.bind(this)
    // this.add = this.add.bind(this)
    // this.remove = this.remove.bind(this)
    this.forEach = this.forEach.bind(this)
  }

  get(param) {
    if (param === undefined) {
      return this._list.slice()
    }

    switch(typeof param) {
      case 'number':
        return this._list[param]
      case 'string':
        return this._list.find(a => a._name === param) || null
      case 'function':
        return this._list.filter(param)
      default:
        throw Error('Collection.get() can only take undefined, number, string, or function')
    }
  }

  // getAll() {
  //   return this._list.slice()
  // }

  getLength() {
    return this._list.length
  }

  // add(control) {
  //   this._list.push(control)
  // }

  // remove(control) {
  //   this._list = this._list.filter(c => c === control)
  // }

  forEach(f) {
    this._list.forEach((a, index) => {
      f(a, index)
    })
  }
}
