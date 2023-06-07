import { useState } from "react";
import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import Header from "./components/Header";
import Search from "./components/Search";
import Smile from "../public/assets/images/Emoji.png";
import Definition from "./components/Definition";
import axios from "axios";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const [listed, setListed] = useState(false);
  const handleListed = () => {
    setListed(!listed);
  };

  const [dark, setDark] = useState(false);
  const changeTheme = () => {
    setDark(!dark);
  };

  const [currentFont, setCurrentFont] = useState("Sans Serif");
  const [selectedFont, setSelectedFont] = useState("Inter");
  const [searchWord, setSearchWord] = useState("");
  const [empty, setEmpty] = useState("");
  const [modified, setModified] = useState(false);
  const [submittedEmpty, setSubmittedEmpty] = useState(false);
  const [redLine, setRedLine] = useState(false);
  const [outline, setOutline] = useState(false);
  const [outcome, setOutcome] = useState(null);
  const [errorM, setErrorM] = useState(false);
  const [font, setFont] = useState("Inter");

  const theme = createTheme({
    typography: {
      fontFamily: font,
    },
    breakpoints: {
      values: {
        xs: 375,
        md: 768,
        xl: 1440,
      },
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (searchWord === "") {
      const message = "Whooops, can't be empty...";
      setEmpty(message);
      setRedLine(true);
      setModified(false);
      setOutline(true);
      setSubmittedEmpty(true);
      setTimeout(() => {
        setSubmittedEmpty(false);
      }, 3000);
      return;
    } else {
      setOutline(false);
    }

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      const word = response.data;
      setOutcome(word);
    } catch (error) {
      setErrorM(true);
      setOutcome(null);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          transition: "all 0.4s",
          backgroundColor: !dark ? "#FFFFFF" : "#050505",
          width: "100%",
          minHeight: "100vh",
        }}
      >
        <Container
          sx={{
            paddingTop: { xs: "24px", md: "58px" },
            paddingLeft: { xs: "24px", md: "39px", xl: "352px" },
            paddingRight: { xs: "24px", md: "39px", xl: "352px" },
            paddingBottom: { xs: "84px", md: "118px", xl: "123px" },
            transition: "all 0.4s",
          }}
        >
          <Header
            listed={listed}
            handleListed={handleListed}
            dark={dark}
            changeTheme={changeTheme}
            currentFont={currentFont}
            setCurrentFont={setCurrentFont}
            setFont={setFont}
          />
          <Search
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            handleSubmit={handleSubmit}
            dark={dark}
            redLine={redLine}
            setRedLine={setRedLine}
            modified={modified}
            setModified={setModified}
            submittedEmpty={submittedEmpty}
            outline={outline}
            setOutline={setOutline}
          />
          {outcome ? (
            <Definition dark={dark} outcome={outcome} />
          ) : errorM ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: { xs: "24px", md: "26px" },
                alignItems: "center",
                justifyContent: "center",
                marginTop: { xs: "100px", md: "132px" },
              }}
            >
              <img src={Smile} />
              <Typography
                sx={{
                  marginTop: { xs: "20px", md: "25px" },
                  fontWeight: "700",
                  fontSize: { xs: "17px", md: "20px" },
                  lineHeight: { xs: "18px", md: "24px" },
                  color: !dark ? " #2D2D2D" : "#FFFFFF",
                }}
              >
                No Definitions Found
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: { xs: "15px", md: "18px" },
                  lineHeight: "24px",
                  color: "#757575",
                  textAlign: "center",
                }}
              >
                Sorry pal, we couldn't find definitions for the word you were
                looking for. You can try the search again at a later time or
                head to the web instead.
              </Typography>
            </Box>
          ) : null}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
