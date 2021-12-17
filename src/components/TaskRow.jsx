import React from "react";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import DeleteIcon from "@mui/icons-material/Delete";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export const TaskRow = (props) => (
  <StyledTableRow key={props.index}>
    <StyledTableCell component="th" scope="row">
      {props.task.name}
    </StyledTableCell>

    <StyledTableCell align="right">
      <input
        type="checkbox"
        checked={props.task.done}
        onChange={() => props.toggleTask(props.task)}
      />
    </StyledTableCell>

    <StyledTableCell align="right">
      <DeleteIcon
        fontSize="medium"
        onClick={() => alert("Are you sure to delete this task?")}
      />
    </StyledTableCell>
  </StyledTableRow>
);
