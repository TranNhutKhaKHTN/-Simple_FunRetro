import { DeleteOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
// import Card from '../card';
import './addcard.scss'

const AddCard = (props) => {
  const [text, setText] = useState("");
  const [isCard, setIsCard] = useState(false);
  const [display, setDisplay] = useState(true)

  const changeText = (event) => {
    setText(event.target.value)
  }

  const onAddCard = (event) => {
    setIsCard(true)
    const cardInfor = { text: text };
    props.onAddCard(cardInfor)
  }
  const cancelAddCard = () => {
    setDisplay(false)
    // props.cancelAddCard(props.value);
  }
  console.log(props.data);
  useEffect(() => {
    if (props.data) {
      setIsCard(true);
      setDisplay(true)
    }
  }, [props.data])
  // console.log(props.index);
  return (
    <div className={display ? "display" : "nonedisplay"}>
      {isCard ? <div className="card" style={{ backgroundColor: props.color }}>
        {props.data ? props.data.content : text}
      </div> : <form>
          <div className="addcard" style={{ borderWidth: 7, borderColor: props.color }}>
            <textarea className="text-content" value={text} onChange={changeText}></textarea>
            <div className="footer-card">
              <button onClick={onAddCard}>Add</button>
              <div className="btndelete" onClick={cancelAddCard}><DeleteOutlined /></div>
            </div>
          </div>
        </form>}
    </div>
  );
}

export default AddCard;