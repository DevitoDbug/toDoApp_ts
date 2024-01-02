import { FC, useContext } from "react";
import { Task, TaskContext } from "../context/TaskContex";
import "../styles/taskComponent.scss";

const TaskComponent: FC<Task> = (task) => {
  const { setTasks } = useContext(TaskContext);

  const handleToggleStatus = () => {
    setTasks((prev: Task[]) => {
      return prev.map((item: Task) =>
        item.id === task.id ? { ...item, completed: !item.completed } : item
      );
    });
  };

  return (
    <div className="taskContainer">
      <span>{task.name}</span>
      <button className="toggleTaskStatusButton" onClick={handleToggleStatus}>
        {String(task.completed)}
      </button>
    </div>
  );
};

export default TaskComponent;
