import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { useEffect } from "react";
import { Button, Container, Stack } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MonetizationOnSharpIcon from "@mui/icons-material/MonetizationOnSharp";
import { Badge, CardContent, CssVarsProvider } from "@mui/joy";
import { showProductsButtons } from "../../../js/product-page";

const products = [
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Cutlet", imagePath: "/img/cutlet.webp" },
  { productName: "Kebab", imagePath: "/img/kebab.webp" },
  { productName: "Lavash", imagePath: "/img/lavash.webp" },
  { productName: "Kebab", imagePath: "/img/kebab-fresh.webp" },
];

const brandPictures = [
  { brandPath: "/brand-images/brand1.png" },
  { brandPath: "/brand-images/brand2.png" },
  { brandPath: "/brand-images/brand3.png" },
  { brandPath: "/brand-images/brand4.png" },
];

export default function Products() {
  useEffect(() => {
    showProductsButtons();
  }, []);

  return (
    <div className="products">
      <Container>
        <Stack
          className="searchBar-container"
          flexDirection={"row"}
          alignItems={"center"}
        >
          <Box className="searchBar-title">Burak Restaurant</Box>
          <div className="searchBar">
            <input type="text" placeholder="Type here ..." autoFocus />
          </div>
          <Button
            sx={{ py: 1.3, ml: -1 }}
            variant="contained"
            endIcon={<SearchIcon />}
            className="searchBar-btn"
          >
            Search
          </Button>
        </Stack>
        <Stack
          className="buttons-group"
          flexDirection={"row"}
          justifyContent={"flex-end"}
          sx={{ mb: 5 }}
        >
          <Box sx={{ ml: 1.5 }}>
            <Button
              variant="contained"
              sx={{ borderRadius: "10px" }}
              style={{ color: "#d7b586" }}
            >
              NEW
            </Button>
          </Box>
          <Box sx={{ ml: 1.5 }}>
            <Button
              variant="contained"
              color={"secondary"}
              sx={{ borderRadius: "10px" }}
            >
              PRICE
            </Button>
          </Box>{" "}
          <Box sx={{ ml: 1.5 }}>
            <Button
              variant="contained"
              color={"secondary"}
              sx={{ borderRadius: "10px" }}
            >
              VIEWS
            </Button>
          </Box>
        </Stack>
        <Stack
          className="products-container"
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"flex-start"}
        >
          <Stack
            className="products-buttons"
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Box>
              <Button
                className="products-button"
                variant="contained"
                color={"primary"}
                sx={{ borderRadius: 3 }}
              >
                DISH
              </Button>
            </Box>
            <Box>
              <Button
                className="products-button"
                variant="contained"
                color={"secondary"}
                sx={{ borderRadius: 3 }}
              >
                SALAD
              </Button>
            </Box>
            <Box>
              <Button
                className="products-button"
                variant="contained"
                color={"primary"}
                sx={{ borderRadius: 3 }}
              >
                DRINK
              </Button>
            </Box>
            <Box>
              <Button
                className="products-button"
                variant="contained"
                color={"primary"}
                sx={{ borderRadius: 3 }}
              >
                DESSERT
              </Button>
            </Box>
            <Box>
              <Button
                className="products-button"
                variant="contained"
                color={"primary"}
                sx={{ borderRadius: 3 }}
              >
                OTHER
              </Button>
            </Box>
          </Stack>
          <Stack
            className="products-wrapper"
            flexDirection={"row"}
            flexWrap={"wrap"}
            justifyContent={"space-between"}
          >
            <CssVarsProvider>
              {products.length !== 0 ? (
                products.map((product, number) => {
                  return (
                    <Card
                      key={number}
                      className="custom-card"
                      variant="plain"
                      sx={{
                        minWidth: 273,
                        p: 0,
                        mb: 5,
                      }}
                    >
                      <Box sx={{ position: "relative" }}>
                        <Typography className="product-size">
                          LARGE size
                        </Typography>
                        <AspectRatio ratio="1">
                          <figure>
                            <img
                              src="https://images.unsplash.com/photo-1515825838458-f2a94b20105a?auto=format&fit=crop&w=300"
                              className="card-image"
                              srcSet={product.imagePath}
                              loading="lazy"
                              alt={product.productName}
                            />
                          </figure>
                        </AspectRatio>
                        <CardCover
                          sx={{
                            "&:hover, &:focus-within": {
                              opacity: 1,
                            },
                            opacity: 0,
                            transition: "0.1s ease-in",
                            background:
                              "linear-gradient(180deg,rgba(0,0,0,0.2))",
                          }}
                        >
                          <div>
                            <Box
                              sx={{
                                p: 2,
                                display: "flex",
                                flexGrow: 1,
                                alignItems: "center",
                                gap: 1.5,
                                alignSelf: "flex-end",
                              }}
                            >
                              <IconButton
                                size="md"
                                variant="solid"
                                sx={{
                                  px: 2,
                                  ml: "auto",
                                  bgcolor: "rgba(187, 47, 200, 0.78)",
                                  border: "1px solid rgb(227, 192, 141)",
                                }}
                              >
                                <ShoppingCartIcon />
                              </IconButton>
                              <Stack
                                alignItems={"center"}
                                justifyContent={"center"}
                                sx={{
                                  width: "40px",
                                  height: "40px",
                                  borderRadius: "50%",
                                  bgcolor: "rgba(0,0,0,0.5)",
                                }}
                              >
                                <Badge
                                  badgeContent={4}
                                  size="sm"
                                  sx={{
                                    "& .MuiBadge-badge": {
                                      bgcolor: "#D7B586",
                                      color: "white",
                                      width: "16px",
                                      height: "16px",
                                      border: "none",
                                      outline: "none",
                                      boxShadow: "none",
                                    },
                                  }}
                                >
                                  <VisibilityIcon sx={{ fontSize: "25px" }} />
                                </Badge>
                              </Stack>
                            </Box>
                          </div>
                        </CardCover>
                      </Box>
                      <Stack
                        sx={{ pt: 1, pb: "10px" }}
                        flexDirection={"column"}
                        alignItems={"center"}
                      >
                        <Typography
                          sx={{
                            fontSize: "20px",
                            fontWeight: "600",
                            color: "rgb(52, 52, 52)",
                            lineHeight: "30px",
                          }}
                        >
                          {product.productName}
                        </Typography>
                        <Box>
                          <Typography
                            display={"flex"}
                            flexDirection={"row"}
                            alignItems={"center"}
                            gap={"5px"}
                            justifyContent={"center"}
                            sx={{
                              fontSize: "24px",
                              fontWeight: 600,
                              lineHeight: "36px",
                              color: "#E3C08D",
                              mt: 1,
                            }}
                          >
                            <MonetizationOnSharpIcon
                              sx={{
                                color: "#EEA61E",
                              }}
                            />
                            14
                          </Typography>
                        </Box>
                      </Stack>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">New Products are not available</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
        <Stack
          className={"paginations"}
          flexDirection={"row"}
          alignItems={"center"}
          gap={"15px"}
          justifyContent={"center"}
          sx={{ mb: 6.5 }}
        >
          <Pagination
            sx={{
              "& .MuiButtonBase-root.Mui-selected": {
                bgcolor: "#C4080a",
                color: "#fff",
              },
              "& .MuiPaginationItem-root": {
                "&:hover": {
                  bgcolor: "#C4080a",
                  color: "#fff",
                },
              },
            }}
            count={3}
            renderItem={(item) => (
              <PaginationItem
                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                {...item}
              />
            )}
          />
        </Stack>
      </Container>
      <div className="family-brand-section">
        <Container className="family-brand-container">
          <Box className="family-brand-title">
            <Typography
              component={"h2"}
              textAlign={"center"}
              sx={{
                color: "rgb(227, 192, 141)",
                fontWeight: 700,
                fontFamily: "Roboto",
                fontSize: "36px",
                lineHeight: "42px",
                mb: "60px",
              }}
            >
              Our Family Brand
            </Typography>
          </Box>
          <Stack
            className="family-brand"
            flexDirection={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <CssVarsProvider>
              {brandPictures.map((picture) => {
                return (
                  <Card
                    className="card"
                    variant="soft"
                    sx={{
                      "& .MuiCardCover-root": {
                        boxShadow: "0 0 13px 5px rgba(251, 249, 249, 0.3)",
                        p: 1.5,
                      },
                      minWidth: "238px",
                      minHeight: "330px",
                      boxSizing: "border-box",
                      bgcolor: "#0D1518",
                    }}
                  >
                    <CardCover>
                      <img
                        src={picture.brandPath}
                        srcSet={picture.brandPath}
                        loading="lazy"
                        alt=""
                      />
                    </CardCover>
                  </Card>
                );
              })}
            </CssVarsProvider>
          </Stack>
        </Container>
      </div>
      <div className="products-map">
        <Container>
          <Stack
            className="maps-section"
            flexDirection={"column"}
            alignItems={"center"}
          >
            <Typography
              className="map-title"
              component={"h2"}
              sx={{
                color: "rgb(52, 52, 52)",
                fontFamily: "Roboto",
                fontSize: "36px",
                fontWeight: 600,
                lineHeight: "42px",
              }}
            >
              Our address
            </Typography>
            <iframe
              style={{
                marginTop: "40px",
                border: "none",
                borderRadius: "25px",
                boxShadow: "10px 10px 5px 0 rgba(0,0,0,0.3)",
              }}
              title="address"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.515463841977!2d28.980913675899956!3d41.0358554713466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab7644404e843%3A0xc06ddb94f43eebeb!2zS2F0aXAgTXVzdGFmYSDDh2VsZWJpLCDEsHN0aWtsYWwgQ2QuIE5vOjM5LCAzNDQzMyBCZXlvxJ9sdS_EsHN0YW5idWwsIO2KgOultO2CpOyYiA!5e0!3m2!1sko!2skr!4v1745916337720!5m2!1sko!2skr"
              width="100%"
              height="400"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Stack>
        </Container>
      </div>
    </div>
  );
}
