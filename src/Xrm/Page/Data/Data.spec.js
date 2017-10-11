import Data from './Data'

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
    const data = new Data({ entity: 'fake entity' })
    expect(data.entity).toEqual('fake entity')
  })

  it('defaults entity to an empty object', () => {
    const data = new Data()
    expect(data.entity).toEqual({})
  })
})
