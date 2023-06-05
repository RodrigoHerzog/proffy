import axios from 'axios';

const api = axios.create({
    baseURL: 'https://proffy-db.herokuapp.com/'
})

export default api;