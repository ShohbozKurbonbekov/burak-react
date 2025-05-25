import { Badge, Box, Stack } from "@mui/material";
import { Container, Tab, Tabs } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import { SyntheticEvent, useState } from "react";
import PausedOrders from "./PausedOrders";
import ProcessOrders from "./ProcessOrders";
import FinishedOrders from "./FinishedOrders";
import * as React from "react";
import { styled } from "@mui/material/styles";

import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import "../../../css/order.css";
import TextField from "@mui/material/TextField";
import { Dispatch } from "@reduxjs/toolkit";
import { setFinishedOrder, setPausedOrders, setProcessOrders } from "./slice";
import { Order } from "../../../lib/types/order";
import { useDispatch } from "react-redux";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

// REDUX SETUP - SLICE AND SELECTOR
const actionDispatch = (dispatch: Dispatch) => ({
  setPausedOrders: (data: Order[]) => dispatch(setPausedOrders(data)),
  setProcessOrders: (data: Order[]) => dispatch(setProcessOrders(data)),
  setFinishedOrder: (data: Order[]) => dispatch(setFinishedOrder(data)),
});

export default function OrdersPage() {
  const { setPausedOrders, setProcessOrders, setFinishedOrder } =
    actionDispatch(useDispatch());

  const [newValue, setValue] = useState("1");
  const [card, setCard] = React.useState("Card number : 5243 4090 2002 7495");
  const [year, setYear] = React.useState("7 /24");
  const [cardCode, setCardCode] = React.useState("CVV : 010");
  const [owner, setOwner] = React.useState("Daniel RadCliffe");

  const handleChange = (e: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="order-page">
      <Container
        className="order-container"
        sx={{
          display: "grid",
          gridTemplateColumns: "2.7fr 1.3fr",
          gap: 3,
          mb: 10,
        }}
      >
        <Stack sx={{ mt: 3, mb: 2 }}>
          <TabContext value={newValue}>
            <Box className="order-nav-frame" sx={{ mb: 2 }}>
              <Box
                sx={{ borderBottom: 1, borderColor: "divider", width: "80%" }}
              >
                <Tabs
                  value={newValue}
                  onChange={handleChange}
                  sx={{
                    "& .MuiTabs-list": {
                      justifyContent: "space-between",
                    },
                  }}
                  aria-label="basic tab example"
                >
                  <Tab label="Paused orders" value={"1"} />
                  <Tab label="Process Orders" value={"2"} />
                  <Tab label="Finished Orders" value={"3"} />
                </Tabs>
              </Box>
            </Box>
            <Stack className="order-main-content">
              <PausedOrders />
              <ProcessOrders />
              <FinishedOrders />
            </Stack>
          </TabContext>
        </Stack>
        <Stack
          sx={{ pt: 8 }}
          flexDirection={"column"}
          alignItems={"flex-start"}
        >
          <Box
            sx={{
              py: "29px",

              width: "100%",
              height: "auto",
              mt: 6,
              px: 2,
              boxShadow:
                "inset 0px 0px 4px 5px rgba(0,0,0,0.4), 4px 4px 3px rgba(0,0,0,0.3)",
              borderRadius: "40px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Badge
                className="my-Avatar"
                sx={{
                  "& .MuiAvatar-root.MuiAvatar-circular": {
                    width: "117px",
                    height: "112px",
                    borderRadius: "30px",
                    boxShadow: "0 4px 2px 0 rgba(0,0,0,0.4)",
                  },
                }}
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                badgeContent={
                  <SmallAvatar
                    alt="Remy Sharp"
                    sx={{
                      width: "40px !important",
                      height: "40px !important",
                      bgcolor: "rgba(0,0,0,0.4)",
                      bottom: "-20%",
                      right: "-20%",
                      border: "transparent !important",
                    }}
                    src="	http://localhost:3000/icons/default-user.svg"
                  />
                }
              >
                <Avatar alt="Justin" src="/img/justin.webp" />
              </Badge>

              <Typography
                component="h3"
                sx={{
                  color: "rgb(8, 9, 13)",
                  fontFamily: "Commissioner",
                  fontSize: "28px",
                  mb: "0px !important",
                  fontWeight: "500",
                }}
              >
                Justin
              </Typography>
              <Typography
                component="p"
                sx={{
                  color: "rgb(161, 161, 161)",
                  fontFamily: "Commissioner",
                  fontWeight: "500",
                  fontSize: "20px",
                }}
              >
                USER
              </Typography>
            </Box>
            <div
              style={{
                border: "2px solid   rgb(161, 161, 161)",
                width: "93%",
                margin: "10px auto ",
              }}
            ></div>
            <Box display={"flex"} gap={"10px"} alignItems={"center"}>
              <img
                src="/icons/location.svg"
                alt="location"
                style={{ marginLeft: "20px", width: "23px", height: "23px" }}
              />
              <Typography
                component={"h3"}
                sx={{
                  color: "black",
                  fontFamily: "DM Sans",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                South Korea, Busan
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              py: "29px",

              width: "100%",
              height: "auto",
              mt: 6,
              px: 2,
              boxShadow:
                "inset 0px 0px 4px 5px rgba(0,0,0,0.4), 4px 4px 3px rgba(0,0,0,0.3)",
              borderRadius: "40px",
            }}
          >
            <Box
              component="form"
              sx={{ "& > :not(style)": { mt: 1, width: "100%" } }}
              noValidate
              autoComplete="on"
            >
              <Box>
                <TextField
                  id="outlined-controlled"
                  label="Card Number"
                  value={card}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setCard(event.target.value);
                  }}
                  sx={{ width: "100% !important" }}
                />
              </Box>
              <Box
                flexDirection={"row"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-between"}
                mt={"20px !important"}
              >
                <TextField
                  id="outlined-controlled"
                  label="Valid Year"
                  value={year}
                  sx={{ width: "47% !important" }}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setYear(event.target.value);
                  }}
                />
                <TextField
                  id="outlined-controlled"
                  label="Card Code"
                  value={cardCode}
                  sx={{ width: "47% !important" }}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setCardCode(event.target.value);
                  }}
                />
              </Box>
              <Box mt={"20px !important"}>
                <TextField
                  id="outlined-controlled"
                  label="Name"
                  value={owner}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setOwner(event.target.value);
                  }}
                  sx={{ width: "100% !important" }}
                />
              </Box>
            </Box>

            <Box mt={"50px"}>
              <Box
                display={"flex"}
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={"15px"}
              >
                <span>
                  <img src="/icons/western-card.svg" alt="" />
                </span>
                <span>
                  <img src="/icons/master-card.svg" alt="" />
                </span>
                <span>
                  <img
                    src="/icons/paypal-card.svg
                  "
                    alt=""
                  />
                </span>
                <span>
                  <img src="/icons/visa-card.svg" alt="" />
                </span>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
