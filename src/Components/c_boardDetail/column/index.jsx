import React, { useState } from 'react';
import AddCard from '../addCard';
import './column.scss'

const Column = (props) => {
  const [addCard, setAddCard] = useState([]);
  const [card, setCard] = useState([]);
  const onAddCard = (cardInfor) => {
    const newcards = [...card, cardInfor];
    setCard(newcards)
  }

  const type = props.type;
  let color;
  if (type === "mid") {
    color = "#E91E63"
  } else {
    if (type === "right") {
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
      <AddCard key={index} onAddCard={onAddCard} color={color}></AddCard>
    )
  })
  console.log(props.data);
  const datas = props.data
  const listcard = datas.map((data, index) => {
    return (
      <AddCard key={index} data={data} onAddCard={onAddCard} color={color}></AddCard>
    )
  })

  return (
    <div>
      <span style={{ backgroundColor: "red", width: 7, height: 7 }}></span>
      <span className="column-name"><b>column name</b></span>
      <button className="btn-addcard" onClick={handlerAddCard}><b>+</b></button>
      {listcard}
      {listAddCard}
    </div>
  );
}

export default Column;