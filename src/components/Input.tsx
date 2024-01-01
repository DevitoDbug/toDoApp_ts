import React, { ChangeEventHandler, FormEventHandler, useState } from "react";
import "../styles/input.scss";

const Input: React.FC = () => {
  const [task, setTask] = useState<string>("");

  const handleInputTask: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTask(event.target.value.trim());
  };
  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    {
      event.preventDefault();
      if (task) {
        console.log(task);
        setTask("");
      }
    }
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
