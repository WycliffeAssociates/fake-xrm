import Entity from './Entity'

export default class Data {
  constructor(config = {}) {
    this.entity = new Entity(config.entity)
  }
}
