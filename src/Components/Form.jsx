import React, { useContext, useEffect, useState } from "react";
import { ToDoDataContext } from "../App";

const Form = ({ topValue, settopValue }) => {
  const { allToDoData, setAllToDoData } = useContext(ToDoDataContext);

  //This everything wrriten for render topValue up to next 13 line
  const [formTop, setFormTop] = useState(topValue);

  useEffect(() => {
    setFormTop(topValue);
  }, [topValue]);

  const handleFormStyle = () => {
    return {
      top: formTop,
    };
  };

  //Store form values as a object
  const [toDoItem, setToDoItem] = useState({
    date: new Date(),
    title: "",
    desc: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setAllToDoData(allToDoData.concat(toDoItem));
  };

  return (
    <form
      style={handleFormStyle()}
      className="todoform"
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div
        onClick={() => {
          settopValue("-80%");
        }}
        style={{
          position: "absolute",
          top: "20px",
          right: "20px",
          cursor: "pointer",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
        >
          <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
        </svg>
      </div>

      <div className="single-row">
        <label htmlFor="title">Enter To Do Title :</label>
        <input
          type="text"
          onChange={(e) => {
            setToDoItem({ ...toDoItem, title: e.target.value });
          }}
          value={toDoItem.title}
          id="title"
        />
      </div>

      <div className="single-row">
        <label htmlFor="desc">Enter To Do Description :</label>
        <textarea
          name="desc"
          id="desc"
          onChange={(e) => {
            setToDoItem({ ...toDoItem, desc: e.target.value });
          }}
          value={toDoItem.desc}
        ></textarea>
      </div>

      <div className="single-row">
        <label htmlFor="date">Enter Date to Do :</label>
        <input
          type="date"
          id="date"
          onChange={(e) => {
            setToDoItem({ ...toDoItem, date: e.target.value });
          }}
          value={toDoItem.date}
        />
      </div>

      <button
        className="main-btn"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        Add To Do
      </button>
    </form>
  );
};

export default Form;
