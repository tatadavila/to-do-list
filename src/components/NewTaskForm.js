import React, { useState } from "react";

import "../styles/newTaskForm.css";

const Form = ({ lastId, setTasksList, tasksList, setOpenModal }) => {
  const [taskName, setTaskName] = useState("");
  const handleInput = (e) => {
    e.persist();
    const { value } = e.target;
    setTaskName(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasksList([
      ...tasksList,
      { id: lastId + 1, task: taskName, complete: false },
    ]);
    setOpenModal(false);
  };

  return (
    <div className="modal ">
      <div className="modalContent">
        <h2 className="modalTitle">New Task</h2>
        <form className="form" onSubmit={handleSubmit}>
          <input
          className="newTaskInput"
            type="text"
            onChange={(e) => handleInput(e)}
            value={taskName}
          />
          <button className="submitButton" type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
