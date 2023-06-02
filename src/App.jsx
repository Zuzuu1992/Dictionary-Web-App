import { useState } from "react";
import "./App.css";
import { Container } from "@mui/material";
import Header from "./components/Header";
import Search from "./components/Search";

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
        <Search />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam,
          doloremque aliquid vitae reiciendis, eius amet fugit, odio dolores
          doloribus molestias quaerat! Consectetur odio exercitationem
          necessitatibus suscipit esse iusto modi molestiae.
        </p>
      </Container>
    </>
  );
}

export default App;
