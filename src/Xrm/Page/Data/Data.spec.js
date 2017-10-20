import Data from './Data'
import Entity from './Entity'

describe('Data', () => {
  it('exists', () => {
    expect(Data).toBeDefined()
  })
})

describe('Data instance', () => {
  it('has entity property', () => {
    const data = new Data()
    expect(data.hasOwnProperty('entity')).toBe(true)
  })

  it('takes entity property from config', () => {
    const data = new Data({ entity: {
      attributes: [1]
    }})
    const entity = new Entity({ attributes: [1] })
    expect(JSON.stringify(data.entity)).toEqual(JSON.stringify(entity))
  })

  it('defaults entity to a new Entity object', () => {
    const data = new Data()
    expect(data.entity.constructor.name).toEqual('Entity')
  })
})
