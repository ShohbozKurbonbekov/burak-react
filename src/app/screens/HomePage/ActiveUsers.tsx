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

import { useSelector } from "react-redux";
import { createSelector } from "reselect";
import { retrieveTopUsers } from "./selector";
import { serverApi } from "../../../lib/config";
import { Member } from "../../../lib/types/member";

const topUsersRetriever = createSelector(retrieveTopUsers, (topUsers) => ({
  topUsers,
}));

export default function ActiveUsers() {
  const { topUsers } = useSelector(topUsersRetriever);

  return (
    <div className="active-users-frame">
      <Container>
        <Stack className="active-users-section">
          <Box className="category-title">Active Users</Box>
          <Stack className="cards-frame">
            <CssVarsProvider>
              {topUsers.length !== 0 ? (
                topUsers.map((user: Member) => {
                  const imagePath = `${serverApi}/${user.memberImage}`;
                  return (
                    <Card className="card" key={user._id} variant="outlined">
                      <CardOverflow>
                        <AspectRatio ratio="1">
                          <img src={imagePath} alt="" className="user-image" />
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
