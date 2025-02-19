import React from 'react'; // Import React library
import TodoItem from './TodoItem'; // Import TodoItem component

// Define the TodoList component
const TodoList = ({ todos, toggleTodo }) => {
  return (
    <div>
      {/* Map over the todos array and render a TodoItem for each todo */}
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

export default TodoList; // Export TodoList component