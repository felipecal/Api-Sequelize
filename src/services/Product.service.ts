import { Product, UpdateProduct } from '../interfaces/ProductInterface';
import { ProductModel } from '../models/productModel';
import { Request } from 'express';

export class ProductService {
  async getAllProducts(req: Request): Promise<ProductModel[] | { error: string }> {
    try {
      const { cod_user } = req.body;
      const productResult = await ProductModel.findAll({
        where: {
          cod_user,
        },
      });
      return productResult;
    } catch (error: unknown) {
      console.error(`Some error ocurred in getAllProducts ${error}`);
      return { error: `Some error ocurred in getAllProducts ${error}` };
    }
  }

  async getProductById(req: Request): Promise<Product> {
    try {
      const productId = req.params.id;
      const productResult = await ProductModel.findByPk(productId);
      return productResult?.dataValues;
    } catch (error: unknown) {
      console.error(`Some error ocurred in getProductById ${error}`);
      return { error: `Some error ocurred in getProductById ${error}` };
    }
  }

  async createProduct(req: Request): Promise<Product> {
    try {
      if (!req.body) throw new Error('Cannot create the data, because the body is not passed');
      const { product_name, description, value, quantity, cod_user } = req.body;
      const productResult = await ProductModel.create({
        product_name,
        description,
        value,
        quantity,
        cod_user,
      });
      return productResult.dataValues;
    } catch (error: unknown) {
      console.error(`Some error ocurred in createProduct ${error}`);
      return { error: `Some error ocurred in createProduct ${error}` };
    }
  }

  async updateProduct(req: Request): Promise<UpdateProduct> {
    try {
      const product_id = req.params.id;
      const { cod_user } = req.body;
      const body = req.body;
      const product = await ProductModel.findByPk(product_id);
      if (!product) throw new Error('Product not found');
      const resultOfUpdateUser = await ProductModel.update(body, {
        where: {
          product_id,
          cod_user,
        },
        returning: true,
      });
      return resultOfUpdateUser[1][0].dataValues;
    } catch (error: unknown) {
      console.error(`Some error ocurred in updatePorudct ${error}`);
      return { error: `Some error ocurred in updatePorudct ${error}` };
    }
  }

  async deleteProduct(req: Request): Promise<void | { error: string }> {
    try {
      const productId = req.params.id;
      console.log('productId', productId, typeof productId);
      
      const getProduct = await ProductModel.findByPk(productId);
      if (getProduct) {
        const deleteProduct = await getProduct.destroy();
        return deleteProduct;
      } else {
        throw new Error(`Product with id ${productId} was not found`);
      }
    } catch (error: unknown) {
      console.error(`Product with id ${error} was not found`);
      return { error: `Product with id ${error} was not found` };
    }
  }
}
