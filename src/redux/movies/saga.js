import { all, takeEvery, call, put } from 'redux-saga/effects'
import { API } from '../../../src/services'
import actions from './actions'

export function* getMovies() {
  yield takeEvery(actions.GET_MOVIES_REQ, function*() {
    try {
      const { data } = yield call(API.getMovies)
      yield put(actions.setMovies(data.results))
    } catch (e) {
      // console.log(e)
    }
  })
}


export default function* moviesSaga() {
  yield all([getMovies()])
}
