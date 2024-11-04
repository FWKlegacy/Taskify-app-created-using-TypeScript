import React from "react";
import "./TodoList.css";
import { Todoit } from "../Model";
import Todo from "../Todo/Todo";

interface Props {
  todos: Todoit[];
  setTodos: React.Dispatch<React.SetStateAction<Todoit[]>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <Todo todo={todo} todos={todos} setTodos={setTodos} key={todo.id} />
      ))}
    </div>
  );
};

export default TodoList;
