import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Header from './components/Header';
import Todo from './components/Todo';

function App() {

  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = e => {
    setInput(e.target.value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();

    setTasks(prevTasks => {
      return [input, ...prevTasks];
    });
    setInput("");
  };

  const handleDelete = (index) => {
    setTasks(prevTasks => {
      return prevTasks.filter((arr, i) => {
        return index !== i;
      });
    });
  };

  return (
    <div className='container'>
      <Header />
      
      <Form input={input} onInputChange={handleInputChange} onFormSubmit={handleFormSubmit} />

      <ul className='todos'>
        {tasks.map((task, index) => (
          <Todo item={task} index={index} id={index} onDelete={handleDelete} />
        ))}
      </ul>

    </div>
  );
}

export default App;
