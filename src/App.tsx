import React from "react";
import TaskContextProvider from "./context/TaskContex";
import "./styles/app.scss";
import Input from "./components/Input";

const App: React.FC = () => {
  return (
    <TaskContextProvider>
      <div>
        <h2>To Do App!</h2>
        <Input />
      </div>
    </TaskContextProvider>
  );
};

export default App;
