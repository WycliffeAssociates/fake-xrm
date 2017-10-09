import OptionSetAttr from './OptionSetAttr';
import OptionSetValue from './OptionSetValue';

const optionSets = [
  new OptionSetValue('akward aardvark', 123),
  new OptionSetValue('bouncing beetle', 234),
  new OptionSetValue('curious cat', 345),
]

describe('OptionSetAttr', () => {
  const optionSetAttr = new OptionSetAttr('wa_fakeoptionset', optionSets)

  it('takes a name and a list of optionset', () => {
    expect(new OptionSetAttr('wa_fakeoptionset', optionSets))
  })

  it('has getOptions function', () => {
    expect(typeof optionSetAttr.getOptions).toEqual('function')
  })

  it('has getOption function', () => {
    expect(typeof optionSetAttr.getOption).toEqual('function')
  })

  it('has getValue function', () => {
    expect(typeof optionSetAttr.getValue).toEqual('function')
  })
})

describe('OptionSetAttr.getOptions', () => {
  it('returns an empty list if there\'s no options', () => {
    const optionSetAttr = new OptionSetAttr()
    expect(optionSetAttr.getOptions()).toEqual([])
  })

  it('returns all the options if there are any', () => {
    const optionSetAttr = new OptionSetAttr('dumb donkey', optionSets)
    expect(optionSetAttr.getOptions()).toEqual(optionSets)
  })
})

describe('OptionSetAttr.getOption', () => {
  const optionSetAttr = new OptionSetAttr('wa_fakeoptionset', optionSets)

  it('returns null if there\'s no match', () => {
    expect(optionSetAttr.getOption()).toBe(null)
    expect(optionSetAttr.getOption(987)).toBe(null)
  })

  it('returns the matched option', () => {
    expect(optionSetAttr.getOption(123)).toEqual({
      text: 'akward aardvark',
      value: 123
    })
    expect(optionSetAttr.getOption(345)).toEqual({
      text: 'curious cat',
      value: 345
    })
  })
})

describe('OptionSetAttr.getValue', () => {
  const optionSetAttr = new OptionSetAttr('wa_fakeoptionset', optionSets)

  it('returns null if there\'s no selected option', () => {
    expect(optionSetAttr.getValue()).toBe(null)
  })

  it('returns the value of the selected option', () => {
    optionSetAttr._setSelectedIndex(1)
    expect(optionSetAttr.getValue()).toEqual(234)
  })
})

describe('OptionSetAttr._setSelectedIndex', () => {
  const optionSetAttr = new OptionSetAttr('wa_fakeoptionset', optionSets)

  it('throws an error if number is out of range', () => {
    expect(() => {
      optionSetAttr._setSelectedIndex(-2)
    }).toThrow()
    expect(() => {
      optionSetAttr._setSelectedIndex(8)
    }).toThrow()
  })

  it('sets the _selectedIndex property', () => {
    optionSetAttr._setSelectedIndex(0)
    expect(optionSetAttr._selectedIndex).toEqual(0)
  })
})
