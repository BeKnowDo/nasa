import { applyMiddleware, compose, createStore } from 'redux'
// import { createLogger } from 'redux-logger'
// import { persistStore, persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native
// import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createBrowserHistory from 'history/createBrowserHistory'

import thunk from 'redux-thunk'
import reducers from './reducers'

// const persistConfig = {
//   key: 'nasa',
//   storage
// }
// const logger = createLogger()
// const persistedReducer = persistReducer(persistConfig, reducers)

// export default () => {
//   let store = createStore(
//     persistedReducer,
//     {},
//     compose(applyMiddleware(thunk))
//   )
//   let persistor = persistStore(store)
//   return { store, persistor }
// }

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose

export default () => {
  const history = createBrowserHistory()
  const store = createStore(
    connectRouter(history)(reducers), // new root reducer with router state
    {},
    composeEnhancers(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      )
    )
  )
  // let store = createStore(
  //   reducers,
  //   {},
  //   composeEnhancers(
  //     applyMiddleware(thunk)
  //   )
  // )
  return { store, history }
}
