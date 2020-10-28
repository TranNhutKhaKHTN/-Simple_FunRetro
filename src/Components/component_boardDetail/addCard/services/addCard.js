// import { useDispatch } from 'react-redux';
import axios from 'axios';
// import { addDataType1, addDataType2, addDataType3 } from '../../../../redux/action/board'
// const dispatch = useDispatch()
export default (card) => {
  // let datas
  const data = axios.post('https://backendretro1712512.herokuapp.com/card/create', { ...card })
    .then((res) => {
      console.log(res.data);
      return res.data.data
    })
    .catch(error => {
      console.log(error);
      return null
    })
  // const data = res.resolve().then(data => { return data })
  return data
}
