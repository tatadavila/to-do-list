import React from "react";
import "../styles/topMenu.css";

const TopMenu = ({ setOpenModal }) => {
  const openForm = () => {
    setOpenModal(true);
  };
  return (
    <div className="topMenuContainer">
      <button className="addButton" onClick={openForm}>
        New Task
      </button>
    </div>
  );
};

export default TopMenu;
