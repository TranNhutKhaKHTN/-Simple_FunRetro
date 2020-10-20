import React, { useState } from 'react';
import AddBoard from '../../Components/addBoards';
import Header from '../../Components/header';
import ListBoard from '../../Components/listBoard';
import TabContent from '../../Components/tabContent';
import './home.scss'

const Home = (props) => {

  const [board, setboard] = useState([]);
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