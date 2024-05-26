import { api } from "../api/api";

export const getAllTodos = async () => {
  try {
    const res = await api.get("/todos");
    if (!res.data) {
      throw new Error("Todos not found");
    }
    return res.data;
  } catch (error) {
    console.error("Error fetching todos:", error.message);
    throw error;
  }
};

export const deleteTodos = async (id) => {
  try {
    const res = await api.delete(`/todos/${id}`);
    if (!res.data) {
      throw new Error("Todo not found");
    }
    return res.data;
  } catch (error) {
    console.error("Error deleting todo:", error.message);
    throw error;
  }
};

export const createTodos = async (data) => {
  try {
    const res = await api.post(`/todos`, data);
    if (!res.data) {
      throw new Error("Todo not found");
    }
    return res.data;
  } catch (error) {
    console.error("Error creating todo:", error.message);
    throw error;
  }
};
