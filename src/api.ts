import axios from 'axios';

const url = import.meta.env.VITE_SERVER_URL;

// https://axios-http.com/ru/docs/config_defaults
const api = axios.create({
	baseURL: url,
	timeout: 5000,
});

export default api;
