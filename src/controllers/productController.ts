import { Request, Response } from 'express';
import { ProductService } from '../services/product.service';

export class ProductController {
  private _productService: ProductService;

  constructor() {
    this._productService = new ProductService();
  }

  async getAllProducts(req: Request, res: Response): Promise<Response> {
    try {
      const resultGetAllProducts = await this._productService.getAllProducts(req);
      return res.status(200).json(resultGetAllProducts);
    } catch (error: unknown) {
      return res.status(501).json(`Some error occurred in GetAllProducts ${error}`);
    }
  }

  async getProductById(req: Request, res: Response): Promise<Response> {
    try {
      const resultOfGetProduct = await this._productService.getProductById(req);
      if (resultOfGetProduct === null || !resultOfGetProduct) {
        return res.status(404).json({ Message: `Product with id ${req.params.id} was not found.` });
      } else {
        return res.status(200).json(resultOfGetProduct);
      }
    } catch (error: unknown) {
      return res.status(500).json(`Some error ocurred in getProductById ${error}`);
    }
  }

  async createProduct(req: Request, res: Response): Promise<Response> {
    try {
      const resultOfCreateProduct = await this._productService.createProduct(req);
      if (!resultOfCreateProduct) return res.status(500).json('No result returned from createProduct');
      return res.status(201).json(resultOfCreateProduct);
    } catch (error: unknown) {
      return res.status(500).json(`Some error occurred in createProduct ${error}`);
    }
  }

  async updateProduct(req: Request, res: Response): Promise<Response> {
    try {
      const resultOfUpdateProduct = await this._productService.updateProduct(req);
      return res.status(200).json(resultOfUpdateProduct);
    } catch (error: unknown) {
      return res.status(500).json(`Some error occurred in updateProduct ${error}`);
    }
  }

  async deleteProduct(req: Request, res: Response): Promise<Response> {
    try {
      if (req.params.id === null || undefined) {
        return res.status(404).json({ error: `You must pass a id in url` });
      }
      const resultOfDeleteProduct = await this._productService.deleteProduct(req);
      if (resultOfDeleteProduct?.error) {
        return res.status(404).json({ error: `Product with id ${req.params.id} was not nound` });
      }
      return res.status(200).json({ message: `User wiht id ${req.params.id} was delete with success!` });
    } catch (error: unknown) {
      return res.status(500).json(`Some error occurred in deleteProduct ${error}`);
    }
  }
}
