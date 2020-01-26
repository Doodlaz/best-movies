import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  headers: {
    'content-type': 'application/json',
  },
  params: {
    'api_key': '723a17a7b40484270fe6c08b3817cb2a',
    'language': 'ru',
  }
})


instance.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error),
)

export default instance
