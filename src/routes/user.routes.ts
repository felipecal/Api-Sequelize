import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { UserService } from '../services/userService';

export const router = Router();
const userService = new UserService();
const userController = new UserController(userService);

router.get('/getAllUsers', userController.getAllUsers.bind(userController));

router.get('/getUser/:id', userController.getUserById.bind(userController));

router.post('/createUser', userController.createUser.bind(userController));

router.put('/updateUser/:id', userController.updateUser.bind(userController));

router.delete('/deleteUser/:id', userController.deleteUser.bind(userController));
