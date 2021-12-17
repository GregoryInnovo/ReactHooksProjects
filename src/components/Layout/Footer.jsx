import React from "react";
import Box from "@mui/material/Box";
import "./Styles/Footer.css";

export default function Footer() {
  const sectionStyle = {
    width: "100rem",
  };

  return (
    <Box
      className="footer"
      sx={{
        backgroundColor: "primary.dark",
      }}
    >
      <section sx={sectionStyle}>
        <h1>Creator</h1>
        <p>@GregoryInnovo</p>
      </section>
      <section sx={sectionStyle}>
        <h1>Created</h1>
        <p>React</p>
        <p>MIU Lib</p>
      </section>
      <section sx={sectionStyle}>
        <h1>Delete data</h1>
        <p>Click here</p>
      </section>
    </Box>
  );
}
