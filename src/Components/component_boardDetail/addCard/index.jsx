import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import Modal from 'antd/lib/modal/Modal';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addDataType1, addDataType2, addDataType3 } from '../../../redux/action/board';
// import { addDataType1, addDataType2, addDataType3 } from '../../../redux/action/board';
// import Card from '../card';
import './addcard.scss'
import fetchAddCard from './services/addCard';
import deleteCard from './services/deleteCard'

const AddCard = (props) => {
  const [text, setText] = useState("");
  const [isCard, setIsCard] = useState(2);
  const [display, setDisplay] = useState(true)
  const [displayModal, setDisplayModal] = useState(false)
  const [confirmLoading, setConfirmLoading] = useState(false)
  const params = useParams();
  const id = params.id
  const dispatch = useDispatch()

  const changeText = (event) => {
    setText(event.target.value)
  }

  const onAddCard = async (e) => {
    const types = props.type
    setDisplay(false)
    const data = {
      idBoard: id,
      content: text,
      type: types
    }

    console.log(types);

    const datas = await fetchAddCard(data)
    console.log(datas);
    let action;
    if (types === 1) {
      action = addDataType1(datas)
    }
    if (types === 2) {
      action = addDataType2(datas)
    }
    if (types === 3) {
      action = addDataType3(datas)
    }
    dispatch(action)
    // setIsCard(1)
  }

  const ondeleteCard = async () => {
    if (props.data) {
      showModal();
    }
    else {
      setDisplay(false)
    }
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

  const handleOk = async () => {
    console.log(props.data._id);
    const status = await deleteCard(props.data._id)
    if (status === 200) {
      console.log("delete Success")
    }
    setConfirmLoading(true);
    setTimeout(() => {
      setConfirmLoading(true);
      setDisplayModal(false)
      setDisplay(false)
    }, 1500);

  }

  const handleCancel = () => {
    setDisplayModal(false)
  }

  const showModal = () => {
    setDisplayModal(true)
  }
  return (
    <div className={display ? "display" : "nonedisplay"}>
      <Modal
        title="XÓA CARD"
        visible={displayModal}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>Bạn có muốn xóa card này không</p>
      </Modal>
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
                <div className="btndelete" onClick={ondeleteCard}><DeleteOutlined /></div>
              </div>
            </div>
          </div> : <div>
            <div className="addcard" style={{ borderWidth: 7, borderColor: props.color }}>
              <textarea className="text-content" value={text} onChange={changeText}></textarea>
              <div className="footer-card">
                <button onClick={onDone}>Done</button>
                <div className="btndelete" onClick={ondeleteCard}><DeleteOutlined /></div>
              </div>
            </div>
          </div>}
    </div>
  );
}

export default AddCard;