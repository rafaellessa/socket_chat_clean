import Message from './message'

export default class RoomMessages {
  constructor (readonly idRoom: number, readonly nameRoom: string, readonly message: Message) {

  }
}
