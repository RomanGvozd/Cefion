import axios from 'axios'

export const accountLogin = ({username,password}) => axios.post('/api/auth/login', {
    username,
    password,
});

