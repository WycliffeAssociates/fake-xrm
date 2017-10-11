import Collection from 'collections/Collection'

export default class Ui {
  constructor(config = {}) {
    this.controls = new Collection(config.controls || [])
  }
}
