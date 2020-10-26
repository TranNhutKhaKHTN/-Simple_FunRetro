import Column from './../../Components/c_boardDetail/column';
import React, { useEffect, useState } from 'react';
import Header from '../../Components/header';
import './boarddetail.scss'
// import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const BoardDetail = (props) => {
  // const data = useSelector(state => state.board)
  // console.log(data);
  const [dataCard, setDataCard] = useState([])
  const match = useParams();
  const id = match.id
  useEffect(() => {
    axios.get(`https://backendretro1712512.herokuapp.com/card/board=${id}`)
      .then(res => {
        setDataCard(res.data.data)
      })
      .catch(error => {
        console.log(error);
      })
  }, [id])

  const col1 = dataCard.filter((data) => {
    return data.type === 1
  })
  const col2 = dataCard.filter((data) => {
    return data.type === 2
  })
  const col3 = dataCard.filter((data) => {
    return data.type === 3
  })
  // console.log(col1);
  return (
    <div>
      <Header></Header>
      <div className="detail-body">
        <div className="col-card">
          <Column type="left" data={col1}></Column>
        </div>
        <div className="col-card">
          <Column type="mid" data={col2}></Column>
        </div>
        <div className="col-card">
          <Column type="right" data={col3}></Column>
        </div>
      </div>
    </div>
  );
}

export default BoardDetail;