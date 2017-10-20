import Collection from 'Xrm/collections/Collection';

export default class Entity {
  constructor(config = {}) {
    this.attributes = new Collection(config.attributes)
    this.addOnSave = this.addOnSave.bind(this)
    this._onSaveHandlers = []
  }

  addOnSave(handler) {
    this._onSaveHandlers.push(handler)
  }
}
