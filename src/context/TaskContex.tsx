import { FC, createContext, useState } from "react";

type TaskContextProp = {
  children: React.ReactNode;
};

export type Task = {
  name: string;
  completed: boolean;
  id: number;
};

export type TaskContextValue = {
  tasks: Task[];
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
  id: number;
};

export const TaskContext = createContext<TaskContextValue>({
  tasks: [],
  setTasks: () => {},
  id: -1,
});

const TaskContextProvider: FC<TaskContextProp> = ({ children }) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const contextValue: TaskContextValue = {
    tasks,
    setTasks,
    id: -1,
  };
  return (
    <TaskContext.Provider value={contextValue}>{children}</TaskContext.Provider>
  );
};

export default TaskContextProvider;
