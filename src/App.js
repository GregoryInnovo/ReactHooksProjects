import React, { useState, useEffect } from "react";
import "./App.css";
/* Import custom components */
import { TaskRow } from "./components/TaskRow";
import { TaskBanner } from "./components/TaskBanner";
import { TaskCreator } from "./components/TaskCreator";
import { VisibilityControl } from "./components/VisibilityControl";

/* Styles for the table container from MUI Lib */
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";

/* Toast alert */
import Snackbar from "@mui/material/Snackbar";
import Fade from "@mui/material/Fade";
import Slide from "@mui/material/Slide";

/**
 * @author GregoryInnovo <gregoryinnovo@gmail.com>
 */

/**
 * Create the app
 * @function
 * @name App
 */
export default function App() {
  const [userName, setUserName] = useState("Greg");
  const [taskItems, setTaskItems] = useState([]);

  const [showCompleted, setShowCompleted] = useState(true);
  const [showMessage, setShowMessage] = useState("Default Message");

  /**
   * Execute the code when the app start, similar to componentDidMount
   */
  useEffect(() => {
    let data = localStorage.getItem("tasks");
    if (data != null) {
      setTaskItems(JSON.parse(data));
    } else {
      setUserName("Greg Example");
      setTaskItems([
        { name: "Task One example", done: false },
        { name: "Task Two example", done: false },
        { name: "Task Three example", done: true },
        { name: "Task Four example", done: false },
      ]);
      setShowCompleted(true);
    }
  }, []);

  /**
   * Execute the code every time taskItems are updated
   */
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(taskItems));
  }, [taskItems]);

  /**
   * @function createNewTask
   * @param {*} taskName is the name of the new task, and set the done value in false
   */
  const createNewTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName) && taskName.length !== 0) {
      setTaskItems([...taskItems, { name: taskName, done: false }]);
    } else if (taskItems.find((t) => t.name === taskName)) {
      setShowMessage("You cannot create a task with an existing name");
      /**
       * auto function execution
       */
      toastAlert(SlideTransition)();
    } else {
      setShowMessage("Add a description for the task");
      toastAlert(SlideTransition)();
    }
  };

  /**
   * @function deleteTask
   * @param {*} taskName is the name of the task
   */
  const deleteTask = (taskName) => {
    if (!taskItems.find((t) => t.name === taskName) && taskName.length !== 0) {
      const index = taskItems.findIndex((t) => t.name === taskName.name);
      taskItems.splice(index, 1);

      setTaskItems([...taskItems]);
    }
  };

  const toggleTask = (task) =>
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? { ...t, done: !t.done } : t))
    );

  const taskTableRows = (doneValue) =>
    taskItems
      .filter((task) => task.done === doneValue)
      .map((task, index) => (
        <TaskRow
          task={task}
          key={index}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
        />
      ));

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.info.main,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const table = {
    width: "95vw",
    margin: "auto",
    mb: 1,
  };

  const [toast, setToast] = useState({
    open: false,
    Transition: Fade,
  });

  const toastAlert = (Transition) => () => {
    setToast({
      open: true,
      Transition,
    });
  };

  const toastCloseAlert = () => {
    setToast({
      ...toast,
      open: false,
    });
  };

  return (
    <>
      <TaskBanner userName={userName} taskItems={taskItems} />
      <TaskCreator callback={createNewTask} />
      <TableContainer component={Paper} sx={table}>
        <Table sx={{ minWidth: 700 }} aria-label="Task table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Description</StyledTableCell>
              <StyledTableCell align="right">Status</StyledTableCell>
              <StyledTableCell align="right">Delete</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{taskTableRows(false)}</TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ textAlign: "center", m: 1 }}>
        <VisibilityControl
          description="Completed Tasks"
          isChecked={showCompleted}
          callback={setShowCompleted}
        />
      </Box>
      {showCompleted && (
        <TableContainer component={Paper} sx={table}>
          <Table sx={{ minWidth: 700 }} aria-label="Completed tasks table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Description</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
                <StyledTableCell align="right">Delete</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>{taskTableRows(true)}</TableBody>
          </Table>
        </TableContainer>
      )}
      <Snackbar
        open={toast.open}
        onClose={toastCloseAlert}
        TransitionComponent={toast.Transition}
        message={showMessage}
        autoHideDuration={4000}
        key={toast.Transition.name}
      />
    </>
  );
}

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}
