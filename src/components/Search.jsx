import { Box, Typography } from "@mui/material";
import React from "react";
import "./SearchStyle.css";
import Loop from "../../public/assets/images/icon-search.svg";
import { useState } from "react";

function Search({
  dark,
  setDark,
  searchWord,
  setSearchWord,
  handleSubmit,
  redLine,
  setRedLine,
  empty,
  setEmpty,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const handleFocused = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <Box sx={{ marginBottom: "24px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          outline:
            isFocused && !empty
              ? "1px solid #a445ed"
              : !redLine
              ? "1px solid #FF5252"
              : null,
          backgroundColor: !dark ? "#f4f4f4" : "#1F1F1F",
        }}
      >
        <input
          type="text"
          value={searchWord}
          onClick={handleFocused}
          onBlur={handleInputBlur}
          onChange={(e) => setSearchWord(e.target.value)}
          placeholder="Search for any word..."
          style={{ color: !dark ? "#2d2d2d" : "#FFFFFF" }}
        />
        <img src={Loop} />
      </form>
      {redLine ? (
        <Typography
          sx={{
            fontWeight: "400",
            fontSize: "14px",
            lineHeight: "16px",
            color: "#FF5252",
            paddingLeft: "24px",
            paddingTop: "8px",
          }}
        >
          Whooops, can't be empty...
        </Typography>
      ) : null}
    </Box>
  );
}

export default Search;
