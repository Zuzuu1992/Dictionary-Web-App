import { useState } from "react";
import "./App.css";
import { Box, Container, Typography } from "@mui/material";
import Header from "./components/Header";
import Search from "./components/Search";
import Smile from "../public/assets/images/Emoji.png";
import Definition from "./components/Definition";
import axios from "axios";

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
  const [redLine, setRedLine] = useState(false);
  const [outcome, setOutcome] = useState(null);
  const [error, setError] = useState(false);

  console.log(searchWord);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const reset = "";
    setSearchWord(reset);

    try {
      const response = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`
      );
      const word = response.data;
      setOutcome(word);
      console.log(word);
    } catch {
      if (searchWord === "") {
        const message = "Whooops, can't be empty...";
        setEmpty(message);
        setRedLine(!redLine);
        console.log(message);
      }
      setError(!error);
      console.log("mteri shemogvesia mefeo");
    }
  };

  return (
    <>
      <Container
        sx={{
          fontFamily:
            currentFont === "Sans Serif"
              ? "'Inter', sans-serif"
              : currentFont === "Serif"
              ? "'Lora', serif"
              : currentFont === "Mono"
              ? "'Inconsolata', monospace"
              : null,
          paddingTop: "24px",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingBottom: "84px",
          transition: "all 0.4s",
          backgroundColor: !dark ? "#FFFFFF" : "#050505",
        }}
      >
        <Header
          listed={listed}
          setListid={setListed}
          handleListed={handleListed}
          dark={dark}
          setDark={setDark}
          changeTheme={changeTheme}
          selectedFont={selectedFont}
          setSelectedFont={setSelectedFont}
          currentFont={currentFont}
          setCurrentFont={setCurrentFont}
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
        />
        <Definition
          currentFont={currentFont}
          setCurrentFont={setCurrentFont}
          dark={dark}
          setDark={setDark}
        />
        {error ? (
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
              looking for. You can try the search again at later time or head to
              the web instead.
            </Typography>
          </Box>
        ) : null}
      </Container>
    </>
  );
}

export default App;
