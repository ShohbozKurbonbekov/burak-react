import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function HomeNavbar() {
  const authMember = false;
  return (
    <div className="home-navbar">
      <Container
        sx={{ mt: "52px", height: "642px" }}
        className="navbar-container"
      >
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
                aria-haspopup="true"
                className="user-avatar"
              />
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
