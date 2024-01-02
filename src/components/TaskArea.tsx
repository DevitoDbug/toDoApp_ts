import { useContext } from "react";
import "../styles/taskArea.scss";
import TaskComponent from "./TaskComponent";
import { TaskContext } from "../context/TaskContex";
const TaskArea = () => {
  const { tasks } = useContext(TaskContext);
  return (
    <div className="taskArea">
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((task) => (
          <TaskComponent
            key={task.id}
            name={task.name}
            completed={task.completed}
            id={task.id}
          />
        ))}
    </div>
  );
};

export default TaskArea;
