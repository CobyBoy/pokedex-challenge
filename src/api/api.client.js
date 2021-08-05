import axios from 'axios';
import { API_URL } from '../constants/api';

export const fetchAll = (limit, offset) => axios.get(`${API_URL}?offset=${offset}&limit=${limit}`);
export const fetchByName = (name) => axios.get(`${API_URL}/${name}`);
export const fetchById = (id) => axios.get(`${API_URL}/${id}`);
export const fetchByUrl = (url) => axios.get(url);
