import React, { useState } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import AddCard from '../addCard';
import './column.scss'

const Column = (props) => {
  const [addCard, setAddCard] = useState([]);

  const type = props.type;
  let color;
  if (type === 2) {
    color = "#E91E63"
  } else {
    if (type === 3) {
      color = "#9C27B0"
    }
  }


  const handlerAddCard = () => {

    const n = addCard.length + 1
    const newadd = [...addCard, n];
    console.log(newadd);
    setAddCard(newadd)

  }


  const listAddCard = addCard.map((data, index) => {
    return (
      <AddCard key={index} index={index} color={color} type={props.type}></AddCard>
    )
  })
  // console.log(props.data);
  const datas = props.data
  const listcard = datas.map((data, index) => {
    return (
      <div key={index}>
        <AddCard index={index} data={data} color={color} type={props.type}></AddCard>
      </div>
    )
  })

  return (
    <div>
      <span style={{ backgroundColor: "red", width: 7, height: 7 }}></span>
      <span className="column-name"><b>column name</b></span>
      <button className="btn-addcard" onClick={handlerAddCard}><b>+</b></button>

      <Droppable droppableId={`${props.type}`}>

        {provided => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {listAddCard}
            {listcard}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

    </div>
  );
}

export default Column;