import {lobbyReducer} from './lobby'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const createRootReducer = () => combineReducers({
    lobbyReducer
})

const store = createStore(
    createRootReducer(),
    applyMiddleware(thunk)
)

export {store};