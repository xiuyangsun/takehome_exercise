import { combineReducers } from 'redux'
import homeReducer from './reducers/index'

export default combineReducers({
  home: homeReducer
})
