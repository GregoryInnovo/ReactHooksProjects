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
      fontSize: 24,
      p: 5,
      borderRadius: 1,
      textAlign: "center",
    }}
  >
    {props.userName}'s Task App ({props.taskItems.filter((t) => !t.done).length}{" "}
    tasks to do)
  </Box>
);
