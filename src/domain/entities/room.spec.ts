import Contact from './contact'
import Room from './room'
import InvalidParamError from '../errors/invalid-param-error'

describe('Room', () => {
  it('Deve criar uma sala', () => {
    const room = new Room(1, 'Bate Papo do Rafinha')
    room.addParticipants(new Contact(2, 'Savana Lessa', 'savana@email.com'))
    expect(room.name).toBe('Bate Papo do Rafinha')
  })
  it('Deve criar uma sala com um contato', () => {
    const room = new Room(1, 'Bate Papo do Rafinha')
    room.addParticipants(new Contact(1, 'Rafael Lessa', 'rafael@email.com'))
    room.addParticipants(new Contact(2, 'Savana Lessa', 'savana@email.com'))
    expect(room.participants).toHaveLength(2)
  })

  it('nao deve criar uma sala com um contato sem email', () => {
    const room = new Room(1, 'Bate Papo do Rafinha')
    expect(() => room.addParticipants(new Contact(1, 'Rafael Lessa', ''))).toThrow(new InvalidParamError())
  })

  it('Deve enviar uma mensagem na sala', () => {
    const room = new Room(1, 'Bate Papo do Rafinha')
    room.addParticipants(new Contact(1, 'Rafael Lessa', 'rafael@email.com'))
    room.addParticipants(new Contact(2, 'Savana Lessa', 'savana@email.com'))
    room.addMessages(1, 1, 'Teste de Mensagem')
    expect(room.messages).toHaveLength(2)
  })
})
