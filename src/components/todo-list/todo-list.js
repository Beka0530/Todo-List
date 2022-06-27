import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ onDelete, onImportant, todos, onDone }) => {
  const style = {
    listStyle:'none'
  }
  const elements = todos.map((item) => {
    return (
      <li key={item.id} style={style} className={"list-group-item"}>
        <TodoListItem onDelete={onDelete} onImportant={onImportant} onDone={onDone} {...item } />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
