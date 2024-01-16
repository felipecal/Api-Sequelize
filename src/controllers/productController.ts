import { ProductService } from '../services/productService';

export class ProductController {
  private _productService: ProductService;

  constructor() {
    this._productService = new ProductService();
  }

  async getAllProducts(req: any, res: any) {
    try {
      const resultGetAllProducts = await this._productService.getAllProducts();
      return res.status(200).json(resultGetAllProducts);
    } catch (error) {
      return res.status(500).json(`Some error occurred in GetAllProducts ${error}`);
    }
  }

  async getProductById(req: any, res: any) {
    try {
      const resultOfGetProduct = await this._productService.getProductById(req);
      return res.status(200).json(resultOfGetProduct);
    } catch (error) {
      return res.status(500).json(`Some error ocurred in getProductById ${error}`);
    }
  }

  async createProduct(req: any, res: any) {
    try {
      const resultOfCreateProduct = await this._productService.createProduct(req);
      return res.status(200).json(resultOfCreateProduct);
    } catch (error) {
      return res.status(500).json(`Some error occurred in createProduct ${error}`);
    }
  }

  async updateProduct(req: any, res: any) {
    try {
      const resultOfUpdateProduct = await this._productService.updateProduct(req);
      return res.status(200).json(resultOfUpdateProduct);
    } catch (error) {
      return res.status(500).json(`Some error occurred in updateProduct ${error}`);
    }
  }

  async deleteProduct(req: any, res: any) {
    try {
      if (req.params.id === null || undefined) {
        console.log(`Cannot delete user whitout id`);
      }
      await this._productService.delteProduct(req);
      return res.status(200).json(`User wiht id ${req.params.id} was delete with success!`);
    } catch (error) {
      return res.status(500).json(`Some error occurred in deleteProduct ${error}`);
    }
  }
}
