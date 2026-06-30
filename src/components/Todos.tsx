import { getAllTodos } from "../api/todosApi";
import { useQuery } from "@tanstack/react-query";

export const Todos = () => {
  const {
    data: todos,
    isPending,
    isError,
    error,
    isFetching,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
    retry: 1,
    staleTime: 10_000,
  });

  if (isPending)
    return <div className="text-green-500 text-6xl">Завантаження.......</div>;

  if (isError) return <div className="text-red-500">{error.message}</div>;

  return (
    <div className="container mx-auto px-4 pt-10">
      <h1 className="text-center text-5xl mb-4">Todos</h1>
      <div className="border border-amber-500 p-5">
        {todos.map((todo) => (
          <div key={todo.id} className="p-3 border-b-blue-700 bg-teal-300 mb-2">
            {todo.text}
          </div>
        ))}
      </div>
    </div>
  );
};
