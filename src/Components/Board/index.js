import { ClockCircleOutlined, ExclamationCircleOutlined, ShareAltOutlined } from '@ant-design/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBoard, updateBoard } from './../../redux/action/home'
import { Link } from 'react-router-dom';
import './board.scss'
import { Button, message, Modal } from 'antd';

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
  const [displayModalShare, setDisplayModalShare] = useState(false)
  // const [showUpdate, setShowUpdate] = useState(false)
  const dispatch = useDispatch()
  const location = window.location.href
  // console.log(loca);
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

  const onCopyLink = (e) => {
    e.preventDefault()
    setDisplayModalShare(true)
  }

  const CopyOK = () => {
    setDisplayModalShare(false)
  }

  const CopyCancel = () => {
    setDisplayModalShare(false)
  }

  const copylinkBoard = () => {
    const idboard = `input${id}`
    const copyText = document.getElementById(idboard);
    copyText.select();
    copyText.setSelectionRange(0, 99999)
    document.execCommand("copy");
    // alert("Copied the text: " + copyText.value);
    message.success("copy link success!")
  }
  return (
    <div>
      <Modal
        title="Title"
        visible={displayModalShare}
        onOk={CopyOK}
        // confirmLoading={confirmLoading}
        onCancel={CopyCancel}
      >
        <div className="modalInfor">
          <input id={`input${id}`} value={`${location}boarddetail/${id}`} style={{ width: "80%" }} />
          <span><Button type="primary" onClick={copylinkBoard}> Copy</Button></span>
        </div>
      </Modal>
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
          <div style={{ width: "40%", fontSize: 15 }} className="board_action" onClick={onUpdateCard}>
            EDIT
          </div>
          <div style={{ width: "40%", fontSize: 15 }} className="board_action" onClick={showConfirm}>
            DELETE
          </div>
          <div style={{ width: "20%", fontSize: 15 }} className="board_action" onClick={onCopyLink}><ShareAltOutlined /></div>
        </div>
        {/* <UpdateBoard showUpdate={showUpdate} /> */}
      </Link>
    </div>
  );
}

export default Board;