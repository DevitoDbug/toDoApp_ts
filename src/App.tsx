import React from "react";
import TaskContextProvider from "./context/TaskContex";
import "./styles/app.scss";
import Input from "./components/Input";
import TaskArea from "./components/TaskArea";

const App: React.FC = () => {
  return (
    <TaskContextProvider>
      <div className="mainContainer">
        <h2>To Do App!</h2>
        <Input />
        <TaskArea />
      </div>
    </TaskContextProvider>
  );
};

export default App;
