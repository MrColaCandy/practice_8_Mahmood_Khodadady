import React from "react";
import "./Task.css";
const Task = ({ taskName }) => {
  return (
    <div className="task">
      <div className="task-name">{taskName}</div>
      <div className="task-button">
        <div>X</div>
      </div>
    </div>
  );
};

export default Task;
