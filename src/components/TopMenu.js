import React from "react";
import "../styles/topMenu.css";
const TopMenu = ({ filterInfo, setFilterInfo, setOpenModal }) => {
  const openForm = () => {
    setOpenModal(true);
  };

  // const handleOnChange = (position) => {
  //   const updatedCheckedState = filterInfo.map((item, index) =>
  //     index === position ? !item : item,
  //   );
  //   setFilterInfo(updatedCheckedState);
  // };

  return (
    <div className="topMenuContainer">
      <button className="addButton" onClick={openForm}>
        New Task
      </button>

      {/* <div className="filter">
        <p className="filterLabel">Filter By:</p>

        {filterInfo.map((item, index) => {
          return (
            <li className="filterItem" key={index}>
              <div>
                <label>
                  <input
                    checked={filterInfo[index]}
                    type="checkbox"
                    onChange={() => handleOnChange(index)}
                  />
                  Done
                </label>
              </div>
            </li>
          );
        })}
      </div> */}
    </div>
  );
};

export default TopMenu;
