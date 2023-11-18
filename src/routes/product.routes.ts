import { Router } from 'express';
import { ProductController } from '../controllers/productController';

export const router = Router();

const productController = new ProductController();


router.get('/getAllUsers', productController.getAllProducts);

router.get('/getUser/:id', productController.getProductById);

router.post('/createUser', productController.createProduct);

router.put('/updateUser/:id', productController.updateProduct);

router.delete('/deleteUser/:id', productController.deleteProduct);
