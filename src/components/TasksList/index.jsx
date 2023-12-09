import React, { createRef } from "react";
import "./TasksList.css";
import Task from "../Task";
import { LOCAL_STORAGE_KEY, toJson } from "../../utils/json";


const TasksList = ({ setTasks,tasks = [] , listRef }) => {
 const handleDeleteTask=(id)=>{
     setTasks(tasks.filter(task=>task.id!==id));
     localStorage.setItem(LOCAL_STORAGE_KEY,toJson(tasks))

 }
  return (
    <div className="scroll-view">
      <div  className="tasks-list">
        {tasks.map((task) => {
          return <Task id={task.id} taskName={task.name}  onXPressed={handleDeleteTask}/>;
        })}
        <div className="dummy-div"  ref={listRef} ></div>
      </div>
    </div>
  );
};

export default TasksList;
