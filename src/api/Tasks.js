// Base URL for our MockAPI endpoint
const BASE_URL = "https://69faa11288a7af0ecca7904a.mockapi.io/task";

// GET all tasks
export const getTasks = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  // Make sure we always return an array
  return Array.isArray(data) ? data : [];
};

// GET a single task by id
export const getTask = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return response.json();
};

// POST - create a new task
export const createTask = async (taskData) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  return response.json();
};

// PUT - update an existing task by id
export const updateTask = async (id, taskData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  return response.json();
};

// DELETE - remove a task by id
export const deleteTask = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });
  return response.json();
};