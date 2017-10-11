import Context from './Context'

describe('Context', () => {
  it('exists', () => {
    expect(Context).toBeDefined()
  })
})

describe('Context instance', () => {
  it('has getClientUrl method', () => {
    const context = new Context()
    expect(typeof context.getClientUrl).toEqual('function')
  })

  it('takes in url value from config', () => {
    const context = new Context({
      baseUrl: 'test.url.com'
    })
    expect(context._baseUrl).toEqual('test.url.com')
  })

  it('defaults url to an empty string', () => {
    const context = new Context()
    expect(context._baseUrl).toEqual('')
  })
})

describe('Context.getClientUrl', () => {
  it('returns baseUrl', () => {
    const context = new Context({
      baseUrl: 'fake.url.com'
    })
    expect(context.getClientUrl()).toEqual('fake.url.com')
  })
})
