import axios from 'axios';

const api = axios.create({
    baseURL: 'https://senacretro.herokuapp.com',
});

export default api;