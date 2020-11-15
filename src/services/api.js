import axios from 'axios'

export const getApi = (url) => (axios.get(url));

export const postApi = (url, data) => (axios.post(url, { ...data }));