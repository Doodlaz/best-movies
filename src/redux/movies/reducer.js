import produce from 'immer'
import actions from './actions'

const initState = {
  movies: null,
}

const reducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.SET_MOVIES:
        draft.movies = action.payload
        return
    }
  })

export default reducer
