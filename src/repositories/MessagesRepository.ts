import { EntityRepository, Repository } from "typeorm"
import { Message } from "../database/entities/Message"

@EntityRepository(Message)
class MessageRepository extends Repository<Message>{

}

export {
    MessageRepository
}