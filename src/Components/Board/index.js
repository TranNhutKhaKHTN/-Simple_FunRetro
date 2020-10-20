import { ClockCircleOutlined } from '@ant-design/icons';
import React from 'react';
import './board.scss'

const Board = (props) => {
  const data = props.data
  return (
    <div className="board">
      <div className="board_name">{data.name}</div>
      <div className="board_infor">
        <div><ClockCircleOutlined /></div>
        <div>number card</div>
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
    </div>
  );
}

export default Board;