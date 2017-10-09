import OptionSetValue from './OptionSetValue'

describe('OptionSetValue', () => {
  it('takes a text/label and a value', () => {
    expect(new OptionSetValue('fake option', 123)).toEqual({
      text: 'fake option',
      value: 123,
    })
  })
})
