import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});

export const getCats = () => api.get('/cats');

export const toggleFavorite = (catId: number) => api.post(`/cats/${catId}/favorite`);
