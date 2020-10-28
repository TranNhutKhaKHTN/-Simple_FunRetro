import React, { useState } from 'react';
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
      <AddCard key={index} color={color} type={props.type}></AddCard>
    )
  })
  // console.log(props.data);
  const datas = props.data
  const listcard = datas.map((data, index) => {
    return (
      <AddCard key={index} data={data} color={color} type={props.type}></AddCard>
    )
  })

  return (
    <div>
      <span style={{ backgroundColor: "red", width: 7, height: 7 }}></span>
      <span className="column-name"><b>column name</b></span>
      <button className="btn-addcard" onClick={handlerAddCard}><b>+</b></button>
      {listAddCard}
      {listcard}

    </div>
  );
}

export default Column;