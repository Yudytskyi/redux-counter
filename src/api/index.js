import axios from 'axios';
import { baseURL } from '../configs/api';

const restApi = axios.create({
  baseURL,
});

restApi.interceptors.response.use(
  response => response,
  error => Promise.reject(error)
);

export const createHeroes = data => restApi.post('/superheroes', data);
