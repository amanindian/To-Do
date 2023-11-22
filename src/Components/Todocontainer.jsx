import React, { useContext } from "react";
import Singletodo from "./Singletodo";
import { ToDoDataContext } from "../App";

const Todocontainer = () => {
  const { allToDoData } = useContext(ToDoDataContext);

  return (
    <div className="alltodo-items">
      {allToDoData.map((item, index) => {
        return <Singletodo item={item} key={index} />;
      })}
    </div>
  );
};

export default Todocontainer;
