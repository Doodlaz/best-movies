import { all, takeEvery, call, put } from 'redux-saga/effects'
import { API } from '../../../src/services'
import actions from './actions'

export function* getActors() {
  yield takeEvery(actions.GET_ACTORS_REQ, function*(action) {
    try {
      const { data } = yield call(API.getActors, action.payload)
      yield put(actions.setActors(data))
    } catch (e) {
      // console.log(e)
    }
  })
}

export function* getActor() {
  yield takeEvery(actions.GET_ACTOR_REQ, function*(action) {
    try {
      const { data } = yield call(API.getActor, action.payload)
      yield put(actions.setActor(data))
    } catch (e) {
      // console.log(e)
    }
  })
}


export default function* actorsSaga() {
  yield all([getActors(), getActor()])
}
