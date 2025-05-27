import { TabPanel } from "@mui/lab";
import { Box, Button, Stack, Typography } from "@mui/material";
import { createSelector } from "@reduxjs/toolkit";
import { retrieveFinishedOrders } from "./selector";
import { useSelector } from "react-redux";
import { Product } from "../../../lib/types/product";
import { serverApi } from "../../../lib/config";
import { OrderItem } from "../../../lib/types/order";

const finishedOrdersRetriever = createSelector(
  retrieveFinishedOrders,
  (finishedOrders) => ({ finishedOrders })
);

export default function FinishedOrders() {
  const { finishedOrders } = useSelector(finishedOrdersRetriever);
  console.log("finishedOrders", finishedOrders);

  return (
    <TabPanel value={"3"}>
      <Stack>
        {finishedOrders.map((order) => {
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
                  const product = order.productData.filter(
                    (product: Product) => product._id === item.productId
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
                          alt={product.productName}
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
                        <img src="/icons/close.svg" alt="" />
                        <span>{item.itemQuantity}</span>
                        <img src="/icons/pause.svg" alt="" />
                        <p>
                          ${item.itemPrice} * {item.itemQuantity}
                        </p>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
              <Box
                display={"flex"}
                flexDirection={"row"}
                alignItems={"center"}
                justifyContent={"center"}
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
                    ${order.orderTotal} - {order.orderDelivery}
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
              </Box>
            </Box>
          );
        })}

        {!finishedOrders ||
          (finishedOrders.length === 0 && (
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
