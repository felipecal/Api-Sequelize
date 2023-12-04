import { ProductModel } from "../database/models/productModel";

export class ProductService {
  async getAllProducts() {
    const productResult = await ProductModel.findAll();
    console.log(productResult);
    return productResult;
  }

  async getProductById(req: any) {
    const productId = req.params.id;
    const productResult = await ProductModel.findByPk(productId);
    return productResult;

  }

  async createProduct(req: Request) {

  }

  async updateProduct(req: Request) {

  }

  async delteProduct(req: Request) {

  }
}