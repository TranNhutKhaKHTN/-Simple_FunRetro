import React from 'react';
import Board from '../Board';
import './listboard.scss'

const ListBoard = (props) => {
  const { data } = props
  let listBoard
  if (data) {
    listBoard = data.map((board, index) => {
      return <Board key={index} data={board}></Board>
    })
  }
  return (
    <div className="listBoard">
      {listBoard}
    </div>
  );
}

export default ListBoard;