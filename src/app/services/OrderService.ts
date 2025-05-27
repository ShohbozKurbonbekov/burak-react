import axios from "axios";
import { serverApi } from "../../lib/config";
import { CartItem } from "../../lib/types/search";
import { Order, OrderInquery, OrderItemInput } from "../../lib/types/order";
import { error } from "console";

class OrderService {
  private readonly path: string;
  constructor() {
    this.path = serverApi;
  }

  public async createOrder(input: CartItem[]): Promise<Order> {
    try {
      const orderItems: OrderItemInput[] = input.map((item: CartItem) => {
        return {
          itemQuantity: item.quantity,
          itemPrice: item.price,
          productId: item._id,
        };
      });

      const url = `${this.path}/order/create`;
      const result = await axios.post(url, orderItems, {
        withCredentials: true,
      });
      console.log("orderCreate: ", result);

      return result.data;
    } catch (error) {
      console.log("Error in createOrder :", error);
      throw error;
    }
  }

  public async getMyOrders(input: OrderInquery): Promise<Order[]> {
    try {
      const url = `${this.path}/order/all?page=${input.page}&limit=${input.limit}&orderStatus=${input.orderStatus}`;

      const result = await axios.get(url, { withCredentials: true });
      console.log("getMyOrders: ", result.data);
      return result.data;
    } catch (error) {
      console.log("Error in getMyOrders", error);
      throw error;
    }
  }
}

export default OrderService;
