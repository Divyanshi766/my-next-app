'use client';

import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, editTodo }) => {
  return (
    <div className="mt-6">
      {todos.length === 0 ? (
        <p className="text-center text-gray-500">No todos available. Add a todo!</p>
      ) : (
        todos.map((todo, index) => (
          <TodoItem
            key={index}
            todo={todo}
            removeTodo={removeTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
