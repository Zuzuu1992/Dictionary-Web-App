import { Box } from "@mui/material";
import React from "react";
import "./SearchStyle.css";
import Loop from "../../public/assets/images/icon-search.svg";
import { useState } from "react";

function Search() {
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
        style={{
          outline: isFocused ? "1px solid #a445ed" : "none",
        }}
      >
        <input onClick={handleFocused} onBlur={handleInputBlur} />
        <img src={Loop} />
      </form>
    </Box>
  );
}

export default Search;
