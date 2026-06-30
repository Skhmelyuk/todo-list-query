import axios from "axios";

export interface TodoDTO {
  id: string;
  text: string;
  completed: boolean;
  createdAt: number;
}

export const apiClient = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export const getAllTodos = async () => {
  const { data } = await apiClient.get<TodoDTO[]>("/todos");
  return data;
};
