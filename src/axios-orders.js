import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-54b1e-default-rtdb.firebaseio.com/'
});

export default instance;