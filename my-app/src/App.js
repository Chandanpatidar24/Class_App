// import React, { useState } from 'react'; 
// import TodoForm from './Components/TodoForm';
// import TodoList from './Components/TodoList';
// import goData from './Components/goData';


// const App = () => {
//   const [todos, setTodos] = useState([]); 

//   const addTodo = (text) => {
//     const newTodo = { id: Date.now(), text, completed: false }; 
//     setTodos([...todos, newTodo]); 
//   };

//   const toggleTodo = (id) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === id ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//   };

//   return (
//     <div>
      
//       <TodoForm/>
//       <TodoList/>
//       <h1>Todo List</h1> 
//       <TodoForm addTodo={addTodo} /> 
//       <TodoList todos={todos} toggleTodo={toggleTodo} /> 
//     </div>
//   );
// };

// export default App; // Export App component




import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/login";
import User from "./Components/User";

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/User">User</Link></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/User" element={<User />} />
      </Routes>
    </>
  );
}

export default App;
