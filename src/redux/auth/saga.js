// import { all, takeEvery, put, call } from 'redux-saga/effects'
// // import actions from './actions'
// import { API } from 'src/services'
//
// export function* signIn() {
//   // yield takeEvery(actions.LOGIN_REQ, function*(action) {
//   //   try {
//   //     const { data } = yield call(API.login, action.payload)
//   //     yield localStorage.setItem('jwt', data.accessToken)
//   //     yield put(actions.setAuth(data))
//   //   } catch (e) {
//   //     // console.log(e)
//   //   }
//   // })
// }
//
// export function* logOut() {
//   // yield takeEvery(actions.LOGOUT_REQ, function*() {
//   //   try {
//   //     yield localStorage.removeItem('jwt')
//   //   } catch (e) {
//   //     // console.log(e)
//   //   }
//   // })
// }
//
// export default function* rootSaga() {
//   yield all([signIn(), logOut()])
// }
