import { Box, Button, Container, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function HomeNavbar() {
  const authMember = null;
  return (
    <div className="home-navbar">
      <Container sx={{ mt: "52px", height: "642px" }}>
        <Stack
          sx={{ height: "50px" }}
          flexDirection={"row"}
          justifyContent={"space-between"}
          alignItems={"center"}
        >
          <Box>
            <NavLink to="/">
              <img
                style={{ width: "125px", height: "30px" }}
                src="/icons/burak.svg"
                alt=""
              />
            </NavLink>
          </Box>
          <Stack
            flexDirection={"row"}
            minWidth={"700px"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
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
                <Button
                  variant="contained"
                  style={{ backgroundColor: "#3776CC", color: "#f8f8ff" }}
                >
                  Login
                </Button>
              </Box>
            ) : (
              <img src="" alt="memberImage" />
            )}
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
