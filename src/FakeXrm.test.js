import FakeXrm from './FakeXrm'
import OptionSetValue from './attributes/OptionSetValue'
import Page from './Page'

describe('FakeXrm class', () => {
  it('exists', () => {
    expect(FakeXrm).toBeDefined()
  })
})

describe('FakeXrm instance', () => {
  it('has a Page property', () => {
    const Xrm = new FakeXrm()
    expect(Xrm.Page).toBeDefined()
  })

  it('initializes Page with the passed-config', () => {
    const Xrm = new FakeXrm({ page: { data: 'fake data' }})
    expect(Xrm.Page).toEqual(new Page({ data: 'fake data' }))
  })

  it('initializes Page without config if there\'s none', () => {
    const Xrm = new FakeXrm()
    expect(Xrm.Page).toEqual(new Page())
  })
})

describe('_generate', () => {
  it('has booleanAttr function', () => {
    const Xrm = new FakeXrm()
    expect(typeof Xrm._generate.booleanAttr).toEqual('function')
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
