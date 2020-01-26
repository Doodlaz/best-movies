import axiosMovies from '../../src/settings/axios/movies'

export class API {

  //  Movies
  static getMovies(credentials) {
    return axiosMovies.get(`movie/popular?page=${credentials}`, credentials)
  }

  static getMovie(credentials) {
    return axiosMovies.get(`movie/${credentials}`)
  }

  static getMovieActors(credentials) {
    return axiosMovies.get(`movie/${credentials}/credits`)
  }
  //  Movies END

  //  Actors
  static getActors(credentials) {
    return axiosMovies.get(`person/popular?page=${credentials}`, credentials)
  }

  static getActor(credentials) {
    return axiosMovies.get(`person/${credentials}`)
  }
  //  Actors END
}
