import axios from 'axios';

const DefaultAxios = axios.create({
    baseURL: 'http://14.54.56.73:8000',
    headers: {'Content-Type': 'application/json'}
});
export default DefaultAxios;