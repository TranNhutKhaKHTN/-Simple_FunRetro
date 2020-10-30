import axios from 'axios'

export default (card) => {
  const data = axios.post('http://localhost:5000/card/update', { ...card })
    .then((res) => {
      console.log(card);
      return res.data.status
    })
    .catch(error => {
      console.log(error);
      return 500
    })
  return data
}