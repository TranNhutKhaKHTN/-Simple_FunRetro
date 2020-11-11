import *as type from './../../actionType/board'
export const fetchDataBoard = (data) => {
  return {
    type: type.FETCH_DATA,
    payload: data
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

export const ACupdateCard = (data) => {
  return {
    type: type.UPDATE_CARD,
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

export const reFetchData = () => {
  return {
    type: type.RE_FETCH_DATA,
    payload: null
  }
}