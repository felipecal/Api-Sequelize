import { ProductModel } from '../models/productModel';

export class ProductService {
  async getAllProducts() {
    try {
      const productResult = await ProductModel.findAll();
      return productResult;
    } catch (error) {
      console.error(`Some error ocurred in getAllProducts ${error}`);
    }
  }

  async getProductById(req: any) {
    try {
      const productId = req.params.id;
      const productResult = await ProductModel.findByPk(productId);
      return productResult;
    } catch (error) {
      console.error(`Some error ocurred in getProductById ${error}`);
    }
  }

  async createProduct(req: any) {
    try {
      const productBody = req.body;
      if (!productBody) throw new Error('Cannot create the data, because the body is not passed');
      const productResult = await ProductModel.create({
        product_name: productBody.product_name,
        description: productBody.description,
        value: productBody.value,
        cod_user: productBody.cod_user,
      });
      return productResult;
    } catch (error) {
      console.error(`Some error ocurred in createProduct ${error}`);
    }
  }

  async updateProduct(req: any) {
    try {
      const productId = req.params.id;
      const body = req.body;
      const product = await ProductModel.findByPk(productId);
      if (!product) throw new Error('Product not found');
      const resultOfUpdateUser = await ProductModel.update(body, {
        where: { product_id: productId },
        returning: true,
      });
      return resultOfUpdateUser;
    } catch (error) {
      console.error(`Some error ocurred in updatePorudct ${error}`);
    }
  }

  async delteProduct(req: any) {
    const productId = req.params.id;
    const getProduct = await ProductModel.findByPk(productId);
    if (getProduct) {
      const deleteProduct = await getProduct.destroy();
      return deleteProduct;
    } else {
      console.error(`Product with id ${productId} was not found`);
    }
  }
}
