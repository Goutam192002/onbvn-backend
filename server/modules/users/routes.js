import {Router} from 'express';
import * as UserController from './controller';
import * as AuthController from './auth';

const router = new Router();

/**
 * @swagger
 *
 * /api/v1/users:
 *   post:
 *     description: Create a new user
 *     produces:
 *       - application/json
 *     parameters:
 *     responses:
 *       200:
 *         description: returns the newly created user
 *       500:
 *         description: User has not been created...Internal server error occurred
 */
router.post('/users/', UserController.create);
// get all users
router.get('/users/', UserController.getAll);
// get user by username
router.get('/users/:username', UserController.findUser);
// update user
router.put('/users/:username', UserController.updateUser);
// delete user
router.delete('/users/:username', UserController.deleteUser);
// authorize user (LOGIN)
router.post('/users/login', AuthController.authenticate);

export default router;
