import *as types from './../../actionType/user'

export const addUser = (data) => {
  return {
    type: types.ADD_USER,
    payload: data
  }
}

export const logOut = () => {
  return {
    type: types.LOGOUT,
    payload: null
  }
}