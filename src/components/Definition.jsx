import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Play from "../../public/assets/images/icon-play.svg";
import "./DefinitionStyle.css";
import NewW from "../../public/assets/images/icon-new-window.svg";

function Definition({ currentFont, setCurrentFont }) {
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
              color: "#2D2D2D",
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
            color: "#2D2D2D",
            fontStyle: "italic",
          }}
        >
          temo
        </Typography>
        <Box
          sx={{
            height: "1px",
            // width: "100%",
            flexGrow: "1",
            backgroundColor: "#E9E9E9",
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
          alignItems="center"
          // justifyContent="space-between"
          sx={{ columnGap: "20px" }}
        >
          <Box
            sx={{
              width: "5px",
              height: "5px",
              backgroundColor: "#8F19E8",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          ></Box>

          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "24px",
              color: "#2D2D2D",
              textAlign: "left",
              alignSelf: "flex-start",
            }}
          >
            lore ipsum
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
            color: "#2D2D2D",
            fontStyle: "italic",
          }}
        >
          temo
        </Typography>
        <Box
          sx={{
            height: "1px",
            // width: "100%",
            flexGrow: "1",
            backgroundColor: "#E9E9E9",
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
          alignItems="center"
          // justifyContent="space-between"
          sx={{ columnGap: "20px" }}
        >
          <Box
            sx={{
              width: "5px",
              height: "5px",
              backgroundColor: "#8F19E8",
              borderRadius: "50%",
              flexShrink: 0,
            }}
          ></Box>

          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "15px",
              lineHeight: "24px",
              color: "#2D2D2D",
              textAlign: "left",
              alignSelf: "flex-start",
            }}
          >
            lore ipsum
          </Typography>
        </Stack>
      </Stack>
      <Box
        sx={{
          height: "1px",
          // width: "100%",
          flexGrow: "1",
          backgroundColor: "#E9E9E9",
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
          <a href="https://en.wiktionary.org/wiki/word">
            https://en.wiktionary.org/wiki/word
          </a>
          <img src={NewW} />
        </Stack>
      </Stack>
    </>
  );
}

export default Definition;
