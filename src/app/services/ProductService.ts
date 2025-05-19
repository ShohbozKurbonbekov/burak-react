import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquery } from "../../lib/types/product";

class ProductService {
  private readonly path;

  constructor() {
    this.path = serverApi;
  }

  public async getProducts(input: ProductInquery): Promise<Product[]> {
    try {
      let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;

      if (input.productCollection) {
        url += `&productCollection=${input.productCollection}`;
      }

      if (input.search) {
        url += `&search=${input.search}`;
      }

      const result = await axios.get(url);

      return result.data;
    } catch (error) {
      console.log("Error, getProduct: ", error);
      throw error;
    }
  }

  public async getProduct(id: string): Promise<Product> {
    try {
      const url = `${this.path}/product/${id}`;
      const result = await axios.get(url);

      return result.data;
    } catch (error) {
      console.log("Error, getProduct: ", error);
      throw error;
    }
  }
}

export default ProductService;
