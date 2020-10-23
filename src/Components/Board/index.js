import { ClockCircleOutlined } from '@ant-design/icons';
import React from 'react';
import { Link } from 'react-router-dom';
import './board.scss'

const Board = (props) => {
  const data = props.data
  // const route = useRouter();
  // route.push("/login")

  return (
    <Link className="board" to="/boarddetail">
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
    </Link>
  );
}

export default Board;