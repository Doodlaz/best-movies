import { all } from 'redux-saga/effects'

import movies from './movies/saga'

export default function* rootSaga() {
  /* getState */
  yield all([movies()])
}
