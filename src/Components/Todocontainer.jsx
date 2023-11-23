import React, { useContext } from "react";
import Singletodo from "./Singletodo";
import { ToDoDataContext } from "../App";

const Todocontainer = () => {
  const { allToDoData } = useContext(ToDoDataContext);

  return (
    <div className="alltodo-items">
      {allToDoData.map((item, index) => {
        return <Singletodo item={item} index={index} key={index} />;
      })}
    </div>
  );
};

export default Todocontainer;
