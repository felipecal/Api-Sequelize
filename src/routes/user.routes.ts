import { Router } from 'express';
import { UserController } from '../controllers/userController';
import { UserService } from '../services/userService';

export const router = Router();
const userService = new UserService();

const userController = new UserController(userService);


router.get('/getAllUsers', userController.getUserById);

router.get('/getUser/:id', userController.getUserById);

router.post('/createUser', userController.createUser);

router.put('/updateUser/:id', userController.updateUser);

router.delete('/deleteUser/:id', userController.deleteUser);
