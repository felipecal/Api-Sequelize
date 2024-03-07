import { Request, Response, Router } from 'express';
import { authMiddleware } from '../middlewares/authMiddleware';
import { UserController } from '../controllers/userController';

export const userRoutes = Router();
const userController = new UserController();

userRoutes.get('/getAllUsers', authMiddleware, (req: Request, res: Response) => userController.getAllUsers(req, res));

userRoutes.get('/getUser/:id', authMiddleware, (req: Request, res: Response) => userController.getUserById(req, res));

userRoutes.post('/authenticateUser', (req: Request, res: Response) => userController.authenticateUser(req, res));

userRoutes.post('/createUser', (req: Request, res: Response) => userController.createUser(req, res));

userRoutes.put('/updateUser/:id', (req: Request, res: Response) => userController.updateUser(req, res));

userRoutes.put('/autoUpdateUser', authMiddleware, (req: Request, res: Response) =>
  userController.autoUpdateUser(req, res),
);

userRoutes.delete('/deleteUser/:id', authMiddleware, (req: Request, res: Response) =>
  userController.deleteUser(req, res),
);

userRoutes.post('/validateToken', authMiddleware, (req: Request, res: Response) =>
  userController.validateUserToken(req, res),
);
