import React, { useState } from 'react'; 
import TodoForm from './Components/TodoForm';
import TodoList from './Components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]); 

  const addTodo = (text) => {
    const newTodo = { id: Date.now(), text, completed: false }; 
    setTodos([...todos, newTodo]); 
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div>
      <TodoForm/>
      <TodoList/>
      <h1>Todo List</h1> 
      <TodoForm addTodo={addTodo} /> 
      <TodoList todos={todos} toggleTodo={toggleTodo} /> 
    </div>
  );
};

export default App; // Export App component