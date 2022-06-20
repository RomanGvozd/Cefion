import axios from 'axios'

export const api = axios.create()

api.interceptors.request.use((request) => {
        try {
                let token = localStorage.getItem('tokens')
                request.headers['Authorization'] = token
                return request
        } catch (e) {
                return request
        }
})

