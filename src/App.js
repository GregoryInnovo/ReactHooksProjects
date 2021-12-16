import React, { useState } from "react";

export default function App() {
  const [userName, setUserName] = useState("Greg");
  const [taskItems, setTaskItems] = useState([
    { name: "Task One", done: false },
    { name: "Task Two", done: false },
    { name: "Task Three", done: true },
    { name: "Task Four", done: false },
  ]);

  const taskTableRows = () => {
    return taskItems.map((task, index) => (
      <tr key={index}>
        <td>{task.name}</td>
      </tr>
    ));
  };

  return (
    <div>
      <h1>Hello world</h1>
      <table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Done</th>
          </tr>
        </thead>
        <tbody>{taskTableRows()}</tbody>
      </table>
    </div>
  );
}
