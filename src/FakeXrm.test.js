import FakeXrm from './FakeXrm'
import OptionSetValue from './attributes/OptionSetValue'

describe('FakeXrm class', () => {
  it('exists', () => {
    expect(FakeXrm).toBeDefined()
  })
})

describe('FakeXrm instance', () => {
  const Xrm = new FakeXrm()

  it('has a Page property', () => {
    expect(Xrm.Page).toBeDefined()
  })

  it('has a _generate property', () => {
    expect(Xrm._generate).toBeDefined()
  })

  describe('_generate', () => {
    it('has booleanAttr function', () => {
      expect(typeof Xrm._generate.booleanAttr).toEqual('function')
    })
  })
})

describe('FakeXrm._generate.booleanAttr', () => {
  const Xrm = new FakeXrm()
  const booleanAttr = Xrm._generate.booleanAttr

  it('returns a BooleanAttr', () => {
    expect(booleanAttr('wa_fakestring', false)).toEqual({
      name: 'wa_fakestring',
      value: false
    })
  })

  it('adds the same booleanAttr to Page.attributes', () => {
    const returned = booleanAttr('wa_cakestring', true)
    const stored = Xrm.Page.getAttribute('wa_cakestring')
    expect(stored).toEqual(returned)
  })
})

describe('FakeXrm._generate.optionSetAttr', () => {
  const Xrm = new FakeXrm()
  const optionSets = [
    new OptionSetValue('amazing anaconda', 111),
    new OptionSetValue('bored bear', 222),
  ]
  const optionSetAttr = Xrm._generate.optionSetAttr('wa_fakeoptionset', optionSets)

  it('returns an OptionSetAttr', () => {
    expect(optionSetAttr.constructor.name).toEqual('OptionSetAttr')
  })

})
