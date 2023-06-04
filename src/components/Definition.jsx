import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Play from "../../public/assets/images/icon-play.svg";
import "./DefinitionStyle.css";
import NewW from "../../public/assets/images/icon-new-window.svg";

function Definition({ currentFont, setCurrentFont, dark, setDark }) {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{ marginBottom: "29px" }}
      >
        <Stack direction="column" spacing="8px">
          <Typography
            variant="body1"
            sx={{
              fontWeight: "700",
              fontSize: "32px",
              lineHeight: "39px",
              color: !dark ? "#2D2D2D" : "#FFFFFF",
            }}
          >
            memo
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "24px",
              color: "#A445ED",
            }}
          >
            gemo
          </Typography>
        </Stack>
        <img className="play-icon" src={Play} />
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing="16px"
        sx={{ marginBottom: "31px" }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22px",
            color: !dark ? "#2D2D2D" : "#FFFFFF",
            fontStyle: "italic",
          }}
        >
          temo
        </Typography>
        <Box
          sx={{
            height: "1px",
            flexGrow: "1",
            backgroundColor: !dark ? "#E9E9E9" : "#3A3A3A",
          }}
        ></Box>
      </Stack>
      <Stack>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            color: " #757575",
            marginBottom: "17px",
          }}
        >
          tritri
        </Typography>
        <Stack
          direction="row"
          alignItems="flex-start"
          sx={{ columnGap: "20px" }}
        >
          <Box
            sx={{
              width: "5px",
              height: "5px",
              backgroundColor: "#8F19E8",
              borderRadius: "50%",
              flexShrink: 0,
              marginTop: "12px",
            }}
          ></Box>

          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "24px",
              color: !dark ? "#2D2D2D" : "#FFFFFF",
              textAlign: "left",
              alignSelf: "flex-start",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            perspiciatis officia nam dicta beatae excepturi debitis
          </Typography>
        </Stack>

        <Stack
          direction="row"
          spacing="24px"
          alignItems="center"
          sx={{ marginTop: "17px" }}
        >
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "16px",
              lineHeight: "19px",
              color: " #757575",
            }}
          >
            metri
          </Typography>
          <Typography
            sx={{
              fontWeight: "700",
              fontSize: "16px",
              lineHeight: "19px",
              color: "#A445ED",
            }}
          >
            nilks
          </Typography>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        spacing="16px"
        sx={{ marginTop: "31px" }}
      >
        <Typography
          sx={{
            fontWeight: "700",
            fontSize: "18px",
            lineHeight: "22px",
            color: !dark ? "#2D2D2D" : "#FFFFFF",
            fontStyle: "italic",
          }}
        >
          temo
        </Typography>
        <Box
          sx={{
            height: "1px",
            flexGrow: "1",
            backgroundColor: !dark ? "#E9E9E9" : "#3A3A3A",
          }}
        ></Box>
      </Stack>
      <Stack>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "19px",
            color: " #757575",
            marginTop: "17px",
            marginBottom: "17px",
          }}
        >
          tritri
        </Typography>
        <Stack
          direction="row"
          alignItems="flex-start"
          sx={{ columnGap: "20px" }}
        >
          <Box
            sx={{
              width: "5px",
              height: "5px",
              backgroundColor: "#8F19E8",
              borderRadius: "50%",
              flexShrink: 0,
              marginTop: "12px",
            }}
          ></Box>

          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "24px",
              color: !dark ? "#2D2D2D" : "#FFFFFF",
              textAlign: "left",
              alignSelf: "flex-start",
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            provident aliquid dignissimos
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          height: "1px",
          flexGrow: "1",
          backgroundColor: !dark ? "#E9E9E9" : "#3A3A3A",
          marginTop: "32px",
        }}
      ></Box>
      <Stack direction="column" spacing="7px" sx={{ marginTop: "24px" }}>
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "17px",
            color: "#757575",
            textDecorationLine: "underline",
          }}
        >
          Source
        </Typography>
        <Stack direction="row" spacing="9px">
          <a
            href="https://en.wiktionary.org/wiki/word"
            style={{ color: !dark ? "#2d2d2d" : "#FFFFFF" }}
          >
            https://en.wiktionary.org/wiki/word
          </a>
          <img src={NewW} />
        </Stack>
      </Stack>
    </>
  );
}

export default Definition;
