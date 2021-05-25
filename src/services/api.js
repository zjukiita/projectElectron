import axios from 'axios';

const api = axios.create({
    baseURL: 'https://senacmobile.herokuapp.com',
});

export default api;