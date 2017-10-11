import Entity from './Entity'

describe('Entity', () => {
  it('has attributes property', () => {
    const entity = new Entity()
    expect(entity.hasOwnProperty('attributes')).toBe(true)
  })

  it('sets attributes based on config', () => {
    const entity = new Entity({ attributes: 'fake attributes' })
    expect(entity.attributes).toEqual('fake attributes')
  })

  it('defaults attributes to an empty array', () => {
    const entity = new Entity()
    expect(entity.attributes).toEqual([])
  })

  it('has addOnSave function', () => {
    const entity = new Entity()
    expect(typeof entity.addOnSave).toEqual('function')
  })
})

describe('Entity.addOnSave', () => {
  it('adds a handler to the list of on-save handlers', () => {
    const entity = new Entity()
    expect(entity._onSaveHandlers.length).toBe(0)
    entity.addOnSave(() => {})
    expect(entity._onSaveHandlers.length).toBe(1)
  })
})
