import axios from 'axios';

const DefaultAxios = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {'Accept': 'application/json'}
});
export default DefaultAxios;