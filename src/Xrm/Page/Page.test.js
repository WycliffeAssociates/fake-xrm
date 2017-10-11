import Page from './Page'

describe('Page class', () => {
  it('exists', () => {
    expect(Page).toBeDefined()
  })
})

describe('Page instance', () => {
  it('takes in array from config.attributes', () => {
    const page = new Page({
      attributes: ['fake attribute']
    })
    expect(page._attributes.length).toBe(1)
    expect(page._attributes[0]).toEqual('fake attribute')
  })

  it('defaults _attributes to an empty array', () => {
    const page = new Page()
    expect(page._attributes.length).toBe(0)
    expect(page._attributes).toEqual([])
  })

  it('takes in array from config.controls', () => {
    const page = new Page({
      controls: ['fake control']
    })
    expect(page._controls.length).toBe(1)
    expect(page._controls[0]).toEqual('fake control')
  })

  it('defaults _controls to an empty array', () => {
    const page = new Page()
    expect(page._controls.length).toBe(0)
    expect(page._controls).toEqual([])
  })

  it('has a context property', () => {
    const page = new Page()
    expect(page.hasOwnProperty('context')).toBe(true)
  })

  it('has a data property', () => {
    const page = new Page()
    expect(page.hasOwnProperty('data')).toBe(true)
  })

  it('has a getAttribute function', () => {
    const page = new Page()
    expect(typeof page.getAttribute).toBe('function')
  })

  it('has a getControl function', () => {
    const page = new Page()
    expect(typeof page.getControl).toBe('function')
  })
})

describe('getAttribute function', () => {
  it('returns whatever\'s in the attributes if no param is specified', () => {
    const page = new Page()
    expect(page.getAttribute()).toEqual([])
  })

  it('returns the first attribute whose name matches the param', () => {
    const page = new Page({
      attributes: [
        { name: 'first attribute' },
        { name: 'second attribute' },
      ]
    })
    expect(page.getAttribute('first attribute')).toEqual({
      name: 'first attribute'
    })
  })

  it('returns null if no match is found', () => {
    const page = new Page({
      attributes: [{ name: 'cannot touch this' }]
    })
    expect(page.getAttribute('really?')).toBe(null)
  })
})

describe('getControl function', () => {
  it ('returns whatever\'s in the controls if no param is specified', () => {
    const page = new Page()
    expect(page.getControl()).toEqual([])
  })

  it ('returns the first control whose name matches the param', () => {
    const page = new Page({
      controls: [
        { name: 'first control' },
        { name: 'second control' },
      ]
    })
    expect(page.getControl('second control')).toEqual({
      name: 'second control'
    })
  })

  it('returns null if no match is found', () => {
    const page = new Page({
      controls: [{ name: 'this is not the control you\'re looking for' }]
    })
    expect(page.getControl('droid control')).toBe(null)
  })
})
