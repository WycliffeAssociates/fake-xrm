import OptionSetAttr from 'Xrm/attributes/OptionSetAttr'
import OptionSetControl from 'Xrm/controls/OptionSetControl'

export default function setup(xrm) {
  if (xrm.constructor.name !== 'Xrm') {
    throw Error('Must pass in fake xrm object')
  }

  const addField = {
    optionSet: function(name, options = []) {
      if (!name) {
        throw Error('Must pass in name as first argument')
      }
      const attribute = new OptionSetAttr({ name, options })
      const control = new OptionSetControl({ name, attribute })
      xrm.Page.data.entity.attributes._list.push(attribute)
      xrm.Page.ui.controls._list.push(control)
    }
  }

  return {
    addField
  }
}
