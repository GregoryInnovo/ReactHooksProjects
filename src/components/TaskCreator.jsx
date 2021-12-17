import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export const TaskCreator = (props) => {
  const [newTaskName, setNewTaskName] = useState("");

  const updateTaskValue = (e) => setNewTaskName(e.target.value);

  const createNewTask = () => {
    props.callback(newTaskName);
    setNewTaskName("");
  };

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "stretch",
        width: "90%",
        m: "auto",
        mb: 1,
        mt: 1,
      }}
    >
      <TextField
        fullWidth
        label="Add task"
        id="fullWidth"
        value={newTaskName}
        onChange={updateTaskValue}
      />
      <Button
        sx={{
          ml: 1,
        }}
        variant="contained"
        onClick={createNewTask}
      >
        Add
      </Button>
    </Container>
  );
};
