import Page from './Page'

describe('Page class', () => {
  it('exists', () => {
    expect(Page).toBeDefined()
  })
})

describe('Page instance', () => {
  const page = new Page()

  it('has a getAttribute function', () => {
    expect(typeof page.getAttribute).toBe('function')
  })

  describe('getAttribute function', () => {
    it ('returns whatever\'s in the attributes if no param is specified', () => {
      expect(page.getAttribute()).toEqual([])
    })
  })
})
