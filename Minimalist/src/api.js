// src/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000/api'; // Change this to your backend URL

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export const api = {
  getUsers: () => apiClient.get('/users'),
  addUser: (user) => apiClient.post('/user/register', user),
  loginUser: (credentials) => apiClient.post('/user/login', credentials),
  logoutUser: () => apiClient.post('/user/logout'),
  getProducts: () => apiClient.get('/products'),
  addProduct: (product) => apiClient.post('/products/add', product),
  // Add other API methods as needed
};
