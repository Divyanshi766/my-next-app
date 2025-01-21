'use client';

const TodoItem = ({ todo, removeTodo, editTodo }) => {
  return (
    <div className="flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-md mb-4">
      <span className="text-lg">{todo}</span>
      <div className="flex space-x-3">
        <button
          onClick={() => editTodo(todo)}
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          Edit
        </button>
        <button
          onClick={() => removeTodo(todo)}
          className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition duration-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
