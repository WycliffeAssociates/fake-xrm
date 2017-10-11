import Control from './Control'

describe('Control', () => {
  it('has getName method', () => {
    const control = new Control()
    expect(typeof control.getName).toEqual('function')
  })

  it('has getLabel method', () => {
    const control = new Control()
    expect(typeof control.getLabel).toEqual('function')
  })

  it('has getVisible method', () => {
    const control = new Control()
    expect(typeof control.getVisible).toEqual('function')
  })

  it('has setVisible method', () => {
    const control = new Control()
    expect(typeof control.setVisible).toEqual('function')
  })

  it('has getDisabled method', () => {
    const control = new Control()
    expect(typeof control.getDisabled).toEqual('function')
  })

  it('has setDisabled method', () => {
    const control = new Control()
    expect(typeof control.setDisabled).toEqual('function')
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
