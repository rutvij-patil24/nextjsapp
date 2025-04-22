// app/page.tsx
import TodoList from '@/components/TodoList';

export default function HomePage() {
  return (
    <main className="min-h-screen flex items-center justify-center">
      <TodoList />
    </main>
  );
}
