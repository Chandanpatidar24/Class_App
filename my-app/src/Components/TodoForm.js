import React, { useState } from 'react'; // Import React and useState hook

// Define the TodoForm component
const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState(''); // State to manage the input text

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!text.trim()) return; // If text is empty, do nothing
    addTodo(text); // Call addTodo function with the text
    setText(''); // Clear the input field
  };

  return (
    <form onSubmit={handleSubmit}> {/* Form element with onSubmit handler */}
      <input
        type="text" // Input type text
        value={text} // Bind input value to text state
        onChange={(e) => setText(e.target.value)} // Update text state on input change
      />
      <button type="submit">Add Todo</button> {/* Submit button */}
    </form>
  );
};

export default TodoForm; // Export TodoForm component