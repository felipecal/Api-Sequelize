export class ProductController {
  async getProductById(req: any, res: any) {
    res.status(200).json("Get ProductById");
  }

  async getAllProducts(req: any, res: any) {
    try {
      res.status(200).json("Get all Products");
    } catch (error) {
      res.status(500).json("Some error occurred in GetAllProducts");
    }
  }

  async createProduct(req: any, res: any) {
    try {
      res.status(200).json("Product Create with Success");
    } catch (error) {
      res.status(500).json("Some error occurred in createProduct");
    }
  }

  async updateProduct(req: any, res: any) {
    try {
      res.status(200).json("Product Update with Success");
    } catch (error) {
      res.status(500).json("Some error occurred in updateProduct");
    }
  }

  async deleteProduct(req: any, res: any) {
    try {
      res.status(200).json("Product Deleted with Success");
    } catch (error) {
      res.status(500).json("Some error occurred in deleteProduct");
    }
  }
}
