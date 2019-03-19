import {Router} from 'express';
import * as OnbvnController from './controller';

const routes = new Router();

routes.post('/createusers', OnbvnController.createOnbvnReg);
routes.get('/getallusers', OnbvnController.getAllUsers);
routes.get('/findusername/:user_name', OnbvnController.findUsername);


export default routes;