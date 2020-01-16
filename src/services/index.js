import axiosMovies from '../../src/settings/axios/movies'

const apiKye = '?api_key=723a17a7b40484270fe6c08b3817cb2a'

export class API {
  static getMovies(credentials) {
    return axiosMovies.get(`movie/popular${apiKye}&page=${credentials}`, credentials)
  }

  static getMovie(credentials) {
    return axiosMovies.get(`movie/${credentials}${apiKye}`)
  }
}
