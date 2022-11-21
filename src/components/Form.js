import React from 'react';

function Form(props) {
  return (
    <form className='todo-form' onSubmit={props.onFormSubmit}>
        <input type="text" value={props.input} onChange={props.onInputChange} />
        <button type="submit">+</button>
      </form>
  )
}

export default Form;