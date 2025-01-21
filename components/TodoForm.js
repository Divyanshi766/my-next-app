'use client';

import { useState, useEffect } from 'react';

const TodoForm = ({ addTodo, editTodo, currentTodo, setIsPopupOpen }) => {
  const [todo, setTodo] = useState('');

  useEffect(() => {
    if (currentTodo) {
      setTodo(currentTodo);
    }
  }, [currentTodo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.trim()) {
      if (currentTodo) {
        editTodo(todo);
      } else {
        addTodo(todo);
      }
      setIsPopupOpen(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="text-xl font-semibold mb-4">{currentTodo ? 'Edit Todo' : 'Add Todo'}</h2>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="Enter your todo..."
        className="w-full p-3 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <div className="flex justify-between">
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
        >
          {currentTodo ? 'Update' : 'Add'}
        </button>
        <button
          type="button"
          onClick={() => setIsPopupOpen(false)}
          className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TodoForm;
