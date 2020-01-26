import { all, takeEvery, call, put } from 'redux-saga/effects'
import { API } from '../../../src/services'
import actions from './actions'

export function* getMovies() {
  yield takeEvery(actions.GET_MOVIES_REQ, function*(action) {
    try {
      const { data } = yield call(API.getMovies, action.payload)
      yield put(actions.setMovies(data))
    } catch (e) {
      // console.log(e)
    }
  })
}

export function* getMovie() {
  yield takeEvery(actions.GET_MOVIE_REQ, function*(action) {
    try {
      const { data } = yield call(API.getMovie, action.payload)
      yield put(actions.setMovie(data))
    } catch (e) {
      // console.log(e)
    }
  })
}

export function* getMovieActors() {
  yield takeEvery(actions.GET_MOVIE_ACTORS_REQ, function*(action) {
    try {
      const { data } = yield call(API.getMovieActors, action.payload)
      yield put(actions.setMovieActors(data))
    } catch (e) {
      // console.log(e)
    }
  })
}

export function* getMovieTrailer() {
  yield takeEvery(actions.GET_MOVIE_TRAILER_REQ, function*(action) {
    try {
      const { data } = yield call(API.getMovieTrailer, action.payload)
      yield put(actions.setMovieTrailer(data))
    } catch (e) {
      // console.log(e)
    }
  })
}


export default function* moviesSaga() {
  yield all([
    getMovies(),
    getMovie(),
    getMovieActors(),
    getMovieTrailer(),
  ])
}
