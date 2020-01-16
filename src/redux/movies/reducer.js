import produce from 'immer'
import actions from './actions'

const initState = {
  movies: null,
  movie: null,
}

const reducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.SET_MOVIES:
        draft.movies = action.payload
        return

      case actions.SET_MOVIE:
        draft.movie = action.payload
        return

      case actions.CLEAR_MOVIE:
        draft.movie = null
    }
  })

export default reducer
