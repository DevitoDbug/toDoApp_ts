import { FC, createContext, useState } from "react";

type TaskContextProp = {
  children: React.ReactNode;
};

export type TaskContextValue = {
  tasks: string[];
  setTasks: React.Dispatch<React.SetStateAction<string[]>>;
};

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  setTasks: () => {},
});

const TaskContextProvider: FC<TaskContextProp> = ({ children }) => {
  const [tasks, setTasks] = useState<string[]>([]);
  const contextValue: TaskContextValue = {
    tasks,
    setTasks,
  };
  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
