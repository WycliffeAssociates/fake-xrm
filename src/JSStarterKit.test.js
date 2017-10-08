import JSStarterKit from './JSStarterKit'

describe('JSStarterKit class', () => {
  it('exists', () => {
    expect(JSStarterKit).toBeDefined()
  })
})

describe('JSStarterKit instance', () => {
  it('has a message property', () => {
    const jsStarterKit = new JSStarterKit()
    expect(jsStarterKit.message).toBeDefined()
  })
})
