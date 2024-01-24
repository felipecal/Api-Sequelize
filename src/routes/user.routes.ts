import { Router } from 'express';
import { UserController } from '../controllers/userController';

export const userRoutes = Router();
const userController = new UserController();

/**
 * @swagger
 * /getAllUsers:
 *   get:
 *     tags: 
 *      - Usuario
 *     description: Retrieve a list of all users in the application.
 *     produces: 
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of users
 *         schema:
 *           $ref: '#/components/schemas/Usuario'
 */

userRoutes.get('/getAllUsers', (req, res) => userController.getAllUsers(req, res));


/**
 * @swagger
 * /getUser/:id:
 *   get:
 *     tags: 
 *      - Usuário
   *     description: Get a user by id.
 *     produces: 
 *       - application/json
 *     parameters: 
 *      - in: path
 *        id: id
 *        required: true
 *     responses:
 *       200:
 *         description: A list of users.
 *         schema:
 *           $ref: '#/components/schemas/Usuario'
 *      400: 
 *         description: User was not found
 */

userRoutes.get('/getUser/:id', (req, res) => userController.getUserById(req, res));

userRoutes.post('/authenticateUser', (req, res) => userController.authenticateUser(req, res));

userRoutes.post('/createUser', (req, res) => userController.createUser(req, res));

userRoutes.put('/updateUser/:id', (req, res) => userController.updateUser(req, res));

userRoutes.delete('/deleteUser/:id', (req, res) => userController.deleteUser(req, res));

userRoutes.post('/validateToken', (req, res) => userController.validateUserToken(req, res));
