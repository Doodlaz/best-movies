// Setup
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'

// Reducers
import reducers from './reducers'

// Middleware
import createSagaMiddleware from 'redux-saga'

// Root saga
import rootSaga from './sagas'

// Creating saga worker
const sagaMiddleware = createSagaMiddleware()
// Compose enchancers
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// Group all reducers
const combinedReducers = combineReducers({
  ...reducers,
})

// Create rootReducers which watches logout action and sets store to initial state in that case
const rootReducer = (state, action) => {
  if (action.type === 'LOGOUT_USER') {
    state = undefined
  }
  return combinedReducers(state, action)
}

// Creating store with combined reducers and enchancers
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)))

// Run saga worker with root saga
sagaMiddleware.run(rootSaga)
