import { Router } from 'express';
import { SettingsController } from './controllers/SettingsController'

const routes = Router();
const settingsController = new SettingsController();


routes.get('/',(req, res)=>{
    return res.status(200).send()
})

routes.post('/settings', settingsController.create)

export { routes };