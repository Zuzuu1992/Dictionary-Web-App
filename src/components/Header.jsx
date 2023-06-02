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
}) {
  const fontOptions = [
    { name: "Sans Serif", fontFamily: "Inter" },
    { name: "Serif", fontFamily: "Lora" },
    { name: "Mono", fontFamily: "Inconsolata" },
  ];

  return (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <Box>
        <img src={Logo} />
      </Box>
      <Stack direction="row" alignItems="center" spacing="12px">
        <Stack
          onClick={handleListed}
          direction="row"
          alignItems="center"
          spacing="16px"
          sx={{ position: "relative", cursor: "pointer" }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: "14px",
              lineHeight: "24px",
              color: "#2D2D2D",
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
                backgroundColor: "#FFFFFF",
                borderRadius: "16px",
                boxShadow: "0px 5px 30px rgba(0, 0, 0, 0.1)",
              }}
            >
              {fontOptions.map((option) => {
                return (
                  <Typography
                    variant="body1"
                    onClick={() => {
                      setSelectedFont(option.fontFamily);
                      setCurrentFont(option.name);
                    }}
                    key={option.name}
                    sx={{
                      fontFamily:
                        currentFont === "Sans Serif"
                          ? "'Inter', sans-serif"
                          : currentFont === "Serif"
                          ? "'Lora', serif"
                          : currentFont === "Mono"
                          ? "'Inconsolata', monospace"
                          : null,
                      fontSize: "14px",
                      lineHeight: "24px",
                      color: "#2D2D2D",
                      fontWeight: "700",
                      transition: "all 0.3s",
                      "&:hover": {
                        color: "#A445ED",
                      },
                    }}
                  >
                    {option.name}
                  </Typography>
                );
              })}
            </Stack>
          )}
        </Stack>
        <Stack width="1px" height="32px" sx={{ bgcolor: "#E9E9E9" }}></Stack>
        <Stack direction="row" alignItems="center" spacing="12px">
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
