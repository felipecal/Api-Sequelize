import { Request, Response, Router } from 'express';
import { UserController } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';

export const userRoutes = Router();
const userController = new UserController();

userRoutes.get('/getAllUsers', (req: Request, res: Response) => userController.getAllUsers(req, res));

userRoutes.get('/getUser/:id', (req: Request, res: Response) => userController.getUserById(req, res));

userRoutes.post('/authenticateUser', (req: Request, res: Response) => userController.authenticateUser(req, res));

userRoutes.post('/createUser', (req: Request, res: Response) => userController.createUser(req, res));

userRoutes.put('/updateUser', authMiddleware, (req: Request, res: Response) => userController.updateUser(req, res));

userRoutes.delete('/deleteUser/:id', (req: Request, res: Response) => userController.deleteUser(req, res));

userRoutes.post('/validateToken', (req: Request, res: Response) => userController.validateUserToken(req, res));
