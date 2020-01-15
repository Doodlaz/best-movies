import axios from 'axios'

const instance = axios.create({
  baseURL: '',
  method: 'POST',
})

export default instance
