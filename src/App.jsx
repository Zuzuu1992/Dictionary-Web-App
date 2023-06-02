import { useState } from "react";
import "./App.css";
import { Container } from "@mui/material";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Container
        sx={{
          paddingTop: "24px",
          paddingLeft: "24px",
          paddingRight: "24px",
          paddingBottom: "84px",
        }}
      >
        <Header />
      </Container>
    </>
  );
}

export default App;
