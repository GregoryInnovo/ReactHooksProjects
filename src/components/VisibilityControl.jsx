import React from "react";
import Container from "@mui/material/Container";
import Checkbox from "@mui/material/Checkbox";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

export const VisibilityControl = (props) => {
  return (
    <Container
      sx={{
        width: "90%",
        m: "auto",
        mt: 1,
        mb: 1,
      }}
    >
      <Checkbox
        {...label}
        icon={<VisibilityOffOutlinedIcon />}
        checkedIcon={<VisibilityIcon />}
        checked={props.isChecked}
        onChange={(e) => props.callback(e.target.checked)}
      />

      <label>Show {props.description}</label>
    </Container>
  );
};
