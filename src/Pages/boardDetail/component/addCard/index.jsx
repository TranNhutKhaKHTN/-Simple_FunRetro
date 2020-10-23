import { DeleteOutlined } from '@ant-design/icons';
import React, { useState } from 'react';
import Card from '../card';
import './addcard.scss'

const AddCard = (props) => {
  const [text, setText] = useState("");
  const [isCard, setIsCard] = useState(false);

  const changeText = (event) => {
    // console.log(event.target.value);
    setText(event.target.value)
  }

  const onAddCard = (event) => {
    //props.onAddCard();
    // event.preventDefault();
    // console.log(event.target.value);
    setIsCard(true)
    const cardInfor = { text: text };
    props.onAddCard(cardInfor)
  }
  return (
    <div>
      {isCard ? <Card value={text}></Card> : <form>
        <div className="addcard">
          <textarea className="text-content" value={text} onChange={changeText}></textarea>
          {/* <input name="kha" id="kha"></input> */}
          <div className="footer-card">
            <button onClick={onAddCard}>Add</button>
            <div><DeleteOutlined /></div>
          </div>
        </div>
      </form>}
    </div>

  );
}

export default AddCard;