const actions = {
  GET_ACTORS_REQ: 'GET_ACTORS_REQ',
  getActorsReq: payload => ({
    type: actions.GET_ACTORS_REQ,
    payload
  }),
  SET_ACTORS: 'SET_ACTORS',
  setActors: payload => ({
    type: actions.SET_ACTORS,
    payload,
  }),

  GET_ACTOR_REQ: 'GET_ACTOR_REQ',
  getActorReq: payload => ({
    type: actions.GET_ACTOR_REQ,
    payload,
  }),
  SET_ACTOR: 'SET_ACTOR',
  setActor: payload => ({
    type: actions.SET_ACTOR,
    payload,
  }),

  CLEAR_ACTOR: 'CLEAR_ACTOR',
  clearActor: () => ({
    type: actions.CLEAR_ACTOR,
  }),


}

export default actions
