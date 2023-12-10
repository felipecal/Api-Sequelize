import { ProductService } from "../services/productService";

export class ProductController {
  private _productService: ProductService;

  constructor() {
    this._productService = new ProductService();
  }

  async getAllProducts(req: any, res: any) {
    try {
      const resultGetAllProducts = await this._productService.getAllProducts();
      res.status(200).json(resultGetAllProducts);
    } catch (error) {
      res.status(500).json('Some error occurred in GetAllProducts');
    }
  }

  async getProductById(req: any, res: any) {
    try {
      const resultOfGetProduct = await this._productService.getProductById(req);
      res.status(200).json(resultOfGetProduct);
    } catch (error) {
      res.status(500).json('Some error ocurred in getProductById')
    }
  }


  async createProduct(req: any, res: any) {
    try {
      const resultOfCreateProduct = await this._productService.createProduct(req);
      res.status(200).json(resultOfCreateProduct);
    } catch (error) {
      res.status(500).json('Some error occurred in createProduct');
    }
  }

  async updateProduct(req: any, res: any) {
    try {
      const resultOfUpdateProduct = await this._productService.updateProduct(req);
      res.status(200).json(resultOfUpdateProduct);
    } catch (error) {
      res.status(500).json('Some error occurred in updateProduct');
    }
  }

  async deleteProduct(req: any, res: any) {
    try {
      const resultOfDelteUser = await this._productService.delteProduct(req);
      res.status(200).json(resultOfDelteUser);
    } catch (error) {
      res.status(500).json('Some error occurred in deleteProduct');
    }
  }
}
