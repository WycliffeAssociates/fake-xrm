import Collection from './Collection'

// https://msdn.microsoft.com/en-us/library/dn481592.aspx

describe('Collection', () => {
  it('initializes without config', () => {
    new Collection()
  })

  it('initializes with config', () => {
    new Collection({ list: [] })
  })
})

describe('Collection properties and methods', () => {
  const controls = new Collection()

  it('has get function', () => {
    expect(typeof controls.get).toBe('function')
  })

  xit('has getAll function', () => {
    expect(typeof controls.getAll).toBe('function')
  })

  xit('has add function', () => {
    expect(typeof controls.add).toBe('function')
  })

  xit('has remove function', () => {
    expect(typeof controls.remove).toBe('function')
  })

  it('has getLength function', () => {
    expect(typeof controls.getLength).toBe('function')
  })

  it('has forEach function', () => {
    expect(typeof controls.forEach).toBe('function')
  })
})

describe('Collection.get', () => {
  const list = [
    { _name: 'one' },
    { _name: 'two' },
    { _name: 'three' },
  ]
  const controls = new Collection({ list })

  it('returns everything in the list if no argument is passed', () => {
    expect(controls.get()).toEqual(list)
  })

  it('returns item with the same name if string is passed', () => {
    expect(controls.get('two')).toEqual(list[1])
  })

  it('returns null if no item\'s name matched the give string', () => {
    expect(controls.get('four')).toBe(null)
  })

  it('returns item on the passed in index', () => {
    expect(controls.get(0)).toEqual(list[0])
  })

  it('returns undefined if index is out of range', () => {
    expect(controls.get(5)).toBeUndefined()
  })

  it('returns items for which delegate function returns true', () => {
    expect(controls.get(i => i._name[0] === 't')).toEqual([
      { _name: 'two' },
      { _name: 'three' },
    ])
  })

  it('throws an error if parameter is not undefined, string, number, or function', () => {
    expect(() => { controls.get([]) }).toThrow()
  })
})

describe('Collection.getLength', () => {
  it('returns the length of the list', () => {
    const list = [
      { _name: 'one' },
      { _name: 'two' },
      { _name: 'three' },
    ]
    const controls = new Collection({ list })
    expect(controls.getLength()).toBe(3)
  })

  it('returns the length of the list even if it\'s empty', () => {
    const controls = new Collection()
    expect(controls.getLength()).toBe(0)
  })
})

describe('Collection.forEach', () => {
  it('runs the given function with each item as the parameter', () => {
    const list = [ 'a', 'b', 'c' ]
    const controls = new Collection({ list })
    const testFunction = jest.fn()

    controls.forEach(testFunction)
    expect(testFunction.mock.calls.length).toBe(3)
    expect(testFunction.mock.calls[0][0]).toBe('a')
    expect(testFunction.mock.calls[1][0]).toBe('b')
    expect(testFunction.mock.calls[2][0]).toBe('c')
  })
})
