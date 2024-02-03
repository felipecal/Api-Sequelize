import { ProductService } from '../services/productService';

export class ProductController {
  private _productService: ProductService;

  constructor() {
    this._productService = new ProductService();
  }

  async getAllProducts(req: any, res: any): Promise<Response> {
    try {
      const resultGetAllProducts = await this._productService.getAllProducts();
      return res.status(200).json(resultGetAllProducts);
    } catch (error) {
      return res.status(501).json(`Some error occurred in GetAllProducts ${error}`);
    }
  }

  async getProductById(req: any, res: any): Promise<Response> {
    try {
      const resultOfGetProduct = await this._productService.getProductById(req);
      if (resultOfGetProduct === null) {
        return res.status(404).json({ Message: `Product with id ${req.params.id} was not found.` });
      } else {
        return res.status(200).json(resultOfGetProduct);
      }
    } catch (error) {
      return res.status(500).json(`Some error ocurred in getProductById ${error}`);
    }
  }

  async createProduct(req: any, res: any): Promise<Response> {
    try {
      const resultOfCreateProduct = await this._productService.createProduct(req);
      if (!resultOfCreateProduct) return res.status(500).json('No result returned from createProduct');
      return res.status(201).json(resultOfCreateProduct);
    } catch (error) {
      return res.status(500).json(`Some error occurred in createProduct ${error}`);
    }
  }

  async updateProduct(req: any, res: any): Promise<Response> {
    try {
      const resultOfUpdateProduct = await this._productService.updateProduct(req);
      return res.status(200).json(resultOfUpdateProduct);
    } catch (error) {
      return res.status(500).json(`Some error occurred in updateProduct ${error}`);
    }
  }

  async deleteProduct(req: any, res: any): Promise<Response> {
    try {
      if (req.params.id === null || undefined) {
        return res.status(404).json({ Message: `Product with id ${req.params.id} was not nound` });
      }
      await this._productService.delteProduct(req);
      return res.status(200).json(`User wiht id ${req.params.id} was delete with success!`);
    } catch (error) {
      return res.status(500).json(`Some error occurred in deleteProduct ${error}`);
    }
  }
}
