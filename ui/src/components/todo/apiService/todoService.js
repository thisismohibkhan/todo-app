import axios from 'axios';

const axiosClient = axios.create({
    baseURL :'http://localhost:8081'
})

export const retrieveTodosByUsername = (username) => axiosClient.get(`/todos/${username}`);

export const deleteTodoById = (id) => axiosClient.delete(`/todos/${id}`);

export const retrieveTodoById = (id) => axiosClient.get(`/todos/id/${id}`);

export const updateTodo = (todo) => axiosClient.put(`/todos`, todo);

export const createTodo = (todo) => axiosClient.post(`/todos`, todo);