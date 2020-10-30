import { ClockCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './board.scss'

const Board = (props) => {
  const data = props.data
  const [listCard, setListCard] = useState([])
  // const route = useRouter();
  // route.push("/login")
  const id = data._id
  useEffect(() => {
    const cardOfBoard = async () => {
      await axios.get(`https://backendretro1712512.herokuapp.com/card/board=${id}`)
        .then((res) => {
          // console.log(res.data.data);
          setListCard(res.data.data)
          return res.data.data
        })
        .catch((error) => {
          return null;
        })
    }
    cardOfBoard()
  }, [id])
  const cl1 = listCard.filter((data) => data.type === 1)
  const cl2 = listCard.filter((data) => data.type === 2)
  const cl3 = listCard.filter((data) => data.type === 3)
  const num1 = cl1.map((data, index) => {
    return <div className="numberCard num1"></div>
  })
  const num2 = cl2.map((data, index) => {
    return <div className="numberCard num2"></div>
  })
  const num3 = cl3.map((data, index) => {
    return <div className="numberCard num3"></div>
  })

  return (
    <Link className="board" to={`/boarddetail/${id}`}>
      <div>
        <div className="board_name">{data.name}</div>
        <div className="board_infor">
          <div><ClockCircleOutlined /></div>
          <div>Card: {listCard.length}</div>
        </div>
      </div>
      <div className="board_numberofBoard">
        <div>{num1}</div>
        <div>{num2}</div>
        <div>{num3}</div>
      </div>
      <div className="board_gr">
        <div style={{ width: "45%" }}>
          URL
        </div>
        <div style={{ width: "45%" }}>
          CLONE
        </div>
        <div style={{ width: "10%" }}>i</div>
      </div>
    </Link>
  );
}

export default Board;