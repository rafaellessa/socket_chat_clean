import Contact from './contact'
import InvalidParamError from '../errors/invalid-param-error'
describe('Contact', () => {
  it('Deve criar um contato valido', () => {
    const contact = new Contact(1, 'Rafael Lessa', 'rafael@email.com')
    expect(contact.name).toBe('Rafael Lessa')
    expect(contact.email).toBe('rafael@email.com')
  })

  it('Nao deve criar um contato sem email', () => {
    expect(() => new Contact(1, 'Rafael Lessa', '')).toThrow(new InvalidParamError())
  })

  it('Nao deve criar um contato sem nome', () => {
    expect(() => new Contact(1, '', 'rafael@email.com')).toThrow(new InvalidParamError())
  })

  it('Nao deve criar um contato com email invalido', () => {
    expect(() => new Contact(1, 'Rafael Lessa', '1234')).toThrow(new InvalidParamError())
  })
})
