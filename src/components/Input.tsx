import React, {
  FormEventHandler,
  useContext,
  useEffect,
  useState,
} from "react";
import "../styles/input.scss";
import { TaskContext, Task } from "../context/TaskContex";

const Input: React.FC = () => {
  const [task, setTask] = useState<Task>({
    name: "",
    completed: false,
    id: -1,
  });
  const { tasks, setTasks } = useContext(TaskContext);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (task.name.length > 0) {
      setTasks((prev: Task[]) => [
        ...prev,
        { name: task.name, completed: task.completed, id: prev.length },
      ]);
    }
    setTask((prev: Task) => ({ ...prev, name: "" }));
  };

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);
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
