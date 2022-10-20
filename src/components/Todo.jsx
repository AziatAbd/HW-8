import React from 'react'
import styled from "styled-components";

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid;
  border-color: blueviolet;
  background: blueviolet;
  margin-top: 20px;
`;

const ToDo = styled.div`
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 10px;
  color: white;
`;


const Todo = ({ todo, toggleTask, removeTask }) => {
  return (
    <TodoItem key={todo.id + todo.key}>
      <ToDo>
        {todo.task}
      </ToDo>
      <ToDo onClick={() => removeTask(todo.id)}>
        x
      </ToDo>
    </TodoItem>
  );
};

export default Todo