import { Request, Response, Router } from 'express';
import { ProductController } from '../controllers/productController';

export const productsRoutes = Router();

const productController = new ProductController();

productsRoutes.get('/getAllProducts', (req: Request, res: Response) => productController.getAllProducts(res));

productsRoutes.get('/getProduct/:id', (req: Request, res: Response) => productController.getProductById(req, res));

productsRoutes.post('/createProduct', (req: Request, res: Response) => productController.createProduct(req, res));

productsRoutes.put('/updateProduct/:id', (req: Request, res: Response) => productController.updateProduct(req, res));

productsRoutes.delete('/deleteProduct/:id', (req: Request, res: Response) => productController.deleteProduct(req, res));
