import OptionSetControl from './OptionSetControl'
import OptionSetAttr from 'Xrm/attributes/OptionSetAttr'
import OptionSetValue from 'Xrm/attributes/OptionSetValue'

describe('OptionSetControl properties and methods', () => {
  const control = new OptionSetControl()

  it('has addOption method', () => {
    expect(typeof control.addOption).toBe('function')
  })

  it('has clearOptions method', () => {
    expect(typeof control.clearOptions).toBe('function')
  })

  it('has removeOption method', () => {
    expect(typeof control.removeOption).toBe('function')
  })
})

describe('OptionSetControl.addOption', () => {
  it('adds option to the options attribute', () => {
    const attribute = new OptionSetAttr({ options: [] })
    const control = new OptionSetControl({ attribute })

    control.addOption({ text: 'fake option' })
    expect(control.getAttribute().getOptions()).toEqual([
      { text: 'fake option' }
    ])
  })

  it('can insert option into a specific index', () => {
    const attribute = new OptionSetAttr({ options: [] })
    const control = new OptionSetControl({ attribute })

    control.addOption({ text: 'fake option' }, 1)
    expect(control.getAttribute().getOptions()).toEqual([
      undefined,
      { text: 'fake option' },
    ])
  })
})

describe('OptionSetControl.clearOptions', () => {
  it('removes all options from the attribute', () => {
    const attribute = new OptionSetAttr({ options: [1, 2, 3] })
    const control = new OptionSetControl({ attribute })

    expect(attribute.getOptions().length).toBe(3)
    control.clearOptions()
    expect(attribute.getOptions().length).toBe(0)
  })
})

describe('OptionSetControl.removeOption', () => {
  it('removes option whose value matches the argument', () => {
    const attribute = new OptionSetAttr({ options: [
      new OptionSetValue('zero', 0),
      new OptionSetValue('one', 1),
    ]})
    const control = new OptionSetControl({ attribute })

    control.removeOption(1)
    expect(attribute.getOptions()).toEqual([
      { text: 'zero', value: 0 }
    ])
  })
})
