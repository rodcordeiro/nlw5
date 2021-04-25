import { getCustomRepository, Repository } from "typeorm";
import { User } from "../database/entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UserService {
    private userRepository : Repository<User>

    constructor(){
        this.userRepository = getCustomRepository(UsersRepository)
    }

    async create(email: string){
        
        const userExists = await this.userRepository.findOne({email})

        if(userExists){
            return userExists;
        }
        const user = await this.userRepository.create({
            email
        })
        await this.userRepository.save(user)
        return user;
    }
    async findByEmail(email: string){
        
        const user = await this.userRepository.findOne({email})

        return user
    }
}

export {
    UserService
}