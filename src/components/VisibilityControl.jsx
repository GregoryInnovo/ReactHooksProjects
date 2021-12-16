import React from "react";

export const VisibilityControl = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        checked={props.isChecked}
        onChange={(e) => props.callback(e.target.checked)}
      />

      <label>Show {props.description}</label>
    </div>
  );
};
