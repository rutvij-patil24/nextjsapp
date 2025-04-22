'use client';

import { Todo } from '@/types/todo';

type Props = {
  todo: Todo;
  toggleTodo: (id: number) => void;
};

export default function TodoItem({ todo, toggleTodo }: Props) {
  return (
    <div
      onClick={() => toggleTodo(todo.id)}
      className={`p-3 rounded-md cursor-pointer shadow-sm border transition-all duration-150 ${
        todo.completed
          ? 'bg-white border-gray-300 text-textSecondary line-through relative'
          : 'bg-green-100 border-green-300 text-textPrimary'
      }`}
    >
      <span
        className={`block ${
          todo.completed
            ? "after:content-[''] after:absolute after:left-0 after:top-1/2 after:w-full after:h-[2px] after:bg-red-500 after:transform after:-translate-y-1/2"
            : ''
        }`}
      >
        {todo.text}
      </span>
    </div>
  );
}
