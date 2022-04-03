import React from "react";
import "../styles/tasksList.css";

import Task from "./Task";

const TasksList = ({ list }) => {
  return (
    <div className="listContainer">
      {list.map((element) => {
        return <Task key={element.id} item={element} />;
      })}
    </div>
  );
};

export default TasksList;
