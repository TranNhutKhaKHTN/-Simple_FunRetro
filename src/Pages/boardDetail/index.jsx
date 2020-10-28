import Column from './../../Components/component_boardDetail/column';
import React, { useEffect } from 'react';
import Header from '../../Components/header';
import './boarddetail.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataType1, fetchDataType2, fetchDataType3 } from './../../redux/action/board'
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BoardDetail = (props) => {
  // const data = useSelector(state => state.board)
  // console.log(data);
  const dispatch = useDispatch()
  // const [dataCard, setDataCard] = useState([])
  const match = useParams();
  const id = match.id
  const col1 = useSelector(state => state.board.data1)
  const col2 = useSelector(state => state.board.data2)
  const col3 = useSelector(state => state.board.data3)
  useEffect(() => {
    axios.get(`https://backendretro1712512.herokuapp.com/card/board=${id}`)
      .then(res => {
        // setDataCard(res.data.data)
        const dataCard = res.data.data
        const col1 = dataCard.filter((data) => {
          return data.type === 1
        })
        const col2 = dataCard.filter((data) => {
          return data.type === 2
        })
        const col3 = dataCard.filter((data) => {
          return data.type === 3
        })

        const action1 = fetchDataType1(col1)
        const action2 = fetchDataType2(col2)
        const action3 = fetchDataType3(col3)
        dispatch(action1)
        dispatch(action2)
        dispatch(action3)
      })
      .catch(error => {
        console.log(error);
      })
  }, [id, dispatch])


  // console.log(col1);
  return (
    <div>
      <Header></Header>
      <div className="detail-body">
        <div className="col-card">
          <Column type={1} data={col1}></Column>
        </div>
        <div className="col-card">
          <Column type={2} data={col2}></Column>
        </div>
        <div className="col-card">
          <Column type={3} data={col3}></Column>
        </div>
      </div>
    </div>
  );
}

export default BoardDetail;