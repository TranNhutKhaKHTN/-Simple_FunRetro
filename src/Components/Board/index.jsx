import { ClockCircleOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard, updateBoard } from '../../redux/action/home'
import { Link } from 'react-router-dom';
import './board.scss'
import { message, Modal } from 'antd';
import { apiDeleteBoard, getAllCard } from '../../services/board';
import ShareBoard from '../shareBoard';

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
  const location = window.location.href
  const id = data._id
  const url = `${location}boarddetail/${id}`

  const dispatch = useDispatch()
  useEffect(() => {
    const cardOfBoard = async () => {
      try {
        const res = await getAllCard(id);
        setListCard(res.data.data)
      } catch (error) {
        message.error("something is error")
      }
    }
    cardOfBoard()
  }, [id])

  const showConfirm = (e) => {
    e.preventDefault();
    confirm({
      title: 'Do you Want to delete this items?',
      icon: <ExclamationCircleOutlined />,
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
    const action = updateBoard(props.data);
    dispatch(action)
  }

  const onDeleteBoard = async (event) => {
    try {
      //call api delete board
      const res = await apiDeleteBoard(id)
      if (res.data.status === 200) {
        const data = deleteItem(listBoard, id);
        const action = deleteBoard(data);
        dispatch(action)
      }
      else {
        message.error("delete fail!")
      }
    } catch (error) {
      message.error("delete fail!")
    }
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
    <div className="board">
      <Link to={`/boarddetail/${id}`}>
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
      </Link>
      <div className="board_gr">
        <div style={{ width: "40%", fontSize: 15 }} className="board_action" onClick={onUpdateCard}>
          EDIT
          </div>
        <div style={{ width: "40%", fontSize: 15 }} className="board_action" onClick={showConfirm}>
          DELETE
          </div>
        <div style={{ width: "20%", fontSize: 15 }} className="board_action"><ShareBoard url={url} /></div>
      </div>
    </div>
  );
}

export default Board;