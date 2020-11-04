import Column from './../../Components/component_boardDetail/column';
import React, { useEffect } from 'react';
// import Header from '../../Components/header';
import './boarddetail.scss'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataType1, fetchDataType2, fetchDataType3 } from './../../redux/action/board'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { DragDropContext } from 'react-beautiful-dnd';

const BoardDetail = (props) => {
  const dispatch = useDispatch()
  const match = useParams();
  const id = match.id
  const col1 = useSelector(state => state.board.data1)
  const col2 = useSelector(state => state.board.data2)
  const col3 = useSelector(state => state.board.data3)
  useEffect(() => {
    axios.get(`https://backendretro1712512.herokuapp.com/card/board=${id}`)
      .then(res => {
        // setDataCard(res.data.data)
        const dataCard = res.data.data
        const col1 = dataCard.filter((data) => {
          return data.type === 1
        })
        const col2 = dataCard.filter((data) => {
          return data.type === 2
        })
        const col3 = dataCard.filter((data) => {
          return data.type === 3
        })

        const action1 = fetchDataType1(col1)
        const action2 = fetchDataType2(col2)
        const action3 = fetchDataType3(col3)
        dispatch(action1)
        dispatch(action2)
        dispatch(action3)
      })
      .catch(error => {
        console.log(error);
      })
    return () => {
      const action1 = fetchDataType1([])
      const action2 = fetchDataType2([])
      const action3 = fetchDataType3([])
      dispatch(action1)
      dispatch(action2)
      dispatch(action3)
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

    if (SRC === DES) {
      const newList = SRC.filter((_, idx) => (idx !== source.index))
      // Then insert the item at the right location
      newList.splice(destination.index, 0, SRC[source.index])
      if (s === 1) {
        const action1 = fetchDataType1(newList)
        dispatch(action1)
      }
      if (s === 2) {
        const action1 = fetchDataType2(newList)
        dispatch(action1)
      }
      if (s === 3) {
        const action1 = fetchDataType3(newList)
        dispatch(action1)
      }
    }
    else {
      const newListSrc = SRC.filter((_, idx) => (idx !== source.index))
      if (s === 1) {
        const action1 = fetchDataType1(newListSrc)
        dispatch(action1)
      }
      if (s === 2) {
        const action1 = fetchDataType2(newListSrc)
        dispatch(action1)
      }
      if (s === 3) {
        const action1 = fetchDataType3(newListSrc)
        dispatch(action1)
      }

      const newListDes = [...DES];
      const data = {
        ...SRC[source.index],
        type: d
      }
      newListDes.splice(destination.index, 0, data)
      if (d === 1) {
        const action1 = fetchDataType1(newListDes)
        dispatch(action1)
      }
      if (d === 2) {
        const action1 = fetchDataType2(newListDes)
        dispatch(action1)
      }
      if (d === 3) {
        const action1 = fetchDataType3(newListDes)
        dispatch(action1)
      }
    }
  }

  return (
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
  );
}

export default BoardDetail;