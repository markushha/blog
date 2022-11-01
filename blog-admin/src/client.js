import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:3004' })

export default client