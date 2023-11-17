import React from "react";
import TasksBox from "./components/TasksBox";
import Header from "./components/Header";
import TasksList from "./components/TasksList";
import tasks from "./data/tasks.json";
import { Actions } from "./components/Actions";
import Button from "./components/Button/indxe";
const App = () => {
  return (
    <>
      <TasksBox>
        <Header />
        <TasksList tasks={tasks} />
        <Actions>
          <Button text={"انصراف"} type={"secondary"} />
          <Button text={"تایید"} type={"primary"} />
        </Actions>
      </TasksBox>
    </>
  );
};

export default App;
