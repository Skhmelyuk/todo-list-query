import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Як довго дані вважаються "свіжими" і не запитуються повторно
      staleTime: 1000 * 60 * 5, // 5 хвилин
      // Як довго кеш зберігається у пам'яті після того, як компонент відмонтовано
      gcTime: 1000 * 60 * 10, // 10 хвилин
      // Кількість повторних спроб при помилці
      retry: 3,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
);
