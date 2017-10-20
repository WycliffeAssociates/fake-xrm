import Collection from 'Xrm/collections/Collection'

export default class Ui {
  constructor(config = {}) {
    this.controls = new Collection(config.controls || [])
  }
}
