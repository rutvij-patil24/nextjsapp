'use client';

import { useState } from 'react';
import { Todo } from '@/types/todo';
import TodoItem from './TodoItem';

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [text, setText] = useState('');

  const addTodo = () => {
    if (!text.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setText('');
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const toggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#F1F5F9] font-body text-textPrimary py-10 px-4">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg p-6 space-y-6 border border-gray-200">
        <h1 className="text-3xl font-heading text-center text-secondary mb-4">
          Next.js Todo App
        </h1>

        <div className="flex flex-col gap-4">
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Enter a new task"
              className="flex-1 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={text}
              onChange={(e) => setText(e.target.value)}
              onKeyDown={handleKeyPress} // ✅ Press Enter to add task
            />
            <button
              onClick={addTodo}
              className="px-3 py-1 bg-blue-500 text-white font-semibold rounded-md shadow hover:bg-blue-600 transition-all duration-200"
            >
              Add Task
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {todos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
