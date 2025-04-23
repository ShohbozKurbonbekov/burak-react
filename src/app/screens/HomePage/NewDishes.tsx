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
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

let newDishes = [
  {
    productName: "Cutlet",
    imagePath: "/img/cutlet.webp",
  },
  {
    productName: "Kebab",
    imagePath: "/img/kebab-fresh.webp",
  },
  {
    productName: "Kebab",
    imagePath: "/img/kebab.webp",
  },
  {
    productName: "Lavash",
    imagePath: "/img/lavash.webp",
  },
];

export default function NewDishes() {
  return (
    <div className="new-dishes-frame">
      <Container>
        <Stack className="new-dishes-section">
          <Box className="category-title">Fresh Menu</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {newDishes.length !== 0 ? (
                newDishes.map((product, number) => {
                  return (
                    <Card className="card" key={number} variant="outlined">
                      <CardOverflow>
                        <div className="product-sale">Normal Size</div>
                        <AspectRatio ratio="1">
                          <img src={product.imagePath} alt="" />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow variant="soft" className="card-details">
                        <Stack className="info">
                          <Stack flexDirection={"row"}>
                            <Typography className="title">
                              {product.productName}
                            </Typography>
                            <Divider height="24" width="2" bg="#d9d9d9" />
                            <Typography className="price">$12</Typography>
                          </Stack>
                          <Stack>
                            <Typography className="views">
                              20
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
