import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://dev.artk.ai:3031/',
  headers: {},
})


instance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error),
)

export default instance
