import *as type from './../../actionType/user'

const users = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : null

const initialState = {
  user: users,
  loading: false
}

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_USER:
      const user = JSON.stringify(action.payload)
      localStorage.setItem("user", user)
      return {
        ...state,
        user: action.payload
      }
    case type.LOGOUT:
      localStorage.setItem("user", null)
      return {
        ...state,
        user: null
      }
    default:
      return state
  }
}
export default boardReducer