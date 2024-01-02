import {
  FC,
  FormEventHandler,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
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
  const [showEditBox, setShowEditBox] = useState<boolean>(false);
  const [edits, setEdits] = useState<string>("");
  const editRef = useRef<HTMLDivElement>(null);
  const inputFocusRef = useRef<HTMLInputElement>(null);

  const handleToggleStatus = () => {
    setTasks((prev: Task[]) => {
      return prev.map((item: Task) =>
        item.id === task.id ? { ...item, completed: !item.completed } : item,
      );
    });
  };

  const handleEditTask = () => {
    setShowEditBox(true);
  };

  const handleSubmitEditedTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setShowEditBox(false);
    if (edits.length > 0) {
      setTasks((prevArry) => {
        return prevArry.map((element) =>
          element.id === task.id ? { ...element, name: edits } : element,
        );
      });
    }
  };

  const handleDeleteTask = () => {
    setTasks((prevArry: Task[]) => {
      return prevArry.filter((element) => element.id !== task.id);
    });
  };

  useEffect(() => {
    const handleClickOutsideEditBox = (event: MouseEvent) => {
      if (editRef.current && !editRef.current.contains(event.target as Node)) {
        setShowEditBox(false);
        setEdits(task.name);
      }
    };

    if (showEditBox) {
      document.addEventListener("click", handleClickOutsideEditBox);
    } else {
      document.removeEventListener("click", handleClickOutsideEditBox);
    }

    return () => {
      document.removeEventListener("click", handleClickOutsideEditBox);
    };
  }, [showEditBox, task.name]);

  useEffect(() => {
    if (showEditBox && inputFocusRef.current) {
      inputFocusRef.current.focus();
    }
  }, [showEditBox]);

  return (
    <div
      className={`taskContainer ${task.completed && "completedTask"}`}
      ref={editRef}
    >
      {showEditBox ? (
        <form className="editTextContainer" onSubmit={handleSubmitEditedTask}>
          <input
            ref={inputFocusRef}
            className="editTextInputBox"
            onChange={(e) => setEdits(e.target.value)}
            placeholder="Enter text..."
            value={edits}
          />
        </form>
      ) : (
        <span className="taskDescription">{task.name}</span>
      )}
      <div className="buttonArea">
        <button
          className={`${task.completed && "completedTaskButton"}`}
          onClick={handleToggleStatus}
        >
          {task.completed ? (
            <FontAwesomeIcon icon={faClose} />
          ) : (
            <FontAwesomeIcon icon={faCheck} />
          )}
        </button>

        <button
          className={`${task.completed && "completedTaskButton"}`}
          onClick={handleDeleteTask}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>

        {!task.completed && (
          <button
            className={`${task.completed && "completedTaskButton"}`}
            onClick={handleEditTask}
          >
            <FontAwesomeIcon icon={faEdit} />
          </button>
        )}
      </div>
    </div>
  );
};

export default TaskComponent;
