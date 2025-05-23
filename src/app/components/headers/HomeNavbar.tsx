import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";
import { useEffect, useState } from "react";
import { CartItem } from "../../../lib/types/search";

interface HomeNavbarProps {
  cartItems: CartItem[];
  onAdd: (item: CartItem) => void;
  onRemove: (item: CartItem) => void;
  onDelete: (item: CartItem) => void;
  onDeleteAll: () => void;
  setSignupOpen: (isOpen: boolean) => void;
  setLoginOpen: (isOpen: boolean) => void;
}
export default function HomeNavbar(props: HomeNavbarProps) {
  const {
    cartItems,
    onAdd,
    onRemove,
    onDelete,
    onDeleteAll,
    setLoginOpen,
    setSignupOpen,
  } = props;

  /*
   1. Run Once on Mount (like componentDidMount).
   UseCase:
   =>  Fetching data, set-up listeners. etc

   2. Run on Update (like componentDidUpdate);
   UseCase:
   => React to changes in props or state
   =>  Conditional logic after updates

   3. Run Cleanup on Unmount (like componentWillUnmount)
   UseCase:
   =>  Cleanup function runs when component unmounts,
   
  return () => {
    clearInterval(intervalId);
    console.log("Component unmounted, interval cleared");
  };



 ✅ Summary of useEffect Behavior:
 [] => 	Only once, after mount;
 [someState] => After mount + whenever someState changes 
return () => {...} => Cleanup function, runs before unmount or re-run of effect
 
✅ Notes:
=> Your component returns JSX → DOM updates.
=> Then useEffect() is triggered.
=> Then the browser paints the result (if needed).
   */

  const authMember = false;
  return (
    <div className="home-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img src="/icons/burak.svg" alt="" className="brand-logo" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className="hover-line">
              <NavLink to="/" activeClassName="underline">
                Home
              </NavLink>
            </Box>
            <Box className="hover-line">
              <NavLink to="/products" activeClassName="underline">
                Products
              </NavLink>
            </Box>
            {authMember ? (
              <Box className="hover-line">
                <NavLink
                  to="/orders"
                  className="hover-line"
                  activeClassName="underline"
                >
                  Orders
                </NavLink>
              </Box>
            ) : null}
            {authMember ? (
              <Box className="hover-line">
                <NavLink
                  to="/member-page"
                  className="hover-line"
                  activeClassName="underline"
                >
                  My Page
                </NavLink>
              </Box>
            ) : null}
            <Box className="hover-line">
              <NavLink to="/Help" activeClassName="underline">
                Help
              </NavLink>
            </Box>
            <Basket
              cartItems={cartItems}
              onAdd={onAdd}
              onRemove={onRemove}
              onDelete={onDelete}
              onDeleteAll={onDeleteAll}
            />
            {!authMember ? (
              <Box>
                <Button
                  variant="contained"
                  className="login-button"
                  onClick={() => setLoginOpen(true)}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img
                src="/icons/default-user.svg"
                alt="memberImage"
                className="user-avatar"
              />
            )}
          </Stack>
        </Stack>
        <Stack className="header-frame">
          <Stack className="details">
            <Box className="head-main-text">World's Most Delicous Cousine</Box>
            <Box className="wel-txt">The Choice, not just a choice</Box>
            <Box className="service-txt">24 hours service</Box>
            <Box className="signup">
              {!authMember ? (
                <Button
                  variant="contained"
                  className="signup-button"
                  onClick={() => setSignupOpen(true)}
                >
                  SIGNUP
                </Button>
              ) : null}
            </Box>
          </Stack>
          <Box className="logo-frame">
            <div className="logo-image"></div>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
