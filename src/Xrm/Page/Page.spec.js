import Page from './Page'
// import Collection from 'Xrm/collections/Collection'

describe('Page instance properties and methods', () => {
  const page = new Page()

  it('has a context property', () => {
    expect(page.hasOwnProperty('context')).toBe(true)
  })

  it('has a data property', () => {
    expect(page.hasOwnProperty('data')).toBe(true)
  })

  it('has a getAttribute function', () => {
    expect(typeof page.getAttribute).toBe('function')
  })

  it('has a getControl function', () => {
    expect(typeof page.getControl).toBe('function')
  })
})

describe('getAttribute function', () => {
  const page = new Page()
  page.data.entity.attributes.get = jest.fn()

  it('calls page.data.entity.attributes.get() with the same param', () => {
    const mockGet = page.data.entity.attributes.get

    page.getAttribute()

    expect(mockGet.mock.calls.length).toBe(1)
    expect(mockGet.mock.calls[0][0]).toBeUndefined()

    mockGet.mockClear()

    page.getAttribute('whatever')

    expect(mockGet.mock.calls.length).toBe(1)
    expect(mockGet.mock.calls[0][0]).toBe('whatever')
  })
})

describe('getControl function', () => {
  const page = new Page()
  page.ui.controls.get = jest.fn()

  it('calls page.ui.controls.get() with the same param', () => {
    const mockGet = page.ui.controls.get

    page.getControl()

    expect(mockGet.mock.calls.length).toBe(1)
    expect(mockGet.mock.calls[0][0]).toBeUndefined()

    mockGet.mockClear()

    page.getControl('whatever')

    expect(mockGet.mock.calls.length).toBe(1)
    expect(mockGet.mock.calls[0][0]).toBe('whatever')
  })
})
