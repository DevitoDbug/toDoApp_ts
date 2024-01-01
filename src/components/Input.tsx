import React, { FormEventHandler, useContext, useState } from "react";
import "../styles/input.scss";
import { TaskContext, Task } from "../context/TaskContex";

const Input: React.FC = () => {
  const [task, setTask] = useState<Task>({
    name: "",
    status: false,
  });
  const { setTasks } = useContext(TaskContext);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (task.name.length > 0) {
      setTasks((prev: Task[]) => [...prev, task]);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) =>
          setTask((prev: Task) => ({ ...prev, name: e.target.value }))
        }
        type="text"
        placeholder="Enter a task"
        value={task.name}
      />
      {/* <button
        onClick={() =>
          setTask((prev: Task) => ({ ...prev, status: !prev.status }))
        }
      >
        Done
      </button> */}
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
