import Column from './../../Components/component_boardDetail/column';
import React, { useEffect, useState } from 'react';
import './boarddetail.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataBoard } from './../../redux/action/board'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DragDropContext } from 'react-beautiful-dnd';
import { Progress } from 'antd';

const BoardDetail = (props) => {
  const dispatch = useDispatch()
  const match = useParams();
  const id = match.id
  const dataBoard = useSelector(state => state.board.data)
  const col1 = dataBoard.filter(data => data.type === 1)
  const col2 = dataBoard.filter(data => data.type === 2)
  const col3 = dataBoard.filter(data => data.type === 3)

  const [percent, setPercent] = useState(0);
  const [displayProg, setDisplayProg] = useState(false)

  useEffect(() => {
    setDisplayProg(true)
    setPercent(10)
    axios.get(`https://backendretro1712512.herokuapp.com/card/board=${id}`)
      .then(res => {
        setTimeout(() => {
          setPercent(70)
        }, 100)
        const dataCard = res.data.data;
        setDisplayProg(true);
        setTimeout(() => {
          setPercent(100)
        }, 200)
        // setPercent(100)
        setTimeout(() => {
          const action = fetchDataBoard(dataCard);
          dispatch(action);
          setDisplayProg(false);
          setPercent(0);
        }, [300])
      })
      .catch(error => {
        console.log(error);
      })
    return () => {
      const action = fetchDataBoard([]);
      dispatch(action)
    }
  }, [id, dispatch])

  const onDragEnd = ({ source, destination }) => {
    if (destination === undefined || destination === null) return null
    // If the source and destination columns are the same
    // AND if the index is the same, the item isn't moving
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null

    const s = Number(source.droppableId);
    const d = Number(destination.droppableId);
    let SRC = (s === 1 ? col1 : (s === 2 ? col2 : col3));
    let DES = (d === 1 ? col1 : (d === 2 ? col2 : col3));
    const src = SRC[source.index];
    const des = DES[destination.index];

    const indexSource = dataBoard.indexOf(src);
    const indexDes = dataBoard.indexOf(des);
    const newSrc = {
      ...src,
      type: d
    }

    const newdata = dataBoard.filter((_, idx) => (idx !== indexSource))
    newdata.splice(indexDes, 0, newSrc)

    const action = fetchDataBoard(newdata);
    dispatch(action)
  }

  return (
    <div>
      <div style={{ height: 3, display: "flex", alignItems: "center", overflow: "hidden", marginTop: 5 }}>
        <Progress percent={percent} showInfo={false} className={displayProg ? null : "noneDisplay"} />
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="detail-body">
          <div className="col-card">
            <Column type={1} data={col1}></Column>
          </div>
          <div className="col-card">
            <Column type={2} data={col2}></Column>
          </div>
          <div className="col-card">
            <Column type={3} data={col3}></Column>
          </div>
        </div>
      </DragDropContext>
    </div>

  );
}

export default BoardDetail;