import { Box, FormControl, Input, Typography } from "@mui/material";
import React from "react";
import "./SearchStyle.css";
import Loop from "../../public/assets/images/icon-search.svg";
import { useState } from "react";

function Search({
  dark,
  searchWord,
  setSearchWord,
  handleSubmit,
  redLine,
  setRedLine,
  modified,
  setModified,
  submittedEmpty,
  outline,
  setOutline,
}) {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocused = () => {
    setIsFocused(true);
  };

  const handleInputBlur = () => {
    setIsFocused(false);
  };

  return (
    <Box
      sx={{
        marginBottom: { xs: "24px", md: "50px" },
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          outline:
            isFocused &&
            (modified
              ? "1px solid #a445ed"
              : submittedEmpty
              ? "1px solid #FF5252"
              : null),
          outline: outline
            ? "1px solid #FF5252"
            : isFocused
            ? "1px solid #a445ed"
            : null,
          backgroundColor: !dark ? "#f4f4f4" : "#1F1F1F",
          cursor: "pointer",
        }}
      >
        <FormControl sx={{ borderBottom: "none" }}>
          <Input
            type="text"
            value={searchWord}
            onClick={handleFocused}
            onBlur={handleInputBlur}
            onChange={(e) => {
              setOutline(false);

              setSearchWord(e.target.value);
              if (redLine && !submittedEmpty) {
                setRedLine(false);
              }
              if (!modified && e.target.value !== "") {
                setModified(true);
              } else if (modified && e.target.value === "") {
                setModified(false);
              }
            }}
            placeholder="Search for any word..."
            disableUnderline
            sx={{
              fontWeight: "700",
              fontSize: { xs: "16px", md: "20px" },
              lineHeight: { xs: "19px", md: "21px" },
              color: !dark ? "#2d2d2d" : "#FFFFFF",
              caretColor: "#a445ed",
              flexGrow: "1",
              "::placeholder": {
                color: !dark
                  ? "rgba(45, 45, 45, 0.2)"
                  : "rgba(255, 255, 255, 0.2)",
              },
            }}
          />
        </FormControl>

        <img src={Loop} onClick={handleSubmit} />
      </form>
      {submittedEmpty ? (
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
