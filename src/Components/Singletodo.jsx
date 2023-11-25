import React, { useContext } from "react";
import { ToDoDataContext } from "../App";

const Singletodo = ({ item, index }) => {
  //Import callToDoData using useContext Hook
  const { allToDoData, setAllToDoData } = useContext(ToDoDataContext);

  //Handle on click remove ToDo Item
  const handleRemoveItem = (e) => {
    const index = e.target.getAttribute("index");
    const updatedToDoData = [...allToDoData]; // Create a copy of the array
    updatedToDoData.splice(index, 1); // Remove the element at the specified index
    setAllToDoData(updatedToDoData); // Update the state with the modified array
  };

  return (
    <div className="todobox">
      <span className="stickey">{index + 1}</span>
      <div className="details ">
        <h2>{item.title}</h2>
        <h4>{new Date(item.date).toDateString()}</h4>
        <p>{item.desc}</p>
      </div>

      <div className="icons">
        <svg
          onClick={(e) => {
            handleRemoveItem(e);
          }}
          index={index}
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 448 512"
        >
          <path
            onClick={(e) => {
              handleRemoveItem(e);
            }}
            index={index}
            d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"
            // fill="#fff" (For color change)
          />
        </svg>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="2em"
          viewBox="0 0 384 512"
          onClick={(e) => {
            handleRemoveItem(e);
          }}
          index={index}
        >
          <path
            onClick={(e) => {
              handleRemoveItem(e);
            }}
            index={index}
            d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Singletodo;
