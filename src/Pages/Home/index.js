import React, { useEffect } from 'react';
import AddBoard from '../../Components/addBoards';
import ListBoard from '../../Components/listBoard';
import TabContent from '../../Components/tabContent';
import './home.scss'
import { useHistory } from 'react-router-dom';
import { addBoard, fetchBoard } from '../../redux/action/home';
import { useDispatch, useSelector } from 'react-redux';
import UpdateBoard from '../../Components/updateBoard';
import { message } from 'antd';
import { apiCreateBoard, apiGetAllBoard } from '../../services/board';

const Home = (props) => {
  const board = useSelector(state => state.home.board)
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch();

  const router = useHistory()

  useEffect(() => {
    if (user === null) {
      router.push('/login')
      return;
    }
    const id = user._id

    //define function get all board for home
    const getAllBoardForHome = async (iduser) => {
      try {
        const res = await apiGetAllBoard(iduser);
        const action = fetchBoard(res.data.data)
        dispatch(action)
      } catch (error) {
        message.error("something is error!")
      }
    }

    //call function with iduser = id
    getAllBoardForHome(id)
    return () => {
      const action = fetchBoard([])
      dispatch(action)
    }
  }, [router, dispatch, user])

  const CeateBoad = async (data) => {
    console.log(data);
    const user = JSON.parse(localStorage.getItem("user"));
    const newboard = {
      idUser: user._id,
      name: data.name
    }

    try {
      const res = await apiCreateBoard(newboard)
      const action = addBoard(res.data.data);
      dispatch(action)
    } catch (error) {
      message.error("something is error!")
    }
  }

  return (
    <div>
      <div>
        <TabContent />
      </div>
      <div className="body">
        <div className="titleMyboard">
          My boards
        </div>
        <div className="listboard">
          <AddBoard onCreate={CeateBoad}></AddBoard>
          <ListBoard data={board}></ListBoard>
          <UpdateBoard />
        </div>
      </div>
    </div>
  );
}

export default Home;