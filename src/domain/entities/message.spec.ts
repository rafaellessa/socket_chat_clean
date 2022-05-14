import Message from './message'

describe('Messages', () => {
  it('Deve criar uma mensage', () => {
    const message = new Message(1, 1, 1, 'Ola')
    expect(message.body).toBe('Ola')
  })
})
