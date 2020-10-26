import React, { useEffect, useState } from 'react';
import AddBoard from '../../Components/addBoards';
import Header from '../../Components/header';
import ListBoard from '../../Components/listBoard';
import TabContent from '../../Components/tabContent';
import './home.scss'
import axios from 'axios'

const Home = (props) => {
  const [board, setboard] = useState([]);
  useEffect(() => {
    axios.get("https://backendretro1712512.herokuapp.com/board")
      .then((res) => {
        console.log(res.data);
        setboard(res.data.data)
      })
      .catch((error) => {
        console.log(error);
      })
  }, [])

  const CeateBoad = (data) => {
    const addnewBoard = [...board, data]
    setboard(addnewBoard);
  }
  return (
    <div>
      <div>
        <Header />
        <TabContent />
      </div>
      <div className="body">
        <div className="titleMyboard">
          My boards
        </div>
        <div className="listboard">
          <AddBoard onCreate={CeateBoad}></AddBoard>
          <ListBoard data={board}></ListBoard>
        </div>
      </div>
    </div>
  );
}

export default Home;