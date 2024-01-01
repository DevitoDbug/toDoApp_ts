import { useContext } from "react";
import { TaskContext } from "../context/TaskContex";

const useUseTaskContext = () => {
  const { setTasks } = useContext(TaskContext);

  if (!setTasks) {
    throw new Error("Error ");
  }
};

export default useUseTaskContext;
