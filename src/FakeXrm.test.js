import FakeXrm from './FakeXrm'

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

  it('has a generate property', () => {
    expect(Xrm.generate).toBeDefined()
  })

  describe('generate', () => {
    it('has booleanAttr function', () => {
      expect(typeof Xrm.generate.booleanAttr).toEqual('function')
    })
  })
})

describe('FakeXrm.generate.booleanAttr', () => {
  const Xrm = new FakeXrm()
  const booleanAttr = Xrm.generate.booleanAttr

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
