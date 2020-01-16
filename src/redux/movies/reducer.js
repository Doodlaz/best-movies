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
    }
  })

export default reducer
