import Control from './Control'

describe('Control properties and methods', () => {
  const control = new Control()

  it('has getDisabled method', () => {
    expect(typeof control.getDisabled).toEqual('function')
  })

  it('has setDisabled method', () => {
    expect(typeof control.setDisabled).toEqual('function')
  })

  it('has getAttribute method', () => {
    expect(typeof control.getAttribute).toEqual('function')
  })

  it('has getControlType', () => {
    expect(typeof control.getControlType).toEqual('function')
  })

  it('has getName method', () => {
    expect(typeof control.getName).toEqual('function')
  })

  it('has getParent method', () => {
    expect(typeof control.getParent).toEqual('function')
  })

  it('has getValue method', () => {
    expect(typeof control.getValue).toEqual('function')
  })

  it('has getLabel method', () => {
    expect(typeof control.getLabel).toEqual('function')
  })

  it('has setLabel method', () => {
    expect(typeof control.setLabel).toEqual('function')
  })

  it('has getVisible method', () => {
    expect(typeof control.getVisible).toEqual('function')
  })

  it('has setVisible method', () => {
    expect(typeof control.setVisible).toEqual('function')
  })

})

describe('Control.getName', () => {
  it('returns control name', () => {
    const control = new Control({ name: 'fake namel' })
    expect(control.getName()).toEqual('fake namel')
  })

  it('returns an empty string by default', () => {
    const control = new Control()
    expect(control.getName()).toEqual('')
  })
})

describe('Control.getLabel', () => {
  it('returns control label', () => {
    const control = new Control({ label: 'fake label' })
    expect(control.getLabel()).toEqual('fake label')
  })

  it('returns an empty string by default', () => {
    const control = new Control()
    expect(control.getLabel()).toEqual('')
  })
})

describe('Control.setLabel', () => {
  it('changes control label', () => {
    const control = new Control({ label: 'fake label' })
    expect(control.getLabel()).toEqual('fake label')
    control.setLabel('real label')
    expect(control.getLabel()).toEqual('real label')
  })
})

describe('Control.getDisabled', () => {
  it('returns control disabled status', () => {
    const control = new Control({ disabled: true })
    expect(control.getDisabled()).toEqual(true)
  })

  it('returns false by default', () => {
    const control = new Control()
    expect(control.getDisabled()).toEqual(false)
  })
})

describe('Control.setDisabled', () => {
  it('sets control disabled status', () => {
    const control = new Control({ disabled: false })
    expect(control.getDisabled()).toEqual(false)
    control.setDisabled(true)
    expect(control.getDisabled()).toEqual(true)
  })
})

describe('Control.getVisible', () => {
  it('returns control visible status', () => {
    const control = new Control({ visible: false })
    expect(control.getVisible()).toEqual(false)
  })

  it('returns true by default', () => {
    const control = new Control()
    expect(control.getVisible()).toEqual(true)
  })
})

describe('Control.setVisible', () => {
  it('sets control disabled status', () => {
    const control = new Control({ visible: true })
    expect(control.getVisible()).toEqual(true)
    control.setVisible(false)
    expect(control.getVisible()).toEqual(false)
  })
})

describe('Control.getControlType', () => {
  it('is not implemented yet', () => {
    const control = new Control()
    expect(() => control.getControlType()).toThrow()
  })
})

describe('Control.getParent', () => {
  it('is not implemented yet', () => {
    const control = new Control()
    expect(() => control.getParent()).toThrow()
  })
})

describe('Control.getValue', () => {
  it('is not implemented yet', () => {
    const control = new Control()
    expect(() => control.getValue()).toThrow()
  })
})
