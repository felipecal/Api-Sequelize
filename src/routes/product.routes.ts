import { Router } from 'express';
import { ProductController } from '../controllers/productController';

export const procutRoutes = Router();

const productController = new ProductController();

procutRoutes.get('/getAllProducts', (req, res) => productController.getAllProducts(req, res));

procutRoutes.get('/getProduct/:id', (req, res) => productController.getProductById(req, res));

procutRoutes.post('/createProduct', (req, res) => productController.createProduct(req, res));

procutRoutes.put('/updateProduct/:id', (req, res) => productController.updateProduct(req, res));

procutRoutes.delete('/deleteProduct/:id', (req, res) => productController.deleteProduct(req, res));
