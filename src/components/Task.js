import React, { useState } from "react";
import "../styles/task.css";

const Task = ({ item, onClickItem }) => {
  return (
    <div
      className={`card ${item.complete ? "done" : ""}`}
      onClick={() => onClickItem(item.id - 1)}
    >
      <div>{item.task}</div>
      <div className={`status ${item.complete ? "done" : ""}`}>
        ({item.complete ? "Done" : "Pending"})
      </div>
    </div>
  );
};

export default Task;
