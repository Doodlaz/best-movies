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

  CLEAR_MOVIE: 'CLEAR_MOVIE',
  clearMovie: () => ({
    type: actions.CLEAR_MOVIE,
  }),


}

export default actions
