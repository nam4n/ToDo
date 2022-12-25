import React from "react";

function Form(props) {
  return (
    <form className="todo-form flex justify-between items-center w-[250px]" onSubmit={props.onFormSubmit}>
      <input
        type="text"
        className="bg-[whitesmoke] w-[200px] pt-1 pr-[20px] pb-2 pl-1 outline-none rounded-md hover:bg-[rgb(226, 218, 218)]"
        value={props.input}
        onChange={props.onInputChange}
        required
        placeholder="Enter your task "
      />
      <div className="py-[0.75px] px-[8px] rounded-full flex items-center justify-center text-md text-[#555252] hover:text-white font-bold bg-[#CDF2F9] hover:bg-[#2c94fb]">
      <button
      className="text-2xl mb-[4px]"
      type="submit">+</button>
      </div>
    </form>
  );
}

export default Form;
