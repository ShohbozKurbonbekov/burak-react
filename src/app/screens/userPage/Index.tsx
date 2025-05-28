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
import { useGlobals } from "../../hooks/useGlobals";
import { useHistory } from "react-router-dom";
import { MemberType } from "../../../lib/enums/member.enum";
import { Messages, serverApi } from "../../../lib/config";
import { MemberUpdateInput } from "../../../lib/types/member";
import { useState } from "react";
import { T } from "../../../lib/types/common";
import {
  sweetErrorHandling,
  sweetTopSmallSuccessAlert,
} from "../../../lib/sweetAlert";
import MemberService from "../../services/MemberService";

const SmallAvatar = styled(Avatar)(({ theme }) => ({
  width: 22,
  height: 22,
  border: `2px solid ${theme.palette.background.paper}`,
}));

export default function UserPage() {
  const { authMember, setAuthMember } = useGlobals();
  const [memberUpdateInput, setMemberUpdateInput] = useState<MemberUpdateInput>(
    {
      memberNick: authMember?.memberNick,
      memberPhone: authMember?.memberPhone,
      memberAddress: authMember?.memberAddress,
      memberDescription: authMember?.memberDescription,
      memberImage: authMember?.memberImage,
    }
  );

  const [memberImage, setMemberImage] = useState<string>(
    authMember?.memberImage
      ? `${serverApi}/${authMember.memberImage}`
      : "/icons/default-user.svg"
  );
  const history = useHistory();
  if (!authMember) history.push("/");

  // HANDLERS
  const memberNickHandler = (e: T) => {
    memberUpdateInput.memberNick = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberPhoneHandler = (e: T) => {
    memberUpdateInput.memberPhone = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const memberAddressHandler = (e: T) => {
    memberUpdateInput.memberAddress = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };
  const memberDescriptionHandler = (e: T) => {
    memberUpdateInput.memberDescription = e.target.value;
    setMemberUpdateInput({ ...memberUpdateInput });
  };

  const handleSaveButton = async () => {
    try {
      if (!authMember) throw new Error(Messages.error2);
      console.log(memberUpdateInput);
      if (
        memberUpdateInput.memberNick === "" ||
        memberUpdateInput.memberPhone === "" ||
        memberUpdateInput.memberAddress === "" ||
        memberUpdateInput.memberDescription === ""
      ) {
        throw new Error(Messages.error3);
      }

      const member = new MemberService();
      const data = await member.updateMember(memberUpdateInput);
      setAuthMember(data);

      await sweetTopSmallSuccessAlert("Modified successfully!", 700);
      console.log("data", data);
    } catch (error) {
      console.log(error);
      sweetErrorHandling(error).then();
    }
  };

  const handleImageViewer = (e: T) => {
    const file = e.target.files[0];
    const fileType = file.type;

    const validateImageTypes = ["image/jpg", "image/jpeg", "image/png"];

    if (!validateImageTypes.includes(fileType)) {
      sweetErrorHandling(Messages.error5).then();
    } else {
      if (file) {
        memberUpdateInput.memberImage = file;
        setMemberUpdateInput({ ...memberUpdateInput });
        setMemberImage(URL.createObjectURL(file));
      }
    }
  };

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
              src={memberImage}
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
                <Button component="label" onChange={handleImageViewer}>
                  <CloudDownloadIcon
                    sx={{
                      width: "25px",
                      height: "25px",
                      color: "#000",
                    }}
                  />
                  <input type="file" hidden />
                </Button>
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
              <TextField
                fullWidth
                label="Name"
                placeholder={authMember?.memberNick}
                id="fullWidth"
                value={memberUpdateInput.memberNick}
                onChange={memberNickHandler}
              />
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
                <TextField
                  fullWidth
                  label="Phone Number"
                  placeholder={authMember?.memberPhone}
                  id="fullWidth"
                  value={memberUpdateInput.memberPhone}
                  onChange={memberPhoneHandler}
                />
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
                <TextField
                  fullWidth
                  label="Address"
                  id="fullWidth"
                  placeholder={
                    authMember?.memberAddress
                      ? authMember.memberAddress
                      : "no address"
                  }
                  value={memberUpdateInput.memberAddress}
                  onChange={memberAddressHandler}
                />
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
              <TextField
                fullWidth
                label="For more"
                id="fullWidth"
                placeholder={
                  authMember?.memberDescription
                    ? authMember.memberDescription
                    : "no description"
                }
                value={memberUpdateInput.memberDescription}
                onChange={memberDescriptionHandler}
              />
            </Box>
            <Box sx={{ textAlign: "end" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSaveButton}
              >
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
                    src={
                      authMember?.memberType === MemberType.RESTAURANT
                        ? `/icons/restaurant.svg`
                        : `/icons/user-badge.svg`
                    }
                  />
                }
              >
                <Avatar
                  alt={authMember?.memberNick}
                  src={
                    authMember?.memberImage
                      ? `${serverApi}/${authMember.memberImage}`
                      : "/icons/default-user.svg"
                  }
                />
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
                {authMember?.memberNick}
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
                {authMember?.memberType}
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
                {authMember?.memberAddress
                  ? `${authMember.memberAddress}`
                  : "no address provided"}
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
              <img src="/icons/instagram.svg" alt="instagram" />
              <img src="/icons/twitter.svg" alt="twitter" />
              <img src="/icons/youtube.svg" alt="youtube" />
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
              {authMember?.memberDescription
                ? `${authMember.memberDescription}`
                : "no description"}
            </Typography>
          </Box>
        </Stack>
      </Container>
    </div>
  );
}
