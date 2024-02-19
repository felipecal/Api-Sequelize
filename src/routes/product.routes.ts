import { Request, Response, Router } from 'express';
import { ProductController } from '../controllers/productController';
import { authMiddleware } from '../middlewares/authMiddleware';

export const productsRoutes = Router();
const productController = new ProductController();

productsRoutes.get('/getAllProducts', authMiddleware, (req: Request, res: Response) =>
  productController.getAllProducts(req, res),
);

productsRoutes.get('/getProduct/:id', authMiddleware, (req: Request, res: Response) =>
  productController.getProductById(req, res),
);

productsRoutes.post('/createProduct', authMiddleware, (req: Request, res: Response) =>
  productController.createProduct(req, res),
);

productsRoutes.put('/updateProduct/:id', authMiddleware, (req: Request, res: Response) =>
  productController.updateProduct(req, res),
);

productsRoutes.delete('/deleteProduct/:id', authMiddleware, (req: Request, res: Response) =>
  productController.deleteProduct(req, res),
);
