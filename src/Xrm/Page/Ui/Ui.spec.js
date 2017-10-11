import Ui from './Ui'

describe('Ui', () => {
  it('initializes without config', () => {
    new Ui()
  })

  it('initializes with config', () => {
    new Ui({ controls: [] })
  })

  it('has controls property', () => {
    const ui = new Ui
    expect(ui.hasOwnProperty('controls')).toBe(true)
  })
})
