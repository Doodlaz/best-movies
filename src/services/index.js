import axios from 'src/settings/axios/auth'

export class API {
  static login(credentials) {
    return axios.post('/authentication', credentials)
  }

}
