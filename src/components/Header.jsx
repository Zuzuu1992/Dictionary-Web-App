import React from "react";
import { Box, Stack, Switch, Typography } from "@mui/material";
import Logo from "../../public/assets/images/logo.svg";

function Header() {
  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <img src={Logo} />
      </Box>
      <Stack direction="row" alignItems="center" spacing="12px">
        <Stack direction="row" alignItems="center" spacing="16px">
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              lineHeight: "24px",
              color: "#2D2D2D",
              fontWeight: "700",
            }}
          >
            Sans Serif
          </Typography>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="8"
            viewBox="0 0 14 8"
          >
            <path
              fill="none"
              stroke="#A445ED"
              strokeWidth="1.5"
              d="m1 1 6 6 6-6"
            />
          </svg>
        </Stack>
        <Stack
          width="1px"
          height="32px"
          sx={{ bgcolor: "#E9E9E9" }}
          //marginLeft: "15px", marginRight: "7px" }}
        ></Stack>
        <Stack direction="row" alignItems="center" spacing="12px">
          <Box
            sx={{
              width: "40px",
              height: "20px",
              borderRadius: "10px",
              backgroundColor: "#757575",
              padding: "3px",
            }}
          >
            <Box
              sx={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
              }}
            ></Box>
          </Box>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
          >
            <path
              fill="none"
              stroke="#838383"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
            />
          </svg>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;
