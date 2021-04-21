import { EntityRepository, Repository } from "typeorm";
import { Setting } from "../database/entities/Setting";

@EntityRepository(Setting)
class SettingsRepository extends Repository<Setting>{

}
export {
    SettingsRepository
}