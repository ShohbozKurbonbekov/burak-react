import React from "react";
import { Box, Container, Stack } from "@mui/material";
import {
  AspectRatio,
  Card,
  CardOverflow,
  CssVarsProvider,
  Typography,
} from "@mui/joy";
import Divider from "../../components/divider/index";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveNewDishes, retrievePopularDishes } from "./selector";
import { Product } from "../../../lib/types/product";
import ProductService from "../../services/ProductService";
import { serverApi } from "../../../lib/config";
import { ProductCollection } from "../../../lib/enums/product.enum";

// REDUX SLICE & SELECTOR

const newDishesRetriever = createSelector(retrieveNewDishes, (newDishes) => ({
  newDishes,
}));

export default function NewDishes() {
  const { newDishes } = useSelector(newDishesRetriever);
  console.log("new Dishes", newDishes);
  return (
    <div className="new-dishes-frame">
      <Container>
        <Stack className="new-dishes-section">
          <Box className="category-title">Fresh Menu</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {newDishes.length !== 0 ? (
                newDishes.map((product: Product) => {
                  const imagePath = `${serverApi}/${product.productImages[0]}`;
                  const sizeVolume =
                    product.productCollection === ProductCollection.DRINK
                      ? product.productValue + "l"
                      : product.productSize + " size";
                  return (
                    <Card className="card" key={product._id} variant="outlined">
                      <CardOverflow>
                        <div className="product-sale">{sizeVolume}</div>
                        <AspectRatio ratio="1">
                          <img src={imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow variant="soft" className="card-details">
                        <Stack className="info">
                          <Stack flexDirection={"row"}>
                            <Typography className="title">
                              {product.productName}
                            </Typography>
                            <Divider height="24" width="2" bg="#d9d9d9" />
                            <Typography className="price">
                              {product.productPrice}
                            </Typography>
                          </Stack>
                          <Stack>
                            <Typography className="views">
                              {product.productViews}
                              <VisibilityIcon
                                sx={{ fontSize: "25", marginLeft: "5px" }}
                              ></VisibilityIcon>
                            </Typography>
                          </Stack>
                        </Stack>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New Products are not available</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
