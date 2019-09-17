import { combineReducers } from 'redux';
import gifReducer from './gifs';
import numberReducer from './number';

export default combineReducers({
  gifs: gifReducer,
  index: numberReducer
});
