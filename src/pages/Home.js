import React, { useState } from "react";

import TasksList from "../components/TasksList";
import Form from "../components/NewTaskForm";

import Tasks from "../data/tasks.json";

const Home = ({ openModal, setOpenModal }) => {
  const [tasksList, setTasksList] = useState(Tasks.data);

  return (
    <>
      {tasksList && (
        <TasksList tasksList={tasksList} setTasksList={setTasksList} />
      )}
      {openModal && (
        <Form
          lastId={tasksList.length}
          setTasksList={setTasksList}
          tasksList={tasksList}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
};

export default Home;
