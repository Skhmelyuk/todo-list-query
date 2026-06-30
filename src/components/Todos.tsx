import { useEffect, useState } from "react";
import { getAllTodos } from "../api/todosApi";

export const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getAllTodos()
      .then((data) => {
        setTodos(data);
      })
      .catch((error) => {
        setIsError(true);
        setError(error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading)
    return <div className="text-green-500 text-6xl">Завантаження.......</div>;

  if (isError) return <div className="text-red-500">{error}</div>;

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
