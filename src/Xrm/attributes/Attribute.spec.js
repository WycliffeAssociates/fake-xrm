import Attribute from './Attribute'

describe('Attribute', () => {
  it('initializes without config', () => {
    new Attribute()
  })

  it('initializes with config', () => {
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
})

describe('Attribute properties and methods', () => {
  const attribute = new Attribute()

  it('has controls property', () => {
    expect(attribute.hasOwnProperty('controls')).toBe(true)
  })

  xit('has getAttributeType function', () => {
    expect(typeof attribute.getAttributeType).toBe('function')
  })

  xit('has getFormat function', () => {
    expect(typeof attribute.getFormat).toBe('function')
  })

  xit('has getIsDirty function', () => {
    expect(typeof attribute.getIsDirty).toBe('function')
  })

  xit('has getIsPartyList function', () => {
    expect(typeof attribute.getIsPartyList).toBe('function')
  })

  xit('has getMaxLength function', () => {
    expect(typeof attribute.getMaxLength).toBe('function')
  })

  it('has getName function', () => {
    expect(typeof attribute.getName).toBe('function')
  })

  xit('has getParent function', () => {
    expect(typeof attribute.getParent).toBe('function')
  })

  xit('has getUserPrivilege function', () => {
    expect(typeof attribute.getUserPrivilege).toBe('function')
  })

  it('has addOnChange function', () => {
    expect(typeof attribute.addOnChange).toBe('function')
  })

  it('has removeOnChange function', () => {
    expect(typeof attribute.removeOnChange).toBe('function')
  })

  it('has fireOnChange function', () => {
    expect(typeof attribute.fireOnChange).toBe('function')
  })

  xit('has setRequiredLevel function', () => {
    expect(typeof attribute.setRequiredLevel).toBe('function')
  })

  xit('has getRequiredLevel function', () => {
    expect(typeof attribute.getRequiredLevel).toBe('function')
  })

  xit('has setSubmitMode function', () => {
    expect(typeof attribute.setSubmitMode).toBe('function')
  })

  xit('has getSubmitMode function', () => {
    expect(typeof attribute.getSubmitMode).toBe('function')
  })

  xit('has getValue function', () => {
    expect(typeof attribute.getValue).toBe('function')
  })

  xit('has setValue function', () => {
    expect(typeof attribute.setValue).toBe('function')
  })
})

describe('Attribute.getName', () => {
  it('returns the name of the attribute', () => {
    const attribute = new Attribute({ name: 'single attribute' })
    expect(attribute.getName()).toBe('single attribute')
  })

  it('returns an empty string if there\'s no name', () => {
    const attribute = new Attribute()
    expect(attribute.getName()).toBe('')
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

describe('Attribute.fireOnChange', () => {
  it('calls all the function in _onChangeHandlers', () => {
    const testFunctionOne = jest.fn()
    const attribute = new Attribute({
      onChangeHandlers: [ testFunctionOne ],
    })

    attribute.fireOnChange()
    expect(testFunctionOne.mock.calls.length).toBe(1)

    const testFunctionTwo = jest.fn()
    attribute.addOnChange(testFunctionTwo)

    attribute.fireOnChange()
    expect(testFunctionOne.mock.calls.length).toBe(2)
    expect(testFunctionTwo.mock.calls.length).toBe(1)
  })
})
