import *as type from './../../actionType/home'

const initialState = {
  board: [],
  boardUpdate: null,
  loading: false
}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_BOARD:
      return {
        ...state,
        board: action.payload
      }
    case type.ADD_BOARD:
      const data = [...state.board, action.payload]
      return {
        ...state,
        board: data
      }
    case type.DELETE_BOARD:
      return {
        ...state,
        board: action.payload
      }
    case type.UPDATE_BOARD:
      return {
        ...state,
        boardUpdate: action.payload
      }
    case type.CONFIRM_UPDATE_BOARD:
      const newboard = state.board.map(data => {
        if (data._id === action.payload._id) {
          return action.payload
        }
        else {
          return data
        }
      })
      return {
        ...state,
        board: newboard
      }
    default:
      return state
  }
}
export default boardReducer