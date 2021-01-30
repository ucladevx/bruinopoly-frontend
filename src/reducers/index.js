import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import {lobbyReducer} from './lobby';

const persistConfig = {
    key: 'root',
    storage,
  }

const composeEnhancers = composeWithDevTools({trace: true});
const createRootReducer = () => combineReducers({
    lobbyReducer
})

const persistedReducer = persistReducer(persistConfig, createRootReducer())

let store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk)))
let persistor = persistStore(store)
   
export { store, persistor }