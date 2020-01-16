const actions = {
  GET_MOVIES_REQ: 'GET_MOVIES_REQ',
  getMoviesReq: () => ({
    type: actions.GET_MOVIES_REQ,
  }),

  SET_MOVIES: 'SET_MOVIES',
  setMovies: payload => ({
    type: actions.SET_MOVIES,
    payload,
  }),
}

export default actions
