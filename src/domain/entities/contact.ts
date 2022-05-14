import InvalidParamError from '../errors/invalid-param-error'
export default class Contact {
  constructor (readonly id: number, readonly name: string, readonly email: string) {
    if (!this.isValid(name, email)) throw new InvalidParamError()
  }

  isValid (name: string, email: string): Boolean {
    if (email === '' || name === '') return false
    if (!this.isValidEmail(email)) return false
    return true
  }

  isValidEmail (email: string) {
    const regex = /\S+@\S+\.\S+/
    return regex.test(email)
  }
}
