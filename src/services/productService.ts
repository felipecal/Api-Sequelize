import { ProductModel } from "../database/models/productModel";

export class ProductService {
  async getAllProducts() {
    const productResult = await ProductModel.findAll();
    console.log(productResult);
    return productResult;
  }

  async getProductById(req: Request) {

  }

  async createProduct(req: Request){

  }

  async updateProduct(req: Request){

  }

  async delteProduct(req: Request){

  }
}