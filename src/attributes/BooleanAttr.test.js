import BooleanAttr from './BooleanAttr';

describe('BooleanAttr', () => {
  it('takes a name and a boolean value', () => {
    expect(new BooleanAttr('name', true))
  })

  it('defaults name to an empty string', () => {
    const unnamedBooleanAttr = new BooleanAttr()
    expect(unnamedBooleanAttr.getName()).toEqual('')
  })

  it('defaults value to false', () => {
    const defaultBooleanAttr = new BooleanAttr()
    expect(defaultBooleanAttr.getValue()).toBe(false)
  })

  it('returns a BooleanAttr', () => {
    const returned = new BooleanAttr('name', false)
    expect(returned).toBeInstanceOf(BooleanAttr)
  })

  it('returns name through getName method', () => {
    const booleanAttr = new BooleanAttr('fake boolean', true)
    expect(booleanAttr.getName()).toEqual('fake boolean')
  })

  it('returns value through getValue method', () => {
    const falseBooleanAttr = new BooleanAttr('fake false boolean', false)
    expect(falseBooleanAttr.getValue()).toBe(false)

    const trueBooleanAttr = new BooleanAttr('fake trie boolean', true)
    expect(trueBooleanAttr.getValue()).toBe(true)
  })
})
