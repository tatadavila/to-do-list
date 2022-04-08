import React from "react";
import "../styles/tasksList.css";

import Task from "./Task";

const TasksList = ({ filterInfo, tasksList, setTasksList }) => {
  const onClickItem = (key) => {
    let updatedList = [...tasksList];
    updatedList[key].complete = !updatedList[key].complete;
    setTasksList(updatedList);
  };

  return (
    <div className="listContainer">
      {tasksList.map((element) => {
        return (
          <Task key={element.id} item={element} onClickItem={onClickItem} />
        );
      })}
    </div>
  );
};

export default TasksList;
