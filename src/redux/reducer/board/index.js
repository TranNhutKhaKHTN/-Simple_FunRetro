import *as type from './../../actionType/board'

const initialState = {
  data: []
}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_DATA:
      return {
        ...state,
        data: action.payload
      }
    default:
      return state
  }
}
export default boardReducer