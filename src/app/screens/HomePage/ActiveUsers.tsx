import React from "react";
import { Container } from "@mui/material";
import {
  AspectRatio,
  Box,
  Card,
  CardOverflow,
  CssVarsProvider,
  Stack,
  Typography,
} from "@mui/joy";
const activeUsers = [
  {
    memberNick: "Martin",
    memberImage: "/img/martin.webp",
  },
  {
    memberNick: "Justin",
    memberImage: "/img/justin.webp",
  },
  {
    memberNick: "Rose",
    memberImage: "/img/rose.webp",
  },
  {
    memberNick: "Nusret",
    memberImage: "/img/nusret.webp",
  },
];

export default function ActiveUsers() {
  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="active-users-section">
          <Box className="category-title">Active Users</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {activeUsers.length !== 0 ? (
                activeUsers.map((user, number) => {
                  return (
                    <Card className="card" key={number} variant="outlined">
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img
                            src={user.memberImage}
                            alt=""
                            className="user-image"
                          />
                        </AspectRatio>
                      </CardOverflow>
                      <CardOverflow variant="soft" className="card-details">
                        <Typography className="title">
                          {user.memberNick}
                        </Typography>
                      </CardOverflow>
                    </Card>
                  );
                })
              ) : (
                <Box className="no-data">No active users</Box>
              )}
            </CssVarsProvider>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
}
