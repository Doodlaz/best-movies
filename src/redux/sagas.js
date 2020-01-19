import { all } from 'redux-saga/effects'

import movies from './movies/saga'
import actors from './actors/saga'

export default function* rootSaga() {
  /* getState */
  yield all([movies(), actors()])
}
