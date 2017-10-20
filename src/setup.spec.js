import setup from './setup'
import Xrm from './Xrm'

describe('setup', () => {
  it('takes a fake Xrm object', () => {
    const xrm = new Xrm()
    setup(xrm)
  })

  it('throws an error if called without Xrm object', () => {
    expect(() => {
      setup()
    }).toThrow()

    function InvalidXrm() {}
    const invalidXrm = new InvalidXrm()

    expect(() =>{
      setup(invalidXrm)
    }).toThrow()
  })

  it('returns an object', () => {
    const xrm = new Xrm()
    expect(typeof setup(xrm)).toBe('object')
  })
})

describe('setup object', () => {
  const xrm = new Xrm()
  const xrmSetup = setup(xrm)

  it('has addField property', () => {
    expect(xrmSetup.hasOwnProperty('addField')).toBe(true)
  })
})

describe('setup.addField.optionSet', () => {
  const xrm = new Xrm()
  const xrmSetup = setup(xrm)

  it('requires a name as first arg', () => {
    expect(() => {
      xrmSetup.addField.optionSet()
    }).toThrow()
  })

  it('adds option set attribute and control to xrm', () => {
    const fieldName = 'wa_optionset'

    expect(xrm.Page.getAttribute(fieldName)).toBe(null)
    expect(xrm.Page.getControl(fieldName)).toBe(null)

    xrmSetup.addField.optionSet(fieldName)

    const attr = xrm.Page.getAttribute(fieldName)
    expect(attr).not.toBe(null)
    expect(attr.getName()).toBe(fieldName)

    const control = xrm.Page.getControl(fieldName)
    expect(attr).not.toBe(null)
    expect(control.getName()).toBe(fieldName)
  })
})
