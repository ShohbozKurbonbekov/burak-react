import { TabPanel } from "@mui/lab";
import { Box, Button, Input, Stack, Typography } from "@mui/material";
import { createSelector } from "@reduxjs/toolkit";
import { retrievePausedOrders } from "./selector";
import { useSelector } from "react-redux";
import { Order, OrderItem, OrderUpdateInput } from "../../../lib/types/order";
import { Messages, serverApi } from "../../../lib/config";
import { Product } from "../../../lib/types/product";
import { sweetErrorHandling } from "../../../lib/sweetAlert";
import { T } from "../../../lib/types/common";
import { useGlobals } from "../../hooks/useGlobals";
import { Message } from "@mui/icons-material";
import OrderService from "../../services/OrderService";
import { OrderStatus } from "../../../lib/enums/order.enum";

const pausedOrdersRetriever = createSelector(
  retrievePausedOrders,
  (pausedOrders) => ({ pausedOrders })
);

interface PausedOrdersProp {
  setValue: (input: string) => void;
}

export default function PuasedOrders(props: PausedOrdersProp) {
  const { pausedOrders } = useSelector(pausedOrdersRetriever);
  const { authMember, setOrderBuilder } = useGlobals();
  const { setValue } = props;

  // HANDLERS
  const deleteOrderHandler = async (e: T) => {
    try {
      if (!authMember) {
        throw new Error(Messages.error2);
      }

      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.DELETE,
      };
      const confirmation = window.confirm(
        "Do you really want to delete the order?"
      );

      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);
        setOrderBuilder(new Date());
      }
    } catch (error) {
      console.log(error);
      sweetErrorHandling(error).then();
    }
  };

  const processOrderHandler = async (e: T) => {
    try {
      if (!authMember) {
        throw new Error(Messages.error2);
      }

      const orderId = e.target.value;
      const input: OrderUpdateInput = {
        orderId: orderId,
        orderStatus: OrderStatus.PROCESS,
      };

      const confirmation = window.confirm(
        "Do you really want to continue to the payment process"
      );

      if (confirmation) {
        const order = new OrderService();
        await order.updateOrder(input);

        setValue("2");
        setOrderBuilder(new Date());
      }
    } catch (error) {
      console.log(error);
      sweetErrorHandling(error).then();
    }
  };

  return (
    <TabPanel value={"1"}>
      <Stack>
        {pausedOrders?.map((order: Order) => {
          return (
            <Box
              key={order._id}
              className="order-main-box"
              sx={{
                p: 3,
                borderRadius: "40px",
                boxShadow:
                  "inset 0px 0px 4px 5px rgba(0,0,0,0.4), -4px 4px 3px rgba(0,0,0,0.3)",
                mb: 2,
              }}
            >
              <Box sx={{ mb: 2 }}>
                {order?.orderItems?.map((item: OrderItem) => {
                  const product: Product = order.productData.filter(
                    (el: Product) => item.productId === el._id
                  )[0];

                  const imagePath = `${serverApi}/${product.productImages[0]}`;

                  return (
                    <Box
                      key={item._id}
                      display={"flex"}
                      className="orders-name-price"
                      flexDirection={"row"}
                      alignItems={"center"}
                      justifyContent={"space-between"}
                    >
                      <Box
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                      >
                        <img
                          src={imagePath}
                          alt=""
                          className="order-dish-img"
                          style={{
                            width: "40px",
                            height: "40px",
                            borderRadius: "100%",
                          }}
                        />
                        <p
                          className="title-dish"
                          style={{
                            marginLeft: "8px",
                            fontWeight: "600",
                            fontSize: "18px",
                            fontFamily: "Poppins",
                          }}
                        >
                          {product.productName}
                        </p>
                      </Box>
                      <Box
                        className="price-box"
                        display={"flex"}
                        flexDirection={"row"}
                        alignItems={"center"}
                        gap={"4px"}
                        sx={{
                          fontFamily: "Poppins",
                          fontWeight: "550",
                          fontSize: "14px",
                        }}
                      >
                        <p>${item.itemPrice}</p>
                        <img src="/icons/close.svg" alt="closing-icon" />
                        <span>{item.itemQuantity}</span>
                        <img src="/icons/pause.svg" alt="" />
                        <p>${item.itemQuantity * item.itemPrice}</p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"space-between"}
              >
                <Box
                  display={"flex"}
                  flexDirection={"row"}
                  alignItems={"center"}
                  gap={"8px"}
                  sx={{
                    fontSize: "14px",
                    fontWeight: "bold",
                    fontFamily: "Poppins",
                  }}
                >
                  <Typography component={"h4"} sx={{ fontWeight: "bold" }}>
                    Product price
                  </Typography>
                  <Typography component={"p"} sx={{ fontWeight: "bold" }}>
                    ${order.orderTotal - order.orderDelivery}
                  </Typography>
                  <img src="/icons/plus.svg" alt="" />
                  <Typography component={"h4"} sx={{ fontWeight: "bold" }}>
                    Delivery cost
                  </Typography>
                  <Typography component={"p"} sx={{ fontWeight: "bold" }}>
                    ${order.orderDelivery}
                  </Typography>
                  <img src="/icons/pause.svg" alt="" />
                  <Typography component={"h4"} sx={{ fontWeight: "bold" }}>
                    Total
                  </Typography>
                  <Typography component={"p"} sx={{ fontWeight: "bold" }}>
                    ${order.orderTotal}
                  </Typography>
                </Box>
                <Box display={"flex"} gap={"10px"}>
                  <Button
                    value={order._id}
                    variant="contained"
                    color="secondary"
                    sx={{ fontWeight: "600" }}
                    onClick={deleteOrderHandler}
                  >
                    Cancel
                  </Button>
                  <Button
                    value={order._id}
                    variant="contained"
                    sx={{
                      color: "#fff",
                      bgcolor: "#70b45b !important",
                    }}
                    onClick={processOrderHandler}
                  >
                    Payment
                  </Button>
                </Box>
              </Box>
            </Box>
          );
        })}

        {!pausedOrders ||
          (pausedOrders.length === 0 && (
            <Box
              display={"flex"}
              flexDirection={"row"}
              justifyContent={"center"}
            >
              <img
                src="/icons/noimage-list.svg"
                alt=""
                style={{ width: 300, height: 300 }}
              />
            </Box>
          ))}
      </Stack>
    </TabPanel>
  );
}
