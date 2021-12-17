import React from "react";
import Box from "@mui/material/Box";

export const TaskBanner = (props) => (
  <Box
    sx={{
      mx: "auto",
      bgcolor: "primary.main",
      color: "#fff",
      w: "100%",
      fontWeight: "bold",
      textAlign: "center",
      fontSize: 24,
      p: 5,
    }}
  >
    {props.userName}'s Tasks ({props.taskItems.filter((t) => !t.done).length}{" "}
    tasks to do)
  </Box>
);
