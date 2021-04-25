import { Request, Response} from 'express';
import { MessagesServices } from '../services/MessagesServices';

class MessagesController{
    
    async create(req: Request, res: Response){
        const msgService = new MessagesServices();

        const { admin_id, text, user_id } = req.body;

        const message = await msgService.create({
            admin_id,
            text,
            user_id
        })
        
        return res.json(message)
    }

    async showByUser(req: Request, res: Response){
        const { id } = req.params;
        const msgService = new MessagesServices();

        const list = await msgService.ListByUser(id)

        return res.json(list)
    }

}

export {
    MessagesController
}