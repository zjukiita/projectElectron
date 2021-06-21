import axios from 'axios';

const api = axios.create({
    baseURL: 'https://senacmobile.herokuapp.com', //https://senacretro.herokuapp.com
});

export default api;