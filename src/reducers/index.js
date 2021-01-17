import {lobbyReducer} from './lobby'

import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const composeEnhancers = composeWithDevTools({trace: true});
const createRootReducer = () => combineReducers({
    lobbyReducer
})

const store = createStore(
    createRootReducer(),
    composeEnhancers(applyMiddleware(thunk))
)

export {store};