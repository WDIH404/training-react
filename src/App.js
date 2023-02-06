import React from 'react';
import ToDoItem from './components/ToDoItem.tsx';

import './index.css';

function App() {
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const addTodo = () => {
    setTodos([...todos, todo]);
    console.log(todo);
  };
  const clearTodo = () => {
    setTodos([]);
  };
  // const deleteTodo = () => {
  //   setTodos([...todos].filter((t) => t.index !== index));
  // };
  const deleteItem = () => {

  };

  return (
    <>
      <div className="wrapper">
        <div className="head">
          <h2 className="title">Список задач</h2>
          <span className="counter">Всего: {todos.length}</span>
        </div>
        <div className="add-task">
          <input
            className="input"
            type="text"
            placeholder="Введите задачу"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button className="button add" onClick={addTodo}>
            Добавить
          </button>
        </div>
        <div className="items">
          {todos.map((todo, index) => (
            <ToDoItem key={index} description={todo} deleteItem = {deleteItem}/>
          ))}
        </div>
        <div className="control_button">
          <button className="button delete">Удалить выбранные</button>
          <button className="button delete" onClick={clearTodo}>
            Очистить список
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
