import axios from "axios";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const API_URL = import.meta.env.VITE_TMDB_API_URL;

export const clientAxios = axios.create({
  baseURL: API_URL,
  params: {
    api_key: `${API_KEY}`,
  },
});

export interface MovieAPI {
  id: number;
  title: string;
}
