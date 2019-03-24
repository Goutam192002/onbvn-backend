import {Router} from 'express';
import * as UserController from './controller';

const router = new Router();

// create a user
router.post('/users/', UserController.create);
// get all users
router.get('/users/', UserController.getAll);
// get user by username
router.get('/users/:username', UserController.findUser);
// update user
router.put('/users/:username', UserController.updateUser);
// delete user
router.delete('/users/:username', UserController.deleteUser);


export default router;
