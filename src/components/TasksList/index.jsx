import React from "react";
import "./TasksList.css";
import Task from "../Task";
const TasksList = ({ tasks = [] }) => {
  return (
    <div className="scroll-view">
      <div className="tasks-list">
        {tasks.map((task) => {
          return <Task key={task.id} taskName={task.name} />;
        })}
      </div>
    </div>
  );
};

export default TasksList;
