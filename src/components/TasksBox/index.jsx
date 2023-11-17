import React from "react";
import "./TasksBox.css";
const TasksBox = ({ children }) => {
  return <div className="tasks-box">{children}</div>;
};

export default TasksBox;
