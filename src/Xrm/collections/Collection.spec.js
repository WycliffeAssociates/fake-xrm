import Collection from './Collection'

// https://msdn.microsoft.com/en-us/library/dn481592.aspx

describe('Collection', () => {
  it('initializes without config', () => {
    new Collection()
  })

  it('initializes with config', () => {
    new Collection({ list: [] })
  })

  it('has get function', () => {
    const controls = new Collection()
    expect(typeof controls.get).toBe('function')
  })

  xit('has getAll function', () => {
    const controls = new Collection()
    expect(typeof controls.getAll).toBe('function')
  })

  xit('has add function', () => {
    const controls = new Collection()
    expect(typeof controls.add).toBe('function')
  })

  xit('has remove function', () => {
    const controls = new Collection()
    expect(typeof controls.remove).toBe('function')
  })

  it('has getLength function', () => {
    const controls = new Collection()
    expect(typeof controls.getLength).toBe('function')
  })

  it('has forEach function', () => {
    const controls = new Collection()
    expect(typeof controls.forEach).toBe('function')
  })
})
