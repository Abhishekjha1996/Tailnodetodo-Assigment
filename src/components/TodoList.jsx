import React from "react";
import TodoItem from "./TodoItem";
import styles from "../style/todolist.module.css";
import CTodoItem from "./CTodoItem";

const TodoList = ({
  activeTodos = [],
  completedTodos = [],
  markAsCompleted,
  deletetodo,
}) => {
  return (
    <div>
      <h2 className={styles.headingtxt}>Active TODOs</h2>
      {activeTodos.length > 0 && (
        <div
          className={
            activeTodos.length > 5
              ? `${styles.activeTodos} ${styles.height}`
              : `${styles.activeTodos}`
          }>
          {activeTodos.map((todo, index) => (
            <TodoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              onClick={() => markAsCompleted(index)}
            />
          ))}
        </div>
      )}

      <h2 className={styles.headingtxt}>Completed TODOs</h2>
      {completedTodos.length > 0 && (
        <div
          className={
            completedTodos.length > 5
              ? `${styles.activeTodos} ${styles.height}`
              : `${styles.activeTodos}`
          }>
          {completedTodos.map((todo, index) => (
            <CTodoItem
              key={index}
              text={todo.text}
              completed={todo.completed}
              onClick={() => deletetodo(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;


  /* <TodoItem key={index} text={todo.text} completed={todo.completed} /> */

