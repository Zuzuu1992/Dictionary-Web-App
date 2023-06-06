import React, { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import Logo from "../../public/assets/images/logo.svg";

function Header({
  listed,
  setListed,
  handleListed,
  dark,
  setDark,
  changeTheme,
  selectedFont,
  setSelectedFont,
  currentFont,
  setCurrentFont,
  font,
  setFont,
}) {
  const fontOptions = [
    { name: "Sans Serif", fontFamily: "Inter" },
    { name: "Serif", fontFamily: "Lora" },
    { name: "Mono", fontFamily: "Inconsolata" },
  ];

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <img
          src={Logo}
          alt="Logo"
          style={{
            "@media (minWidth: 768px)": {
              width: "32px",
            },
          }}
        />
      </Box>
      <Stack
        direction="row"
        alignItems="center"
        // spacing="12px"
        sx={{
          columnGap: { xs: "12px", md: "26px" },
        }}
      >
        <Stack
          onClick={handleListed}
          direction="row"
          alignItems="center"
          spacing="16px"
          sx={{
            position: "relative",
            cursor: "pointer",
            // columnGap: { xs: "16px", md: "26px" },
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "14px", md: "18px" },
              lineHeight: "24px",
              color: !dark ? "#2D2D2D" : "#FFFFFF",
              fontWeight: "700",
            }}
          >
            {currentFont}
          </Typography>
          <svg
            onClick={handleListed}
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
          {listed && (
            <Stack
              direction="column"
              sx={{
                rowGap: "10px",
                position: "absolute",
                top: "36px",
                right: "0",
                width: "160px",
                // height: "90px",
                padding: "24px",
                backgroundColor: !dark ? "#FFFFFF" : "#1F1F1F",
                borderRadius: "16px",
                boxShadow: !dark
                  ? "0px 5px 30px rgba(0, 0, 0, 0.1)"
                  : "0px 5px 30px #A445ED",
              }}
            >
              <Typography
                variant="body1"
                onClick={() => {
                  setFont("Inter");
                  setCurrentFont("Sans Serif");
                }}
                sx={{
                  fontSize: { xs: "14px", md: "18px" },
                  lineHeight: "24px",
                  color: !dark ? "#2D2D2D" : "#FFFFFF",
                  fontWeight: "700",
                  transition: "all 0.3s",
                  "&:hover": {
                    color: "#A445ED",
                  },
                }}
              >
                Sans Serif
              </Typography>
              <Typography
                variant="body1"
                onClick={() => {
                  setFont("Lora");
                  setCurrentFont("Serif");
                }}
                sx={{
                  fontSize: { xs: "14px", md: "18px" },
                  lineHeight: "24px",
                  color: !dark ? "#2D2D2D" : "#FFFFFF",
                  fontWeight: "700",
                  transition: "all 0.3s",
                  "&:hover": {
                    color: "#A445ED",
                  },
                }}
              >
                Serif
              </Typography>
              <Typography
                variant="body1"
                onClick={() => {
                  setFont("Inconsolata");
                  setCurrentFont("Mono");
                }}
                sx={{
                  fontSize: { xs: "14px", md: "18px" },
                  lineHeight: "24px",
                  color: !dark ? "#2D2D2D" : "#FFFFFF",
                  fontWeight: "700",
                  transition: "all 0.3s",
                  "&:hover": {
                    color: "#A445ED",
                  },
                }}
              >
                Mono
              </Typography>
            </Stack>
          )}
        </Stack>
        <Stack width="1px" height="32px" sx={{ bgcolor: "#E9E9E9" }}></Stack>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ columnGap: { xs: "12px", md: "20px" } }}
        >
          <Box
            onClick={changeTheme}
            sx={{
              display: "flex",
              justifyContent: !dark ? "flex-start" : "flex-end",
              width: "40px",
              height: "20px",
              borderRadius: "10px",
              backgroundColor: !dark ? "#757575" : "#A445ED",
              padding: "3px",
              cursor: "pointer",
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
              stroke={!dark ? "#838383" : "#A445ED"}
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
