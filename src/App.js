import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setTasks((prevTasks) => {
      return [input, ...prevTasks];
    });
    setInput("");
  };

  const handleDelete = (index) => {
    setTasks((prevTasks) => {
      return prevTasks.filter((arr, i) => {
        return index !== i;
      });
    });
  };

  return (
    <div className="container overflow-hidden bg-white rounded-lg flex flex-col w-[100vw] h-[100vh] sm:w-[350px] sm:h-[80vh] items-center sm:mt-[50px]">
      <Header />

      <div className="flex flex-col justify-center items-center mt-4 sm:mt-0">
        <Form
          input={input}
          onInputChange={handleInputChange}
          onFormSubmit={handleFormSubmit}
        />

        <ul className="todos mr-[8vh] list-none">
          {tasks.map((task, index) => (
            <Todo
            key={index}
              item={task}
              index={index}
              id={index}
              onDelete={handleDelete}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
