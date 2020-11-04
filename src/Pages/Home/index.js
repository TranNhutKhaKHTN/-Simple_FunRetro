import React, { useEffect } from 'react';
import AddBoard from '../../Components/addBoards';
// import Header from '../../Components/header';
import ListBoard from '../../Components/listBoard';
import TabContent from '../../Components/tabContent';
import './home.scss'
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import { addBoard, fetchBoard } from '../../redux/action/home';
import { useDispatch, useSelector } from 'react-redux';
import UpdateBoard from '../../Components/updateBoard';

const Home = (props) => {
  // const [board, setboard] = useState([]);
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
    // console.log(id);
    axios.get(`https://backendretro1712512.herokuapp.com/board/user=${id}`)
      .then((res) => {
        console.log(res.data);
        const action = fetchBoard(res.data.data)
        dispatch(action)
        // setboard(res.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [router, dispatch, user])

  const CeateBoad = (data) => {
    console.log(data);
    const user = JSON.parse(localStorage.getItem("user"));
    const newboard = {
      idUser: user._id,
      name: data.name
    }
    axios.post("https://backendretro1712512.herokuapp.com/board/create", { ...newboard })
      .then((res) => {
        const data = res.data.data
        console.log(data);
        const action = addBoard(data);
        dispatch(action)
        // const addnewBoard = [...board, data]
        // setboard(addnewBoard);
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <div>
      <div>
        {/* <Header /> */}
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