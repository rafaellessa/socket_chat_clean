import Contact from './contact'
import Message from './message'
import RoomContacts from './room-contacts'
import RoomMessages from './room-messages'
export default class Room {
  participants: RoomContacts[] = []
  messages: RoomMessages[] = []
  constructor (readonly id: number, readonly name: string) {
  }

  addParticipants (participant: Contact) {
    this.participants.push(new RoomContacts(participant.id, participant.name, participant.email, this.name))
  }

  addMessages (senderId: number, roomId: number, message: string) {
    for (const participant of this.participants) {
      this.messages.push({ idRoom: this.id, nameRoom: this.name, message: new Message(1, senderId, participant.idContact, message) })
    }
  }
}
