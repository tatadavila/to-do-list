import React from "react";

import TasksList from "../components/TasksList";
import Form from "../components/NewTaskForm";

const Home = ({ openModal, tasksList, setTasksList, setOpenModal }) => {
  return (
    <>
      {tasksList && <TasksList list={tasksList} />}
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
