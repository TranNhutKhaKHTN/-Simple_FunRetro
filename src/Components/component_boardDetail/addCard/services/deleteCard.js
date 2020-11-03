import axios from 'axios'

export default (card) => {
  const data = axios.post('https://backendretro1712512.herokuapp.com/card/delete', { id: card })
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