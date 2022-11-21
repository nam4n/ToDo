import React from "react";

function Todo(props) {

    const onSelect = () => {
        props.onDelete(props.id)
    }

  return (
    <div className="todo-item" key={props.index} id={props.id}>
      <li>{props.item}</li>
      <button onClick={onSelect}>X</button>
    </div>
  );
}

export default Todo;
