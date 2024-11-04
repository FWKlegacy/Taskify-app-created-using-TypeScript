import React, { useEffect, useRef, useState } from "react";
import "./Todo.css";
import { Todoit } from "../Model";
import { CiEdit } from "react-icons/ci";
import { MdDelete, MdDone } from "react-icons/md";

interface Props {
  todo: Todoit;
  todos: Todoit[];
  setTodos: React.Dispatch<React.SetStateAction<Todoit[]>>;
}

const Todo: React.FC<Props> = ({ todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus;
  }, [edit]);

  //Handling Mark as done
  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  //Handling Delete
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //handling edit

  const handleEdit = (e: React.FormEvent<EventTarget>, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  return (
    <form className="todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          ref={inputRef}
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
          className="input"
        />
      ) : todo.isDone ? (
        <s className="todo-text">{todo.todo}</s>
      ) : (
        <span className="todo-text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icons"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <CiEdit />
        </span>
        <span className="icons">
          <MdDelete onClick={() => handleDelete(todo.id)} />
        </span>
        <span className="icons">
          <MdDone onClick={() => handleDone(todo.id)} />
        </span>
      </div>
    </form>
  );
};

export default Todo;
