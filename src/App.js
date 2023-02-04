import React from 'react';
import './index.css';

function App() {
  const [todo, setTodo] = React.useState('');
  const [todos, setTodos] = React.useState([]);
  const addTodo = () => {
    if (todo !== '') {
      setTodos([...todos, todo]);
      setTodo(todo);
    } else {
      alert('Введите название задачи');
    }
  };
  
  const deleteTodo = (index) => {
    console.log(index);
  };

  const clearTodo = () => {
    setTodos([]);
  };
  return (
    <>
      <div className="wrapper">
        <div className="add_task">
          <input
            type="text"
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />
          <button onClick={addTodo}>Добавить</button>
        </div>
        {todos?.length > 0 ? (
          <ul className="list">
            {todos.map((todo, index) => (
              <div key={index} className={`todo ${index === 0 ? 'active' : ''}`}>
                <li>{todo}</li>
                <button
                  className="delete_task"
                  onClick={() => {
                    deleteTodo(index);
                  }}
                >
                  Удалить
                </button>
              </div>
            ))}
          </ul>
        ) : (
          <div className="empty">
            <p>Нет задач</p>
          </div>
        )}
        <button className="delete" onClick={clearTodo}>
          Очистить список
        </button>
      </div>
    </>
  );
}

export default App;
