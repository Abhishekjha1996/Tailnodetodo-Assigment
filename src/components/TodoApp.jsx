import React, { useEffect, useState } from "react";
import TodoList from "./TodoList";
import Style from "../style/Todoapp.module.css";

const TodoApp = () => {
  const [inputText, setInputText] = useState("");
  const [activeTodos, setActiveTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  useEffect(() => {
    const storedActiveTodos =
      JSON.parse(localStorage.getItem("activeTodos")) || [];
    const storedCompletedTodos =
      JSON.parse(localStorage.getItem("completedTodos")) || [];

    setActiveTodos(storedActiveTodos);
    setCompletedTodos(storedCompletedTodos);
  }, []);

  useEffect(() => {
    localStorage.setItem("activeTodos", JSON.stringify(activeTodos));
    localStorage.setItem("completedTodos", JSON.stringify(completedTodos));
  }, [activeTodos, completedTodos]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputText.trim() !== "") {
      const newTodo = { text: inputText, completed: false };
      setActiveTodos([newTodo, ...activeTodos]);
      setInputText("");
    }
  };

  const markAsCompleted = (index) => {
    const updatedTodos = [...activeTodos];
    updatedTodos[index].completed = true;
    setActiveTodos(updatedTodos);
    setCompletedTodos([updatedTodos[index], ...completedTodos]);
    updatedTodos.splice(index, 1);
    setActiveTodos(updatedTodos);
  };

  const deletetodo = (index) => {
    const deletetodo = [...completedTodos];
    deletetodo.splice(index, 1);
    setCompletedTodos(deletetodo);
  };

  const resetTodos = () => {
    setActiveTodos([]);
    setCompletedTodos([]);
  };

  return (
    <div id={Style.container}>
      <h1 id={Style.todoheading}>TODO APPLICATION</h1>
      <input
        id={Style.inputbox}
        type="text"
        placeholder="Add a New TODO"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
      />

      <button id={Style.resetbutton} onClick={resetTodos}>
        {" "}
        Reset
      </button>

      <TodoList
        activeTodos={activeTodos}
        completedTodos={completedTodos}
        markAsCompleted={markAsCompleted}
        deletetodo={deletetodo}
      />
    </div>
  );
};

export default TodoApp;
