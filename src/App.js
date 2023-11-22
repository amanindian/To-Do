import "./App.css";
import { React, useState, createContext } from "react";
import Header from "./Components/Header";
import Todocontainer from "./Components/Todocontainer";
import Form from "./Components/Form";

const ToDoDataContext = createContext();

function App() {
  const [topValue, settopValue] = useState("-80%");

  const [allToDoData, setAllToDoData] = useState([
    {
      date: new Date(),
      title: "Morning Deauty",
      desc: "This is my ToDo which i have to do in this weak before this morning",
    },
  ]);

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
