import { combineReducers } from 'redux'
import boardReducer from './board'
import homeReducer from './home'
import userReducer from './user'
const rootReducer = combineReducers({
  board: boardReducer,
  home: homeReducer,
  user: userReducer
})
export default rootReducer