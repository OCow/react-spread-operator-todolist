import React, { useState } from "react";

import ListItems from "./ListItems";

function App() {
  const [todoState, setTodoState] = useState({
    inputValue: "",
    todoItems: [],
  });

  //Store content of input field text in state
  function onInputChange(event) {
    setTodoState({
      inputValue: event.target.value,
      todoItems: todoState.todoItems, //leave items as they are for the time being
    });
  }

  //As soon as button is clicked, set newTodoText to current input field text
  //-> ListItems will be re-rendered due to state change
  function onBtnClick() {
    const newTodo = todoState.inputValue;
    setTodoState({
      inputValue: "", //reset input value to empty string
      todoItems: [...todoState.todoItems, newTodo], //spread operator vor expanding already existing todo items, and then adding the new todo
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          onChange={onInputChange}
          value={todoState.inputValue}
          type="text"
        />
        <button onClick={onBtnClick}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <ListItems name={todoState.todoItems} />
        </ul>
      </div>
    </div>
  );
}

export default App;
