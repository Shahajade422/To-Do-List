import React, { useState } from "react";
import ToDofunction from "./ToDoItems";
import "./App.css";

function App() {
  const [getList, getListName] = useState("");
  const [items, getItems] = useState([]);
  function handleClick(event) {
    const { value } = event.target;
    getListName(value);
  }
  function getClick() {
    getItems((prevItems) => {
      return [...prevItems, getList];
    });
    getListName("");
  }
  function deleteList(id) {
    getItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleClick} name="Add" type="text" value={getList} />
        <button onClick={getClick} name="Submit">
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((item, index) => (
            <ToDofunction
              key={index}
              id={index}
              text={item}
              onDelete={deleteList}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
