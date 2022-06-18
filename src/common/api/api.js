import axios from 'axios'

export const api = axios.create({
        headers: {
                'Content-Type': 'application/json',
        },
})

api.interceptors.request.use((request) => {
        try {
                let { accessToken } = JSON.parse(localStorage.getItem('tokens'))
                request.headers['Authorization'] = accessToken
                return request
        } catch (e) {
                return request
        }
})

api.interceptors.response.use(
        (response) => {
                return response
        },
        async function (error) {
                const originalRequest = error.config
                if (!error.response) return Promise.reject(error)

                if (error.response.status === 401 && !originalRequest._retry) {
                        try {
                                const { refreshToken } = JSON.parse(
                                        localStorage.getItem('tokens')
                                )
                                originalRequest._retry = true
                                const resp = await api.post(
                                        '/api/auth/refresh',
                                        {
                                                refreshToken,
                                        }
                                )
                                const accessToken = resp.data
                                localStorage.setItem(
                                        'tokens',
                                        JSON.stringify({
                                                refreshToken,
                                                accessToken: accessToken,
                                        })
                                )
                                return api(originalRequest)
                        } catch (e) {
                                return Promise.reject(error)
                        }
                }
                return Promise.reject(error)
        }
)