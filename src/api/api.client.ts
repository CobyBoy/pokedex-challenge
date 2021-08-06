import axios from 'axios';
import { API_URL } from '../constants/api';

export const fetchAll = (limit: number, offset: number) => axios.get(`${API_URL}?offset=${offset}&limit=${limit}`);
export const fetchByName = (name: string) => axios.get(`${API_URL}/${name}`);
export const fetchById = (id: number) => axios.get(`${API_URL}/${id}`);
export const fetchByUrl = (url: string) => axios.get(url);
