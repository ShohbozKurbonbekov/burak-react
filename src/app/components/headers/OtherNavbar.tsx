import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Basket from "./Basket";

export default function OtherNavbar() {
  const authMember = null;

  return (
    <div className="other-navbar">
      <Container className="navbar-container">
        <Stack className="menu">
          <Box>
            <NavLink to="/">
              <img src="/icons/burak.svg" alt="" className="brand-logo" />
            </NavLink>
          </Box>
          <Stack className="links">
            <Box className="hover-line">
              <NavLink to="/">Home</NavLink>
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
            <Basket />
            {!authMember ? (
              <Box>
                <Button variant="contained" className="login-button">
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
      </Container>
    </div>
  );
}
