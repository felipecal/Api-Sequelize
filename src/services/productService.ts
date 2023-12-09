import { ProductModel } from "../database/models/productModel";

export class ProductService {
  async getAllProducts() {
    const productResult = await ProductModel.findAll();
    return productResult;
  }

  async getProductById(req: any) {
    const productId = req.params.id;
    const productResult = await ProductModel.findByPk(productId);
    return productResult;

  }

  async createProduct(req: any) {
    const productBody = req.body;
    console.log(productBody);
    if (!productBody) {
      console.log('Cannot create the data, because the body is not passed');
    }
    const productResult = await ProductModel.create({
      product_name: productBody.product_name,
      description: productBody.description,
      value: productBody.value,
      cod_user: productBody.cod_user
    });
    return productResult

  }

  async updateProduct(req: any) {
    const productId = req.params.id;
    const body = req.body;
    const product = await ProductModel.findByPk(productId);
    if (!product) throw new Error('Product not found');
    const resultOfUpdateUser = await ProductModel.update(body, {
      where: { product_id: productId },
      returning: true,
    });
    return resultOfUpdateUser;
  }

  async delteProduct(req: any) {
    const productId = req.params.id;
    const getProduct = await ProductModel.findByPk(productId);
    if (getProduct) {
      const deleteProduct = await getProduct.destroy();
      return deleteProduct;
    } else {
      console.log(`Product with id ${productId} was not found`);
    }
  }
}