'use client';

import { useState } from 'react';
import TodoForm from '../components/TodoForm';
import TodoList from '../components/TodoList';

export default function TodoApp() {
  const [todos, setTodos] = useState([
    'JavaScript',
    'Todo List app',
    'Next.js',
  ]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentTodo, setCurrentTodo] = useState(null);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
    setIsPopupOpen(false);
  };

  const removeTodo = (todo) => {
    setTodos(todos.filter((item) => item !== todo));
  };

  const editTodo = (updatedTodo) => {
    setTodos(todos.map(todo => todo === currentTodo ? updatedTodo : todo));
    setIsPopupOpen(false);
  };

  const openEditPopup = (todo) => {
    setCurrentTodo(todo);
    setIsPopupOpen(true);
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Todo List</h1>
      <button
        onClick={() => { setCurrentTodo(null); setIsPopupOpen(true); }}
        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300 mb-6"
      >
        Add Todo
      </button>

      <TodoList todos={todos} removeTodo={removeTodo} editTodo={openEditPopup} />

      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-xl w-96">
            <TodoForm
              addTodo={addTodo}
              editTodo={editTodo}
              currentTodo={currentTodo}
              setIsPopupOpen={setIsPopupOpen}
            />
          </div>
        </div>
      )}
    </div>
  );
}
