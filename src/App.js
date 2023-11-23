import "./App.css";
import { React, useState, createContext, useEffect } from "react";
import Header from "./Components/Header";
import Todocontainer from "./Components/Todocontainer";
import Form from "./Components/Form";

const ToDoDataContext = createContext();

function App() {
  const [topValue, settopValue] = useState("-80%");

  const [allToDoData, setAllToDoData] = useState(
    localStorage.allToDoData !== undefined
      ? JSON.parse(localStorage.allToDoData)
      : [
          {
            date: "11/23/2023",
            title: "Morning Deauty",
            desc: "This is my ToDo which i have to do in this weak before this morning",
          },
        ]
  );

  //Store AllToDo Data store in local storage
  useEffect(() => {
    localStorage.allToDoData = JSON.stringify(allToDoData);
  }, [allToDoData]);

  return (
    <ToDoDataContext.Provider value={{ allToDoData, setAllToDoData }}>
      <Form topValue={topValue} settopValue={settopValue} />
      <Header settopValue={settopValue} />
      <Todocontainer />
    </ToDoDataContext.Provider>
  );
}

export default App;
export { ToDoDataContext };
