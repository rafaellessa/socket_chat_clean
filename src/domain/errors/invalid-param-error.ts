export default class InvalidParamError extends Error {
  constructor (error = 'Invalid param error') {
    super(error)
    this.name = 'InvalidParams'
  }
}
