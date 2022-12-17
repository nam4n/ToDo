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
    <div className="container overflow-hidden bg-white p-2 rounded-lg flex flex-col w-[350px] h-[80vh] items-center mt-[50px]">
      <Header />

      <div className="flex flex-col justify-center items-center">
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
