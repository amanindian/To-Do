import React from "react";

export default function Header({ settopValue }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Heare you can manage your TO DO Lists</h1>
      <button
        className="main-btn"
        onClick={() => {
          settopValue("10%");
        }}
      >
        Add ToDo
      </button>
    </div>
  );
}
