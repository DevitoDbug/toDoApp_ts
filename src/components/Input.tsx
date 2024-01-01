import React, { FormEventHandler, useContext, useState } from "react";
import "../styles/input.scss";
import { TaskContext, Task } from "../context/TaskContex";

const Input: React.FC = () => {
  const [task, setTask] = useState<Task>({
    name: "",
    status: false,
    id: -1,
  });
  const { tasks, setTasks } = useContext(TaskContext);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (task.name.length > 0) {
      setTask((prev: Task) => ({ ...prev, id: tasks.length }));
      setTasks((prev: Task[]) => [...prev, task]);
    }
    setTask((prev: Task) => ({ ...prev, name: "" }));
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
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
