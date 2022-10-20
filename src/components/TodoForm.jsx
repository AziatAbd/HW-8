import { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 30px;
  border-color: violet;
`;
const Button = styled.button`
  height: 36px;
  width: 65px;
  border: 1px solid;
  border-color: violet;
  background: violet;
  
  `;

const TodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        value={userInput}
        type="text"
        onChange={handleChange}
        placeholder="Enter a task"
      />
      <Button>Save</Button>
    </form>
  );
};

export default TodoForm;
