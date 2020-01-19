import produce from 'immer'
import actions from './actions'

const initState = {
  actors: null,
  actor: null,
}

const reducer = (state = initState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case actions.SET_ACTORS:
        draft.actors = action.payload
        return

      case actions.SET_ACTOR:
        draft.actor = action.payload
        return

      case actions.CLEAR_ACTOR:
        draft.actor = null
    }
  })

export default reducer
