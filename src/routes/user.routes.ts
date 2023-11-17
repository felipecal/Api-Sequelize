import { Router } from 'express';
import { UserController } from '../controllers/userController';

export const router = Router();

const userController = new UserController();


router.get('/getAllUsers', userController.getUserById);

router.get('/getUser/:id', userController.getUserById);

router.post('/createUser', userController.createUser);

router.put('/updateUser/:id', userController.updateUser);

router.delete('/deleteUser/:id', userController.deleteUser);
