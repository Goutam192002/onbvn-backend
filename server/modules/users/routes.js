import {Router} from 'express';
import * as UserController from './controller';
import * as AuthController from './auth';

const router = new Router();

/**
 * @swagger
 * tags:
 *    - name: User Routes
 *      description: All user CRUD operations are handled here
 * /api/v1/users:
 *   post:
 *     summary: CREATE a new user
 *     tags:
 *       - User Routes
 *     description: CREATE a new user
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: name
 *         description: The name of the user
 *         required: true
 *         in: formData
 *       - name: username
 *         description: The username of the user
 *         required: true
 *         in: formData
 *       - name: mobileNumber
 *         description: The mobile number of the user
 *         required: true
 *         in: formData
 *       - name: email
 *         description: The email id of the user
 *         required: true
 *         in: formData
 *       - name: profilePicture
 *         description: The profile picture of the user ( will be a URL)
 *         required: true
 *         in: formData
 *       - name: aadharUID
 *         description: The Aadhar ID of the user
 *         required: true
 *         in: formData
 *       - name: password
 *         description: Password of the user which will be used to login
 *         required: true
 *         in: formData
 *     responses:
 *       200:
 *         description: returns the newly created user without password
 *       500:
 *         description: User has not been created...Internal server error occurred
 */
router.post('/users/', UserController.create);

/**
 * @swagger
 * /api/v1/users:
 *   get:
 *     summary: GET all users
 *     tags:
 *       - User Routes
 *     description: Gets a list of all the users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns a list of users without their passwords
 *       500:
 *         description: Could not get users...Internal server error occurred
 */
router.get('/users/', UserController.getAll);

/**
 * @swagger
 * /api/v1/users/:username:
 *   get:
 *     summary: GET user by username
 *     tags:
 *       - User Routes
 *     description: Gets the user by username
 *     parameters:
 *       - in: path
 *         name: username
 *         description: The username of the user who has to be searched
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns the user queried without password
 *       500:
 *         description: Could not get user...Internal server error occurred
 */
router.get('/users/:username', UserController.findUser);

/**
 * @swagger
 * /api/v1/users/:username:
 *   put:
 *     summary: UPDATE user details
 *     tags:
 *       - User Routes
 *     description: UPDATE the user details. But these details can be updated only if the user is logged in.
 *     parameters:
 *       - in: path
 *         name: username
 *       - name: name
 *         description: The name of the user
 *         in: formData
 *       - name: username
 *         description: The username of the user
 *         in: formData
 *       - name: mobileNumber
 *         description: The mobile number of the user
 *         in: formData
 *       - name: email
 *         description: The email id of the user
 *         in: formData
 *       - name: profilePicture
 *         description: The profile picture of the user ( will be a URL)
 *         in: formData
 *       - name: AadharUID
 *         description: The Aadhar ID of the user
 *         in: formData
 *       - name: Password
 *         description: Password of the user which will be used to login
 *         in: formData
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Returns the updated user
 *       500:
 *         description: Could not update user...Internal server error occurred
 */
router.put('/users/:username', UserController.updateUser);

/**
 * @swagger
 * /api/v1/users/:username:
 *  delete:
 *    summary: DELETE a user
 *    tags:
 *      - User Routes
 *    description: This route is for deleting a user. This route is not really important as we aren't sure if this feature of allowing users to delete their accounts should be their or not.
 *    parameters:
 *      - in: path
 *        name: username
 *        description: The username of the user whose details has to be updated
 *    produces:
 *      - application/json
 *    responses:
 *      200:
 *        description: Deleted the user successfully
 *      500:
 *        description: Could not delete user....Internal Server Error occurred.
 */
router.delete('/users/:username', UserController.deleteUser);
// authorize user (LOGIN)
router.post('/users/login', AuthController.authenticate);

export default router;
