const actions = {
  GET_MOVIES_REQ: 'GET_MOVIES_REQ',
  getMoviesReq: payload => ({
    type: actions.GET_MOVIES_REQ,
    payload
  }),
  SET_MOVIES: 'SET_MOVIES',
  setMovies: payload => ({
    type: actions.SET_MOVIES,
    payload,
  }),

  GET_MOVIE_REQ: 'GET_MOVIE_REQ',
  getMovieReq: payload => ({
    type: actions.GET_MOVIE_REQ,
    payload,
  }),
  SET_MOVIE: 'SET_MOVIE',
  setMovie: payload => ({
    type: actions.SET_MOVIE,
    payload,
  }),

  GET_MOVIE_TRAILER_REQ: 'GET_MOVIE_TRAILER_REQ',
  getMovieTrailerReq: (payload, lang) => ({
    type: actions.GET_MOVIE_TRAILER_REQ,
    payload,
    lang,
  }),

  SET_MOVIE_TRAILER: 'SET_MOVIE_TRAILER',
  setMovieTrailer: payload => ({
    type: actions.SET_MOVIE_TRAILER,
    payload,
  }),

  GET_MOVIE_ACTORS_REQ: 'GET_MOVIE_ACTORS_REQ',
  getMovieActorsReq: payload => ({
    type: actions.GET_MOVIE_ACTORS_REQ,
    payload,
  }),

  SET_MOVIE_ACTORS: 'SET_MOVIE_ACTORS',
  setMovieActors: payload => ({
    type: actions.SET_MOVIE_ACTORS,
    payload,
  }),

  CLEAR_MOVIE: 'CLEAR_MOVIE',
  clearMovie: () => ({
    type: actions.CLEAR_MOVIE,
  }),


}

export default actions
