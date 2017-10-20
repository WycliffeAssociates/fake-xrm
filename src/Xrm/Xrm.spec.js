import Xrm from './Xrm'
import Page from './Page'
// import OptionSetValue from './attributes/OptionSetValue'

describe('Xrm instance', () => {
  it('has a Page property', () => {
    const xrm = new Xrm()
    expect(xrm.Page).toBeDefined()
  })

  it('initializes Page with the passed-config', () => {
    const xrm = new Xrm({ page: { context: 'fake data' }})
    const page = new Page({ context: 'fake data' })
    expect(JSON.stringify(xrm.Page)).toEqual(JSON.stringify(page))
  })

  it('initializes Page without config if there\'s none', () => {
    const xrm = new Xrm()
    const page = new Page()
    expect(JSON.stringify(xrm.Page)).toEqual(JSON.stringify(page))
  })
})

// describe('_generate', () => {
//   it('has booleanAttr function', () => {
//     const xrm = new Xrm()
//     expect(typeof xrm._generate.booleanAttr).toEqual('function')
//   })
// })
//
// describe('Xrm._generate.booleanAttr', () => {
//   const xrm = new Xrm()
//   const booleanAttr = xrm._generate.booleanAttr
//
//   it('returns a BooleanAttr', () => {
//     expect(booleanAttr('wa_fakestring', false)).toEqual({
//       name: 'wa_fakestring',
//       value: false
//     })
//   })
//
//   it('adds the same booleanAttr to Page.attributes', () => {
//     const returned = booleanAttr('wa_cakestring', true)
//     const stored = xrm.Page.getAttribute('wa_cakestring')
//     expect(stored).toEqual(returned)
//   })
// })
//
// describe('Xrm._generate.optionSetAttr', () => {
//   const xrm = new Xrm()
//   const optionSets = [
//     new OptionSetValue('amazing anaconda', 111),
//     new OptionSetValue('bored bear', 222),
//   ]
//   const optionSetAttr = xrm._generate.optionSetAttr('wa_fakeoptionset', optionSets)
//
//   it('returns an OptionSetAttr', () => {
//     expect(optionSetAttr.constructor.name).toEqual('OptionSetAttr')
//   })
//
// })
