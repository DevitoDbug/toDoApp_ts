import { FC, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faClose,
  faEdit,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

import { Task, TaskContext } from "../context/TaskContex";
import "../styles/taskComponent.scss";

const TaskComponent: FC<Task> = (task) => {
  const { setTasks } = useContext(TaskContext);

  const handleToggleStatus = () => {
    setTasks((prev: Task[]) => {
      return prev.map((item: Task) =>
        item.id === task.id ? { ...item, completed: !item.completed } : item,
      );
    });
  };

  return (
    <div className="taskContainer">
      <span className="taskDescription">{task.name}</span>
      <div className="buttonArea">
        <button onClick={handleToggleStatus}>
          {task.completed ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <FontAwesomeIcon icon={faClose} />
          )}
        </button>
        <button>
          <FontAwesomeIcon className="icons " icon={faTrash} />
        </button>
        <button>
          <FontAwesomeIcon className="" icon={faEdit} />
        </button>
      </div>
    </div>
  );
};

export default TaskComponent;
