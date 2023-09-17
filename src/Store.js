// store/index.js
import { createStore, combineReducers } from 'redux';

import Reducer from './Redux/Reducer';

const rootReducer = combineReducers({
  auth: Reducer,
});

const store = createStore(rootReducer);

export default store;
