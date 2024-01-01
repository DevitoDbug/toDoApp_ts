import React, {
  ChangeEventHandler,
  FormEventHandler,
  useContext,
  useState,
} from "react";
import "../styles/input.scss";
import { TaskContext } from "../context/TaskContex";

const Input: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const { setTasks } = useContext(TaskContext);

  const handleInputTask: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTask(event.target.value.trim());
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    if (task.length > 0) {
      setTasks((previous: string[]) => [...previous, task]);
    }
    setTask("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInputTask}
        type="text"
        placeholder="Enter a task"
        value={task}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Input;
