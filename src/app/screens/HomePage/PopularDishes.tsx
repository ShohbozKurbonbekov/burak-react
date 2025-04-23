import React from "react";
import { Container, Stack, Box } from "@mui/material";
import { Card, CardContent, CardCover, Typography } from "@mui/joy";
import { CssVarsProvider } from "@mui/joy/styles";
import { CardOverflow } from "@mui/joy";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";

const list = [
  {
    productName: "Lavash",
    imagePath: "/img/lavash.webp",
  },
  {
    productName: "Cutlet",
    imagePath: "/img/cutlet.webp",
  },
  {
    productName: "Kebab",
    imagePath: "/img/kebab.webp",
  },
  {
    productName: "Kebab",
    imagePath: "/img/kebab-fresh.webp",
  },
];

export default function PopularDishes() {
  return (
    <div className="popular-dishes-frame">
      <Container>
        <Stack className="popular-section">
          <Box className="category-name">Popular Dishes</Box>
          <Stack className="cards-frame">
            {list.map((product, number) => {
              return (
                <CssVarsProvider key={number}>
                  <Card className="card">
                    <CardCover>
                      <img src={product.imagePath} alt="" />
                    </CardCover>
                    <CardCover className="card-cover" />
                    <CardContent sx={{ justifyContent: "flex-end" }}>
                      <Stack
                        flexDirection={"row"}
                        justifyContent={"space-between"}
                      >
                        <Typography
                          level="h2"
                          fontSize={"lg"}
                          textColor={"#fff"}
                          mb={1}
                        >
                          {product.productName}
                        </Typography>
                        <Typography
                          sx={{
                            fontWeight: "md",
                            color: "neutral.300",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          20
                          <VisibilityIcon
                            sx={{ fontSize: "25", marginLeft: "5px" }}
                          ></VisibilityIcon>
                        </Typography>
                      </Stack>
                    </CardContent>
                    <CardOverflow
                      sx={{
                        display: "flex",
                        gap: 1.5,
                        py: 1.5,
                        px: "var(--Card-padding)",
                        borderTop: "1p solid",
                        height: "60px",
                      }}
                    >
                      <Typography
                        startDecorator={<DescriptionOutlinedIcon />}
                        textColor="neutral.300"
                      >
                        This is delicious meal
                      </Typography>
                    </CardOverflow>
                  </Card>
                </CssVarsProvider>
              );
            })}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
