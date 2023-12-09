import React, { createRef, useEffect, useState } from "react";
import TasksBox from "./components/TasksBox";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import tasksData from "./data/tasks.json";
import { Actions } from "./components/Actions";
import Button from "./components/Button/indxe";
import InputField from "./components/InputField";
import FlexHorizontal from "./components/Containers/FlexHorizontal";
import FlexVertical from "./components/Containers/FlexVertical";
import { LOCAL_STORAGE_KEY, fromJson, toJson } from "./utils/json";


const App = () => {
  const tasksListRef= createRef();
  const tasksInputRef= createRef();
  const [tasks,setTasks]=useState(fromJson(localStorage.getItem(LOCAL_STORAGE_KEY)) || tasksData)
  const [task,setTask]= useState("")
  useEffect(()=>{
    localStorage.setItem(LOCAL_STORAGE_KEY,toJson(tasks))
},[tasks])
  const handleInputFieldChange=(e)=>{
    setTask(e.target.value.trim())
   
    
  }
  const handleNewTaskButtonClick=(e)=>{
    if(task==="")return;
    setTasks([...tasks,{id:new Date().getTime(),name:task}])
    tasksListRef.current?.scrollIntoView({ behavior: "smooth",block: "end" })
    setTask("")
    tasksInputRef.current?.focus()
  }
  const handleRemoveAllTasksButtonClick=()=>{
    setTasks([]);
    localStorage.setItem(LOCAL_STORAGE_KEY,toJson([]))
    
  }
  return (
    <>
      <TasksBox>
        <Header tasks={tasks} />
        <TasksList setTasks={setTasks} listRef={tasksListRef}  tasks={tasks} />
        <Actions>
          <FlexVertical>
          <InputField inputRef={tasksInputRef} value={task} onEnterPressed={handleNewTaskButtonClick} onChange={handleInputFieldChange}/>
          <FlexHorizontal>
          <Button onClick={handleRemoveAllTasksButtonClick} text={"حذف همه"} type={"secondary"} />
          <Button onClick={handleNewTaskButtonClick} text={"کار جدید"} type={"primary"} />
          </FlexHorizontal>
          </FlexVertical>
        </Actions>
      </TasksBox>
    </>
  );
};

export default App;
