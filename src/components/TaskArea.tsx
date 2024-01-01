import { useContext } from "react";
import "../styles/taskArea.scss";
import Task from "./TaskComponent";
import { TaskContext } from "../context/TaskContex";
const TaskArea = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="taskArea">
      {tasks.map((task) => (
        <Task
          key={task.id}
          name={task.name}
          status={task.status}
          id={task.id}
        />
      ))}
    </div>
  );
};

export default TaskArea;
