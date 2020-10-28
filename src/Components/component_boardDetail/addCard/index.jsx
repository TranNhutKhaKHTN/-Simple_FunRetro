import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { addDataType1, addDataType2, addDataType3 } from '../../../redux/action/board';
// import Card from '../card';
import './addcard.scss'
import fetchAddCard from './services/addCard';

const AddCard = (props) => {
  const [text, setText] = useState("");
  const [isCard, setIsCard] = useState(2);
  const [display, setDisplay] = useState(true)
  const params = useParams();
  const id = params.id
  const dispatch = useDispatch()

  const changeText = (event) => {
    setText(event.target.value)
  }

  const onAddCard = (e) => {
    const types = props.type
    console.log(types);
    const data = {
      idBoard: id,
      content: text,
      type: types
    }
    // let action
    // if (types === 1) {
    //   action = addDataType1(data)
    // }
    // if (types === 2) {
    //   action = addDataType2(data)
    // }
    // if (types === 3) {
    //   action = addDataType3(data)
    // }
    dispatch(fetchAddCard(data))
    // fetchAddCard(data)
    setDisplay(false)
    // setIsCard(4)
    // const cardInfor = { text: text };
    // props.onAddCard(cardInfor)
  }
  const cancelAddCard = () => {
    setDisplay(false)
    // props.cancelAddCard(props.value);
  }
  // console.log(props.data);
  useEffect(() => {
    if (props.data) {
      setIsCard(1);
      setDisplay(true)
      setText(props.data.content)
    }
  }, [props.data])
  // console.log(props.index);
  const openUpdate = () => {
    setIsCard(3)
  }

  const onDone = () => {
    setIsCard(1);
  }
  return (
    <div className={display ? "display" : "nonedisplay"}>
      {isCard === 1 ?
        (<div className="card" style={{ backgroundColor: props.color }}>
          <div>{text}</div>
          <div className="iconEdit" onClick={openUpdate}><EditOutlined /></div>
        </div>)
        :
        isCard === 2 ?
          <div>
            <div className="addcard" style={{ borderWidth: 7, borderColor: props.color }}>
              <textarea className="text-content" value={text} onChange={changeText}></textarea>
              <div className="footer-card">
                <button onClick={onAddCard}>Add</button>
                <div className="btndelete" onClick={cancelAddCard}><DeleteOutlined /></div>
              </div>
            </div>
          </div> : <div>
            <div className="addcard" style={{ borderWidth: 7, borderColor: props.color }}>
              <textarea className="text-content" value={text} onChange={changeText}></textarea>
              <div className="footer-card">
                <button onClick={onDone}>Done</button>
                <div className="btndelete" onClick={cancelAddCard}><DeleteOutlined /></div>
              </div>
            </div>
          </div>}
    </div>
  );
}

export default AddCard;