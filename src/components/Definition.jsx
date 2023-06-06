import { useRef, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import "./DefinitionStyle.css";
import NewW from "../../public/assets/images/icon-new-window.svg";

function Definition({ dark, outcome }) {
  const voice = outcome
    ?.map((item) =>
      item.phonetics
        .map((phonetic) => phonetic.audio)
        .filter((audio) => audio != "")
    )
    .flat();

  const audioRef = useRef(null);

  const handleImageClick = () => {
    audioRef.current.play();
  };

  const [isHovered, setIsHovered] = useState(false);

  const handleImageMouseEnter = () => {
    setIsHovered(true);
  };

  const handleImageMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Stack direction="column" sx={{ rowGap: { xs: "8px", md: "11px" } }}>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "700",
              fontSize: { xs: "32px", md: "64px" },
              lineHeight: { xs: "39px", md: "67px" },
              color: !dark ? "#2D2D2D" : "#FFFFFF",
            }}
          >
            {outcome[0].word}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "400",
              fontSize: { xs: "18px", md: "24px" },
              lineHeight: { xs: "24px", md: "29px" },
              color: "#A445ED",
            }}
          >
            {outcome[0].phonetics[0].text}
          </Typography>
        </Stack>
        <Stack>
          <svg
            className={`play-icon ${isHovered ? "hovered" : ""}`}
            onClick={handleImageClick}
            onMouseEnter={handleImageMouseEnter}
            onMouseLeave={handleImageMouseLeave}
            xmlns="http://www.w3.org/2000/svg"
            width="75"
            height="75"
            viewBox="0 0 75 75"
          >
            <style>
              {`
          .play-icon circle {
            transition: opacity 0.6s;
          }

          .play-icon:hover circle {
            opacity: 1;
          }

          .play-icon path {
            transition: fill 0.6s;
          }

          .play-icon.hovered path {
            fill: #ffffff;
          }
        `}
            </style>
            <g fill="#A445ED" fillRule="evenodd">
              <circle
                cx="37.5"
                cy="37.5"
                r="37.5"
                opacity={isHovered ? "1" : "0.25"}
              />
              <path
                d="M29 27v21l21-10.5z"
                fill={isHovered ? "#FFFFFF" : "#A445ED"}
              />
            </g>
          </svg>
          <audio ref={audioRef} src={voice[0]} />
        </Stack>
      </Stack>
      {outcome.length > 1
        ? outcome.map((each, index) => (
            <Stack key={index}>
              <Stack
                direction="row"
                alignItems="center"
                spacing="16px"
                sx={{
                  marginBottom: { xs: "31px", md: "44px" },
                  marginTop: { xs: "29px", md: "42px" },
                }}
              >
                {each.meanings[0] && (
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "18px", md: "24px" },
                      lineHeight: { xs: "22px", md: "25.18px" },
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
              <Stack sx={{ rowGap: "13px" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: { xs: "16px", md: "20px" },
                    lineHeight: { xs: "19px", md: "21px" },
                    color: " #757575",
                    marginBottom: { xs: "5px", md: "15px" },
                  }}
                >
                  Meaning
                </Typography>
                {each.meanings[0] &&
                  each.meanings[0].definitions.map((definition, index) => (
                    <Stack key={index} direction="column" spacing="13px">
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
                            fontSize: { xs: "15px", md: "18px" },
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
                            fontSize: { xs: "15px", md: "18px" },
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
                  alignItems="flex-start"
                  sx={{
                    columnGap: { xs: "24px", md: "40px" },
                    marginTop: { xs: "17px", md: "28px" },
                  }}
                >
                  {each.meanings[0].synonyms &&
                  each.meanings[0].synonyms.length > 0 ? (
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: { xs: "16px", md: "20px" },
                        lineHeight: { xs: "19px", md: "21px" },
                        color: " #757575",
                      }}
                    >
                      Synonyms
                    </Typography>
                  ) : null}
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    sx={{
                      rowGap: { xs: "10px", md: "16px" },
                      columnGap: { xs: "20px", md: "26px" },
                    }}
                  >
                    {each.meanings[0].synonyms &&
                      each.meanings[0].synonyms.length > 0 &&
                      each.meanings[0].synonyms.map((synonym, index) => (
                        <Typography
                          key={index}
                          sx={{
                            fontWeight: "700",
                            fontSize: { xs: "16px", md: "20px" },
                            lineHeight: { xs: "19px", md: "21px" },
                            color: "#A445ED",
                            cursor: "pointer",
                          }}
                        >
                          {synonym}
                        </Typography>
                      ))}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          ))
        : outcome[0].meanings.map((meaning, index) => (
            <Stack key={index}>
              <Stack
                direction="row"
                alignItems="center"
                spacing="16px"
                sx={{
                  marginBottom: { xs: "31px", md: "44px" },
                  marginTop: { xs: "29px", md: "42px" },
                }}
              >
                {meaning && (
                  <Typography
                    sx={{
                      fontWeight: "700",
                      fontSize: { xs: "18px", md: "24px" },
                      lineHeight: { xs: "22px", md: "25.18px" },
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
              <Stack sx={{ rowGap: "13px" }}>
                <Typography
                  sx={{
                    fontWeight: "400",
                    fontSize: { xs: "16px", md: "20px" },
                    lineHeight: { xs: "19px", md: "21px" },
                    color: " #757575",
                    marginBottom: { xs: "5px", md: "15px" },
                  }}
                >
                  Meaning
                </Typography>
                {meaning &&
                  meaning.definitions.map((definition, index) => (
                    <Stack key={index} direction="column" spacing="13px">
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
                            fontSize: { xs: "15px", md: "18px" },
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
                            fontSize: { xs: "15px", md: "18px" },
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
                  alignItems="flex-start"
                  sx={{
                    columnGap: { xs: "24px", md: "40px" },
                    marginTop: { xs: "17px", md: "28px" },
                  }}
                >
                  {meaning.synonyms && meaning.synonyms.length > 0 ? (
                    <Typography
                      sx={{
                        fontWeight: "400",
                        fontSize: { xs: "16px", md: "20px" },
                        lineHeight: { xs: "19px", md: "21px" },
                        color: " #757575",
                      }}
                    >
                      Synonyms
                    </Typography>
                  ) : null}
                  <Stack
                    direction="row"
                    flexWrap="wrap"
                    sx={{
                      rowGap: { xs: "10px", md: "16px" },
                      columnGap: { xs: "20px", md: "26px" },
                    }}
                  >
                    {meaning.synonyms &&
                      meaning.synonyms.length > 0 &&
                      meaning.synonyms.map((synonym, index) => (
                        <Typography
                          key={index}
                          sx={{
                            fontWeight: "700",
                            fontSize: { xs: "16px", md: "20px" },
                            lineHeight: { xs: "19px", md: "21px" },
                            color: "#A445ED",
                            cursor: "pointer",
                          }}
                        >
                          {synonym}
                        </Typography>
                      ))}
                  </Stack>
                </Stack>
              </Stack>
            </Stack>
          ))}
      <Box
        sx={{
          height: "1px",
          flexGrow: "1",
          backgroundColor: !dark ? "#E9E9E9" : "#3A3A3A",
          marginTop: { xs: "32px", md: "39px" },
        }}
      ></Box>
      <Stack
        sx={{
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "flex-start", md: "center" },
          rowGap: "7px",
          columnGap: { md: "25px" },
          marginTop: { xs: "24px", md: "21px" },
        }}
      >
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: { xs: "17px", md: "14.69px" },
            color: "#757575",
            textDecorationLine: "underline",
          }}
        >
          Source
        </Typography>
        <Stack direction="row" spacing="9px">
          <Typography
            component="a"
            href={outcome[0].sourceUrls[0]}
            target="_blank"
            sx={{
              fontSize: "14px",
              lineHeight: { xs: "17px", md: "14.69px" },
              color: !dark ? "#2d2d2d" : "#FFFFFF",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            {outcome[0].sourceUrls[0]}
          </Typography>
          <img src={NewW} />
        </Stack>
      </Stack>
    </>
  );
}

export default Definition;
