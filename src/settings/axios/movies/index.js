import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {},
})


instance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error),
)

export default instance
