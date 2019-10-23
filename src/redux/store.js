import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const middlewares = [logger];
//how does this bit work? 
const store = createStore(rootReducer, applyMiddleware(...middlewares)); 

export default store;