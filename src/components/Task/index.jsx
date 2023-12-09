import React from "react";
import "./Task.css";
const Task = ({ taskName,id,onXPressed=()=>{} }) => {

  
  return (
    <div key={id} className="task">
      <div className="task-name">{taskName}</div>
      <div className="task-button">
        <div onClick={()=>{
          onXPressed(id);
        }} >X</div>
      </div>
    </div>
  );
};

export default Task;
