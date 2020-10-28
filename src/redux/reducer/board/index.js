import *as type from './../../actionType/board'

const initialState = {
  data: [],
  data1: [],
  data2: [],
  data3: [],
  loading: false
}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.FETCH_DATA:
      return {
        ...state,
        data: action.payload
      }
    case type.FETCH_DATA_TYPE1:
      return {
        ...state,
        data1: action.payload
      }
    case type.FETCH_DATA_TYPE2:
      return {
        ...state,
        data2: action.payload
      }
    case type.FETCH_DATA_TYPE3:
      return {
        ...state,
        data3: action.payload
      }
    case type.ADD_DATA_TYPE1:
      // const data = [sa]
      return {
        ...state,
        data1: [...state.data1, action.payload]
      }
    case type.ADD_DATA_TYPE2:
      // const data = [sa]
      return {
        ...state,
        data2: [...state.data2, action.payload]
      }
    case type.ADD_DATA_TYPE3:
      // const data = [sa]
      return {
        ...state,
        data3: [...state.data3, action.payload]
      }
    default:
      return state
  }
}
export default boardReducer