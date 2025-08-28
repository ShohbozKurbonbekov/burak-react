import React, { useEffect } from "react";
import { Container, Stack, Box } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Divider from "../../components/divider";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper";
import { Dispatch } from "@reduxjs/toolkit";
import { setChosenProduct, setRestaurant } from "./slice";
import { Product } from "../../../lib/types/product";
import { createSelector } from "reselect";
import { retrieveChosenProduct, retrieveRestaurant } from "./selector";
import { Member } from "../../../lib/types/member";
import { useParams } from "react-router-dom";
import ProductService from "../../services/ProductService";
import { useDispatch, useSelector } from "react-redux";
import { serverApi } from "../../../lib/config";
import MemberService from "../../services/MemberService";
import { CartItem } from "../../../lib/types/search";

const actionDispatch = (dispatch: Dispatch) => ({
  setChosenProduct: (data: Product) => dispatch(setChosenProduct(data)),
  setRestaurant: (data: Member) => dispatch(setRestaurant(data)),
});

const chosenProductRetriever = createSelector(
  retrieveChosenProduct,
  (chosenProduct) => ({
    chosenProduct,
  })
);

const restaurantRetriever = createSelector(
  retrieveRestaurant,
  (restaurant) => ({
    restaurant,
  })
);

interface ChosenProductProps {
  onAdd: (item: CartItem) => void;
}

export default function ChosenProduct(props: ChosenProductProps) {
  const { setChosenProduct, setRestaurant } = actionDispatch(useDispatch());
  const { chosenProduct } = useSelector(chosenProductRetriever);
  const { restaurant } = useSelector(restaurantRetriever);
  const { productId } = useParams<{ productId: string }>();
  const { onAdd } = props;

  useEffect(() => {
    const product = new ProductService();
    const restaurant = new MemberService();
    product
      .getProduct(productId)
      .then((data) => {
        setChosenProduct(data);
      })
      .catch((error) => {
        console.log(error);
      });

    restaurant
      .getRestaurant()
      .then((data) => {
        setRestaurant(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!chosenProduct) return null;

  return (
    <div className={"chosen-product"}>
      <Box className={"title"}>Product Detail</Box>
      <Container className={"product-container"}>
        <Stack className={"chosen-product-slider"}>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="swiper-area"
          >
            {chosenProduct?.productImages.map((ele: string) => {
              const imagePath = `${serverApi}/${ele}`;
              return (
                <SwiperSlide key={chosenProduct._id}>
                  <img
                    className="slider-image"
                    src={imagePath}
                    alt={chosenProduct.productName}
                  />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Stack>
        <Stack className={"chosen-product-info"}>
          <Box className={"info-box"}>
            <strong className={"product-name"}>
              {chosenProduct?.productName}
            </strong>
            <span className={"resto-name"}>
              {restaurant?.memberNick} {restaurant?.memberType}
            </span>
            <span className={"resto-name"}>{restaurant?.memberPhone}</span>
            <Box className={"rating-box"}>
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
              <div className={"evaluation-box"}>
                <div className={"product-view"}>
                  <RemoveRedEyeIcon sx={{ mr: "10px" }} />
                  <span>{chosenProduct?.productViews}</span>
                </div>
              </div>
            </Box>
            <p className={"product-desc"}>
              {chosenProduct?.productDescription
                ? chosenProduct?.productDescription
                : "No description"}
            </p>
            <Divider height="1" width="100%" bg="#000000" />
            <div className={"product-price"}>
              <span>Price:</span>
              <span>${chosenProduct?.productPrice}</span>
            </div>
            <div className={"button-box"}>
              <Button
                variant="contained"
                onClick={(e) => {
                  e.stopPropagation();

                  onAdd({
                    _id: chosenProduct._id,
                    quantity: 1,
                    name: chosenProduct.productName,
                    price: chosenProduct.productPrice,
                    image: chosenProduct.productImages[0],
                  });
                }}
              >
                Add To Basket
              </Button>
            </div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
