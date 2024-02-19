import { Request, Response, Router } from 'express';
import { UserController } from '../controllers/userController';
import { authMiddleware } from '../middlewares/authMiddleware';

export const userRoutes = Router();
const userController = new UserController();

userRoutes.get('/getAllUsers', authMiddleware, (req: Request, res: Response) => userController.getAllUsers(req, res));

userRoutes.get('/getUser/:id', authMiddleware, (req: Request, res: Response) => userController.getUserById(req, res));

userRoutes.post('/authenticateUser', (req: Request, res: Response) => userController.authenticateUser(req, res));

userRoutes.post('/createUser', authMiddleware, (req: Request, res: Response) => userController.createUser(req, res));

userRoutes.put('/updateUser/:id', authMiddleware, (req: Request, res: Response) => userController.updateUser(req, res));

userRoutes.put('/autoUpdateUser', authMiddleware, (req: Request, res: Response) =>
  userController.autoUpdateUser(req, res),
);

userRoutes.delete('/deleteUser/:id', authMiddleware, (req: Request, res: Response) =>
  userController.deleteUser(req, res),
);

userRoutes.post('/validateToken', authMiddleware, (req: Request, res: Response) =>
  userController.validateUserToken(req, res),
);
