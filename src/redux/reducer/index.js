import { combineReducers } from 'redux'
import boardReducer from './board'
import homeReducer from './home'
const rootReducer = combineReducers({
  board: boardReducer,
  home: homeReducer
})
export default rootReducer