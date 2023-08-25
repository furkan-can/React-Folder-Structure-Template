import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
});

export default rootReducer;