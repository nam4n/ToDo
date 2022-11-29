import React from "react";
import "./Form.css"

function Form(props) {
  return (
    <form className="todo-form" onSubmit={props.onFormSubmit}>
      <input
        type="text"
        value={props.input}
        onChange={props.onInputChange}
        required
        placeholder="Enter your task "
      />
      <button type="submit">+</button>
    </form>
  );
}

export default Form;
