import { Router } from 'express';
import { ProductController } from '../controllers/productController';

export const productsRoutes = Router();

const productController = new ProductController();

productsRoutes.get('/getAllProducts', (req, res) => productController.getAllProducts(req, res));

productsRoutes.get('/getProduct/:id', (req, res) => productController.getProductById(req, res));

productsRoutes.post('/createProduct', (req, res) => productController.createProduct(req, res));

productsRoutes.put('/updateProduct/:id', (req, res) => productController.updateProduct(req, res));

productsRoutes.delete('/deleteProduct/:id', (req, res) => productController.deleteProduct(req, res));
