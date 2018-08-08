import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import gods from 'store/reducers/gods-reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default (initialStore) => {
  const store = createStore(
    combineReducers({
      gods
    }),
    initialStore,
    composeEnhancers(applyMiddleware(thunk))
  )

  return store
}
