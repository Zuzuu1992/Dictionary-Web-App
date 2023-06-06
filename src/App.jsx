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
  const [outcome, setOutcome] = useState(null);
  const [errorM, setErrorM] = useState(false);
  const [font, setFont] = useState("Inter");

  const theme = createTheme({
    typography: {
      fontFamily: font,
    },
    breakpoints: {
      values: {
        xs: 375, // phone
        md: 768, // tablets
        xl: 1440, // small laptop
      },
    },
  });

  // console.log(searchWord);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (searchWord === "") {
      const message = "Whooops, can't be empty...";
      setEmpty(message);
      setRedLine(true);
      setModified(false);
      setSubmittedEmpty(true);
      setTimeout(() => {
        setSubmittedEmpty(false);
      }, 3000);
      console.log(message);
      return;
    }

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      const word = response.data;
      setOutcome(word);
      console.log(word);
    } catch (error) {
      setErrorM(true);
      setOutcome(null);
    }
  };

  console.log(errorM);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          backgroundColor: !dark ? "#FFFFFF" : "#050505",
          width: "100%",
          height: "100%",
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
            setListed={setListed}
            handleListed={handleListed}
            dark={dark}
            setDark={setDark}
            changeTheme={changeTheme}
            selectedFont={selectedFont}
            setSelectedFont={setSelectedFont}
            currentFont={currentFont}
            setCurrentFont={setCurrentFont}
            font={font}
            setFont={setFont}
          />
          <Search
            searchWord={searchWord}
            setSearchWord={setSearchWord}
            handleSubmit={handleSubmit}
            dark={dark}
            setDark={setDark}
            redLine={redLine}
            setRedLine={setRedLine}
            empty={empty}
            setEmpty={setEmpty}
            outcome={outcome}
            setOutcome={setOutcome}
            modified={modified}
            setModified={setModified}
            submittedEmpty={submittedEmpty}
            setSubmittedEmpty={setSubmittedEmpty}
          />
          {outcome ? (
            <Definition
              currentFont={currentFont}
              setCurrentFont={setCurrentFont}
              dark={dark}
              setDark={setDark}
              outcome={outcome}
              setOutcome={setOutcome}
            />
          ) : errorM ? (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: "24px",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img src={Smile} style={{ marginTop: "132px" }} />
              <Typography
                sx={{
                  marginTop: "20px",
                  fontWeight: "700",
                  fontSize: "20px",
                  lineHeight: "24px",
                  color: "#2D2D2D",
                }}
              >
                No Definitions Found
              </Typography>
              <Typography
                sx={{
                  fontWeight: "400",
                  fontSize: "18px",
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
