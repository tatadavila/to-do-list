import React from "react";
import "../styles/task.css";

const Task = ({ item }) => {
  return (
    <div className="card">
      <div>{item.task}</div>
    </div>
  );
};

export default Task;
