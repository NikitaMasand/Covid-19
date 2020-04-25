import React from "react";
import styles from "./TodoItem.module.css";

function TodoItem(props) {
  const completedStyle = {
    color: "#999999",
    textDecoration: "line-through"
  };
  return (
    <div className={styles.todoitem}>
      <input
        type="checkbox"
        checked={props.item.completed}
        onChange={() => props.handleChange(props.item.id)}
      />
      <span style={props.item.completed ? completedStyle : null}>
        {props.item.text}
      </span>
    </div>
  );
}
export default TodoItem;
