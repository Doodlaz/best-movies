import axiosMovies from '../../src/settings/axios/movies'

export class API {
  static getMovies(credentials) {
    return axiosMovies.get('movie/popular?api_key=723a17a7b40484270fe6c08b3817cb2a&language=en-US&page=1', credentials)
  }
}
