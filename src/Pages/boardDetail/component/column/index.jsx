import React, { useState } from 'react';
import AddCard from '../addCard';
import './column.scss'

const Column = (props) => {
  const [addCard, setAddCard] = useState([]);
  const [card, setCard] = useState([]);
  const onAddCard = (cardInfor) => {
    const newcards = [...card, cardInfor];
    setCard(newcards)

    const newadd = [...addCard];
    // newadd.pop();
    // setAddCard(newadd)
  }

  const handlerAddCard = () => {
    const newadd = [...addCard];
    newadd.push(1);
    setAddCard(newadd)
  }

  const listAddCard = addCard.map((data, index) => {
    return (
      <AddCard key={index} onAddCard={onAddCard}></AddCard>
    )
  })

  const listCard = card.map((data, index) => {
    return (<div key={index}>{data.text}</div>)
  })


  return (
    <div>
      <span style={{ backgroundColor: "red", width: 7, height: 7 }}></span>
      <span className="column-name"><b>column name</b></span>
      <button className="btn-addcard" onClick={handlerAddCard}><b>+</b></button>
      {listAddCard}
    </div>
  );
}

export default Column;