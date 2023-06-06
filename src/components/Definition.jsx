import { useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Play from "../../public/assets/images/icon-play.svg";
import "./DefinitionStyle.css";
import NewW from "../../public/assets/images/icon-new-window.svg";

function Definition({
  currentFont,
  setCurrentFont,
  dark,
  setDark,
  outcome,
  setOutcome,
}) {
  // const { word, phonetics, meanings } = outcome;

  const voice = outcome
    ?.map((item) =>
      item.phonetics
        .map((phonetic) => phonetic.audio)
        .filter((audio) => audio != "")
    )
    .flat();
  // console.log(voice);

  const audioRef = useRef(null);

  const handleImageClick = () => {
    audioRef.current.play();
  };

  // console.log(outcome);
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
            {outcome[0].word}
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
            {outcome[0].phonetics[0].text}
          </Typography>
        </Stack>
        <Stack>
          <img className="play-icon" src={Play} onClick={handleImageClick} />
          <audio ref={audioRef} src={voice[0]} />
        </Stack>
      </Stack>
      {outcome.length > 1
        ? outcome.map((each, index) => (
            <>
              <Stack
                direction="row"
                alignItems="center"
                spacing="16px"
                sx={{ marginBottom: "31px" }}
              >
                {each.meanings[0] && (
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "18px",
                      lineHeight: "22px",
                      color: !dark ? "#2D2D2D" : "#FFFFFF",
                      fontStyle: "italic",
                    }}
                  >
                    {each.meanings[0].partOfSpeech}
                  </Typography>
                )}
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
                    marginBottom: "5px",
                  }}
                >
                  Meaning
                </Typography>
                {each.meanings[0] &&
                  each.meanings[0].definitions.map((definition, index) => (
                    <Stack
                      key={Math.random()}
                      direction="column"
                      spacing="13px"
                    >
                      <Stack
                        direction="row"
                        alignItems="flex-start"
                        sx={{ columnGap: "20px", paddingTop: "13px" }}
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
                          key={index}
                          sx={{
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "24px",
                            color: !dark ? "#2D2D2D" : "#FFFFFF",
                            textAlign: "left",
                            alignSelf: "flex-start",
                          }}
                        >
                          {definition.definition}
                        </Typography>
                      </Stack>
                      {definition.example && (
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "24px",
                            color: "#757575",
                            paddingLeft: "25px",
                          }}
                        >
                          "{definition.example}"
                        </Typography>
                      )}
                    </Stack>
                  ))}
                <Stack
                  direction="row"
                  spacing="24px"
                  alignItems="flex-start"
                  sx={{ marginTop: "17px", marginBottom: "33px" }}
                >
                  <Typography
                    sx={{
                      fontWeight: "400",
                      fontSize: "16px",
                      lineHeight: "19px",
                      color: " #757575",
                    }}
                  >
                    Synonyms
                  </Typography>
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    sx={{ rowGap: "10px", columnGap: "20px" }}
                  >
                    {each.meanings[0].synonyms &&
                      each.meanings[0].synonyms.length > 0 &&
                      each.meanings[0].synonyms.map((synonym, index) => (
                        <Typography
                          key={index}
                          sx={{
                            fontWeight: "700",
                            fontSize: "16px",
                            lineHeight: "19px",
                            color: "#A445ED",
                          }}
                        >
                          {synonym}
                        </Typography>
                      ))}
                  </Stack>
                </Stack>
              </Stack>
            </>
          ))
        : outcome[0].meanings.map((meaning, index) => (
            <>
              <Stack
                direction="row"
                alignItems="center"
                spacing="16px"
                sx={{ marginBottom: "31px" }}
              >
                {meaning && (
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: "18px",
                      lineHeight: "22px",
                      color: !dark ? "#2D2D2D" : "#FFFFFF",
                      fontStyle: "italic",
                    }}
                  >
                    {meaning.partOfSpeech}
                  </Typography>
                )}
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
                    marginBottom: "5px",
                  }}
                >
                  Meaning
                </Typography>
                {meaning &&
                  meaning.definitions.map((definition, index) => (
                    <Stack
                      key={Math.random()}
                      direction="column"
                      spacing="13px"
                    >
                      <Stack
                        direction="row"
                        alignItems="flex-start"
                        sx={{ columnGap: "20px", paddingTop: "13px" }}
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
                          key={index}
                          sx={{
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "24px",
                            color: !dark ? "#2D2D2D" : "#FFFFFF",
                            textAlign: "left",
                            alignSelf: "flex-start",
                          }}
                        >
                          {definition.definition}
                        </Typography>
                      </Stack>
                      {definition.example && (
                        <Typography
                          sx={{
                            fontWeight: "400",
                            fontSize: "15px",
                            lineHeight: "24px",
                            color: "#757575",
                            paddingLeft: "25px",
                          }}
                        >
                          "{definition.example}"
                        </Typography>
                      )}
                    </Stack>
                  ))}
                <Stack
                  direction="row"
                  spacing="24px"
                  alignItems="flex-start"
                  sx={{ marginTop: "17px", marginBottom: "33px" }}
                >
                  {meaning.synonyms && meaning.synonyms.length > 0 ? (
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: "16px",
                        lineHeight: "19px",
                        color: " #757575",
                      }}
                    >
                      Synonyms
                    </Typography>
                  ) : null}
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    sx={{ rowGap: "10px", columnGap: "20px" }}
                  >
                    {meaning.synonyms &&
                      meaning.synonyms.length > 0 &&
                      meaning.synonyms.map((synonym, index) => (
                        <Typography
                          key={index}
                          sx={{
                            fontWeight: "700",
                            fontSize: "16px",
                            lineHeight: "19px",
                            color: "#A445ED",
                          }}
                        >
                          {synonym}
                        </Typography>
                      ))}
                  </Stack>
                </Stack>
              </Stack>
            </>
          ))}
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
            href={outcome[0].sourceUrls[0]}
            target="_blank"
            style={{ color: !dark ? "#2d2d2d" : "#FFFFFF" }}
          >
            {outcome[0].sourceUrls[0]}
          </a>
          <img src={NewW} />
        </Stack>
      </Stack>
    </>
  );
}

export default Definition;
