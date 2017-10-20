import Entity from './Entity'
import Collection from 'Xrm/collections/Collection'

describe('Entity properties and methods', () => {
  it('has attributes property', () => {
    const entity = new Entity()
    expect(entity.hasOwnProperty('attributes')).toBe(true)
  })

  it('has addOnSave function', () => {
    const entity = new Entity()
    expect(typeof entity.addOnSave).toEqual('function')
  })
})

describe('Initializing Entity', () => {
  it('initializes attributes okay with config.attributes', () => {
    const entity = new Entity({
      attributes: {
        list: [1]
      }
    })
    const attributes = new Collection({ list: [1] })
    expect(JSON.stringify(entity.attributes)).toEqual(JSON.stringify(attributes))
  })

  it('initializes attributes okay without passed-in config', () => {
    const entity = new Entity()
    const attributes = new Collection()
    expect(JSON.stringify(entity.attributes)).toEqual(JSON.stringify(attributes))
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
