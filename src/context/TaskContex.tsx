import { FC, createContext, useState } from "react";

type TaskContextProp = {
  children: React.ReactNode;
};

export type Task = {
  name: string;
  status: boolean;
};

export type TaskContextValue = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
};

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  setTasks: () => {},
});

const TaskContextProvider: FC<TaskContextProp> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const contextValue: TaskContextValue = {
    tasks,
    setTasks,
  };
  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
