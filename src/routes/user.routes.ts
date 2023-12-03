import { Router } from 'express';
import { UserController } from '../controllers/userController';

export const router = Router();
const userController = new UserController();

router.get('/getAllUsers', (req, res) => userController.getAllUsers(req, res));

router.get('/getUser/:id', (req, res) => userController.getUserById(req, res));

router.post('/createUser', (req, res) => userController.createUser(req, res));

router.put('/updateUser/:id', (req, res) => userController.updateUser(req, res));

router.delete('/deleteUser/:id', (req, res) => userController.deleteUser(req, res));
