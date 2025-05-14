import axios from "axios";
import { serverApi } from "../../lib/config";
import { Product, ProductInquery } from "../../lib/types/product";
import axois from "axios";

class ProductService {
  private readonly path;

  constructor() {
    this.path = serverApi;
  }

  public async getProducts(input: ProductInquery): Promise<Product[]> {
    try {
      let url = `${this.path}/product/all?order=${input.order}&page=${input.page}&limit=${input.limit}`;

      if (input.productCollection) {
        url += `&productionCollection=${input.productCollection}`;
      }

      if (input.search) {
        url += `&search=${input.search}`;
      }

      const result = await axios.get(url);
      console.log("getProducts: ", result);

      return result.data;
    } catch (error) {
      console.log("Error, getProduct: ", error);
      throw error;
    }
  }
}

export default ProductService;
