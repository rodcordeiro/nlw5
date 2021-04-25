import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../database/entities/Message";
import { MessageRepository } from "../repositories/MessagesRepository"

interface IMessageCreate{
    admin_id?: string
    text: string
    user_id: string
}

class MessagesServices{
    private messagesRepository : Repository<Message>;

    constructor(){
        this.messagesRepository = getCustomRepository(MessageRepository);
    }

    async create({ admin_id, text, user_id } : IMessageCreate){
        
        const message = this.messagesRepository.create({
            admin_id,
            text,
            user_id
        })

        await this.messagesRepository.save(message)

        return message
    }
    async ListByUser(user_id: string){
        
        const list = await this.messagesRepository.find({
            where: {user_id},
            relations: ["user"]
        })

        return list
    }

}

export{
    MessagesServices
}