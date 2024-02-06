import { ProductModel } from '../models/productModel';

export interface Product {
  product_id?: number;
  product_name?: string;
  description?: string;
  value?: number;
  quantity?: number;
  cod_user?: number;
  error?: string;
}

export interface UpdateProduct {
  message?: string;
  content?: [number, ProductModel[] | { error: string }];
  error?: string;
}
