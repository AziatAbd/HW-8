import { useState } from "react";
import styled from "styled-components";
import "./App.css";
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm";

function App() {
  const Div = styled.div`
    display: flex;
    justify-content: center;
  `;

  const Header = styled.header`
    text-align: center;
  `

  const [todos, setTodos] = useState([]);

  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(),
        task: userInput,
        complete: false,
      };
      setTodos([...todos, newItem]);
    }
  };

  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  const handleToggle = (id) => {
    setTodos([
      ...todos.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : { ...task }
      ),
    ]);
  };

  return (
    <Div>
      <div>
        <Header>
          <h1>Task List: {todos.length}</h1>
        </Header>
        <TodoForm addTask={addTask} />
        {todos.map((todo) => {
          return (
            <Todo
              todo={todo}
              key={todo.id}
              toggleTask={handleToggle}
              removeTask={removeTask}
            />
          );
        })}
      </div>
    </Div>
  );
}

export default App;
