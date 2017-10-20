import Data from './Data'
import Ui from './Ui'

export default class Page {
  constructor(config = {}) {
    this.context = config.context || {}
    this.data = new Data(config.data)
    this.ui = new Ui(config.ui)
  }

  getAttribute(param) {
    return this.data.entity.attributes.get(param)
  }

  getControl(param) {
    return this.ui.controls.get(param)
  }

}
