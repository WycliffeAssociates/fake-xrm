import Attribute from './Attribute'

describe('Attribute', () => {
  it('initializes okay without config', () => {
    new Attribute()
  })

  it('initializes okay with config', () => {
    new Attribute({ value: 'test value' })
  })

  it('takes in value from the config', () => {
    const attribute = new Attribute({ value: 'test' })
    expect(attribute._value).toBe('test')
  })

  it('takes in onChangeHandlers from the config', () => {
    const testFunction = () => 0
    const attribute = new Attribute({ onChangeHandlers: [testFunction] })
    expect(attribute._onChangeHandlers.length).toBe(1)
    expect(attribute._onChangeHandlers[0]()).toEqual(testFunction())
  })

  it('defaults value to null', () => {
    const attribute = new Attribute()
    expect(attribute._value).toBe(null)
  })

  it('has getValue function', () => {
    const attribute = new Attribute()
    expect(typeof attribute.getValue).toBe('function')
  })

  it('has setValue function', () => {
    const attribute = new Attribute()
    expect(typeof attribute.setValue).toBe('function')
  })

  it('has getIsDirty function', () => {
    const attribute = new Attribute()
    expect(typeof attribute.getIsDirty).toBe('function')
  })

  it('has addOnChange function', () => {
    const attribute = new Attribute()
    expect(typeof attribute.addOnChange).toBe('function')
  })

  it('has removeOnChange function', () => {
    const attribute = new Attribute()
    expect(typeof attribute.removeOnChange).toBe('function')
  })
})


describe('Attribute.getValue', () => {
  it('returns whatever\'s in _value', () => {
    const attribute = new Attribute()
    expect(attribute.getValue()).toBe(null)
    attribute._value = 'test value'
    expect(attribute.getValue()).toBe('test value')
    attribute._value = 123
    expect(attribute.getValue()).toBe(123)
  })
})

describe('Attribute.setValue', () => {
  it('sets _value to whatever\'s passed in', () => {
    const attribute = new Attribute()
    expect(attribute._value).toBe(null)
    attribute.setValue('test value')
    expect(attribute._value).toBe('test value')
    attribute.setValue(123)
    expect(attribute._value).toBe(123)
  })
})

describe('Attribute.getIsDirty', () => {
  it('returns true if value is different from original value', () => {
    const attribute = new Attribute()
    attribute.setValue(1)
    expect(attribute.getIsDirty()).toBe(true)
  })

  it('returns false if value is the same as the original value', () => {
    const attribute = new Attribute()
    expect(attribute.getIsDirty()).toBe(false)
    attribute.setValue(null)
    expect(attribute.getIsDirty()).toBe(false)
  })
})

describe('Attribute.addOnChange', () => {
  it('adds handler to the _onChangeHandlers', () => {
    const attribute = new Attribute()
    expect(attribute._onChangeHandlers.length).toBe(0)

    const testFunction = () => 0;
    attribute.addOnChange(testFunction)
    expect(attribute._onChangeHandlers.length).toBe(1)
  })
})

describe('Attribute.removeOnChange', () => {
  it('removes the right handler from the _onChangeHandlers', () => {
    const testFunction = () => 1;
    const attribute = new Attribute({
      onChangeHandlers: [ testFunction, () => 1 ]
    })
    expect(attribute._onChangeHandlers.length).toBe(2)

    attribute.removeOnChange(testFunction)
    expect(attribute._onChangeHandlers.length).toBe(1)

    const match = attribute._onChangeHandlers.filter(h => h === testFunction)
    expect(match.length).toBe(0)
  })
})
