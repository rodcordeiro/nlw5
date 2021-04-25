import { EntityRepository, Repository } from "typeorm";
import { Connection } from "../database/entities/Connection";


@EntityRepository(Connection)
class ConnectionsRepository extends Repository<Connection>{
    
}
export {
    ConnectionsRepository
}