import { ClockCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard, updateBoard } from './../../redux/action/home'
import { Link } from 'react-router-dom';
import './board.scss'
import { Modal } from 'antd';
// import UpdateBoard from '../updateBoard';

const { confirm } = Modal;
const deleteItem = (array, id) => {
  return array.filter((data) => {
    return data._id !== id
  })
}

const Board = (props) => {
  const data = props.data
  const [listCard, setListCard] = useState([])
  const listBoard = useSelector(state => state.home.board)
  // const [showUpdate, setShowUpdate] = useState(false)
  const dispatch = useDispatch()

  const id = data._id
  useEffect(() => {
    const cardOfBoard = async () => {
      await axios.get(`https://backendretro1712512.herokuapp.com/card/board=${id}`)
        .then((res) => {
          setListCard(res.data.data)
          return res.data.data
        })
        .catch((error) => {
          return null;
        })
    }
    cardOfBoard()
  }, [id])

  const showConfirm = (e) => {
    e.preventDefault();
    confirm({
      title: 'Do you Want to delete this items?',
      icon: <ExclamationCircleOutlined />,
      // content: 'Some descriptions',
      onOk() {
        onDeleteBoard()
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }

  const onUpdateCard = (e) => {
    e.preventDefault();
    // const link = "hello every body";
    // link.select()
    // document.execCommand("copy");
    // setShowUpdate(true)
    const action = updateBoard(props.data);
    dispatch(action)
  }


  const onDeleteBoard = async (event) => {
    // event.preventDefault();
    await axios.post("https://backendretro1712512.herokuapp.com/board/delete", { id })
      .then((res) => {
        const data = deleteItem(listBoard, id);
        console.log(data);
        const action = deleteBoard(data);
        dispatch(action)
      })
      .catch((error) => {
        // alert("delete fail")
        console.log(error);
      })
  }

  const cl1 = listCard.filter((data) => data.type === 1)
  const cl2 = listCard.filter((data) => data.type === 2)
  const cl3 = listCard.filter((data) => data.type === 3)
  const num1 = cl1.map((data, index) => {
    return <div key={index} className="numberCard num1"></div>
  })
  const num2 = cl2.map((data, index) => {
    return <div key={index} className="numberCard num2"></div>
  })
  const num3 = cl3.map((data, index) => {
    return <div key={index} className="numberCard num3"></div>
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
        <div style={{ width: "45%" }} className="board_action" onClick={onUpdateCard}>
          UPDATE
        </div>
        <div style={{ width: "45%" }} className="board_action" onClick={showConfirm}>
          DELETE
        </div>
        <div style={{ width: "10%" }} className="board_action">i</div>
      </div>
      {/* <UpdateBoard showUpdate={showUpdate} /> */}
    </Link>
  );
}

export default Board;