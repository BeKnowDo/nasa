import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native

import thunk from 'redux-thunk'
import reducers from './reducers'

const persistConfig = {
  key: 'nasa',
  storage
}
const logger = createLogger()
const persistedReducer = persistReducer(persistConfig, reducers)

export default () => {
  let store = createStore(
    persistedReducer,
    {},
    compose(applyMiddleware(thunk))
  )
  let persistor = persistStore(store)
  return { store, persistor }
}
