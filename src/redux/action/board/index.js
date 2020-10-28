import *as type from './../../actionType/board'
export const fetchDataBoard = () => {
  return {
    type: type.FETCH_DATA,
    payload: null
  }

}

export const fetchDataType1 = (data) => {
  return {
    type: type.FETCH_DATA_TYPE1,
    payload: data
  }
}

export const fetchDataType2 = (data) => {
  return {
    type: type.FETCH_DATA_TYPE2,
    payload: data
  }
}

export const fetchDataType3 = (data) => {
  return {
    type: type.FETCH_DATA_TYPE3,
    payload: data
  }
}

export const addDataType1 = (data) => {
  return {
    type: type.ADD_DATA_TYPE1,
    payload: data
  }
}

export const addDataType2 = (data) => {
  return {
    type: type.ADD_DATA_TYPE2,
    payload: data
  }
}

export const addDataType3 = (data) => {
  return {
    type: type.ADD_DATA_TYPE3,
    payload: data
  }
}