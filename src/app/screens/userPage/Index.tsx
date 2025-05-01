import {
  Avatar,
  Badge,
  Box,
  Button,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import TextField from "@mui/material/TextField";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function UserPage() {
  return (
    <div className="user-page">
      <Container
        sx={{
          display: "grid",
          alignItems: "flex-start",
          justifyContent: "space-between",
          marginTop: "40px",
          gridTemplateColumns: "2.6fr 1.4fr",
          gap: "80px",
        }}
      >
        <Stack my={"80px"}>
          <Box
            display={"flex"}
            alignItems={"center"}
            justifyContent={"flex-start"}
            gap="20px"
          >
            <Avatar
              alt="Remy Sharp"
              src="/img/justin.webp"
              sx={{ width: "100px", height: "100px" }}
            />

            <Box flexDirection={"column"} gap="25px" alignItems={"flex-start"}>
              <Typography
                component="h5"
                sx={{
                  color: "rgb(20,3,66)",
                  fontFamily: "Poppins",
                  fontSize: "16px",
                  fontWeight: "600",
                  lineHeight: "24px",
                }}
              >
                Upload an image
              </Typography>
              <Typography
                component="h5"
                sx={{
                  color: " rgb(79, 84, 123))",
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "21px",
                }}
              >
                JPG, JPEG, PNG format only!
              </Typography>
              <Avatar variant="rounded" sx={{ mt: "5px", cursor: "pointer" }}>
                <CloudDownloadIcon
                  sx={{
                    width: "25px",
                    height: "25px",
                    color: "#000",
                  }}
                />
              </Avatar>
            </Box>
          </Box>
          <Stack sx={{ mt: "70px" }} flexDirection={"column"} gap={"25px"}>
            <Box
              className="name-input"
              sx={{
                width: "100%",
                "& .MuiFormLabel-root": {
                  color: "rgba(0,0,0,0.5)",
                  fontWeight: 500,
                },
                "& .MuiFormControl-root.MuiFormControl-fullWidth": {
                  bgcolor: "#F6F6F6",
                  boxShadow: "2px 2px 5px 0 rgba(0,0,0,0.25)",
                },
              }}
            >
              <TextField fullWidth label="Name" id="fullWidth" />
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Box
                className="name-input"
                sx={{
                  width: "48%",
                  "& .MuiFormLabel-root": {
                    color: "rgba(0,0,0,0.5)",
                    fontWeight: 500,
                  },
                  "& .MuiFormControl-root.MuiFormControl-fullWidth": {
                    bgcolor: "#F6F6F6",
                    boxShadow: "2px 2px 5px 0 rgba(0,0,0,0.25)",
                  },
                }}
              >
                <TextField fullWidth label="Phone Number" id="fullWidth" />
              </Box>
              <Box
                className="name-input"
                sx={{
                  width: "48%",
                  "& .MuiFormLabel-root": {
                    color: "rgba(0,0,0,0.5)",
                    fontWeight: 500,
                  },
                  "& .MuiFormControl-root.MuiFormControl-fullWidth": {
                    bgcolor: "#F6F6F6",
                    boxShadow: "2px 2px 5px 0 rgba(0,0,0,0.25)",
                  },
                }}
              >
                <TextField fullWidth label="Address" id="fullWidth" />
              </Box>
            </Box>

            <Box
              className="name-input"
              sx={{
                width: "100%",
                "& .MuiFormLabel-root": {
                  color: "rgba(0,0,0,0.5)",
                },
                "& .MuiInputBase-input.MuiOutlinedInput-input": {
                  color: "rgba(0,0,0,0.5)",
                  fontWeight: 500,
                  bgcolor: "#F6F6F6",
                  boxShadow: "2px 2px 5px 0 rgba(0,0,0,0.25)",
                  height: "100px",
                },
                "& .MuiFormControl-root.MuiFormControl-fullWidth": {
                  color: "#fff",
                },
              }}
            >
              <TextField fullWidth label="For more" id="fullWidth" />
            </Box>
            <Box sx={{ textAlign: "end" }}>
              <Button variant="contained" color="primary">
                Save
              </Button>
            </Box>
          </Stack>
        </Stack>
        <Stack>
          <Box
            sx={{
              py: "29px",
              width: "100%",
              height: "auto",
              mt: 2,
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

            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Typography
                component={"h3"}
                sx={{
                  color: " rgb(161, 161, 161)",
                  fontFamily: "DM Sans",
                  fontWeight: "400",
                  fontSize: "16px",
                  lineHeight: "24px",
                }}
              >
                South Korea, Busan
              </Typography>
            </Box>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              gap={"15px"}
              mt={"40px"}
              sx={{ cursor: "pointer" }}
            >
              <img src="/icons/instagram.svg" alt="" />
              <img src="/icons/twitter.svg" alt="" />
              <img src="/icons/youtube.svg" alt="" />
            </Box>
            <Typography
              component={"p"}
              sx={{
                textAlign: "center",
                fontSize: "16px",
                color: "rgb(97, 97, 100)",
                lineHeight: "24px",
                fontWeight: "400",
                fontFamily: "DM Sans",
                mt: "10px",
              }}
            >
              The best man
            </Typography>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
