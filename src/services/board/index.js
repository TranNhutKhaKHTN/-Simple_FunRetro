import { getApi, postApi } from "../api"
import *as constenv from '../../constenv'

const baseUrl = constenv.BASE_URL;

export const getAllCard = (id) => {
  return getApi(`${baseUrl}card/board=${id}`)
}

export const apiDeleteBoard = (id) => {
  return postApi(`${baseUrl}board/delete`, { id })
}

export const apiGetAllBoard = (idUser) => {
  return getApi(`${baseUrl}board/user=${idUser}`)
}

export const apiCreateBoard = (newboard) => {
  return postApi(`${baseUrl}board/create`, { ...newboard })
}