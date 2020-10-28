// import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addDataType1, addDataType2, addDataType3 } from '../../../../redux/action/board'
// const dispatch = useDispatch()
export default (card) => {
  const data = axios.post('https://backendretro1712512.herokuapp.com/card/create', { ...card })
    .then((res) => {
      console.log(res.data);
      return data
    })
    .catch(error => {
      console.log(error);
      return null
    })

  if (data) {
    const types = card.type
    let action;
    if (types === 1) {
      action = addDataType1(card)
    }
    if (types === 2) {
      action = addDataType2(card)
    }
    if (types === 3) {
      action = addDataType3(card)
    }
    return action
  }
  else {
    //action falie
  }
}
