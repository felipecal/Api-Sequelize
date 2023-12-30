import { Router } from 'express';
import { UserController } from '../controllers/userController';

export const userRoutes = Router();
const userController = new UserController();

userRoutes.get('/getAllUsers', (req, res) => userController.getAllUsers(req, res));

userRoutes.get('/getUser/:id', (req, res) => userController.getUserById(req, res));

userRoutes.get('/getUserByUsername/:username/:password', (req, res) => userController.getUserByUsername(req, res));

userRoutes.post('/createUser', (req, res) => userController.createUser(req, res));

userRoutes.put('/updateUser/:id', (req, res) => userController.updateUser(req, res));

userRoutes.delete('/deleteUser/:id', (req, res) => userController.deleteUser(req, res));
