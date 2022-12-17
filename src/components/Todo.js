import React from "react";
import './Todo.css';

function Todo(props) {

    const onSelect = () => {
        props.onDelete(props.id)
    }

  return (
    <div className="todo-item my-[8px] flex justify-center ml-12" key={props.index} id={props.id}>
      <li>{props.item}</li>
      <button className="delete-btn" onClick={onSelect}>X</button>
    </div>
  );
}

export default Todo;
