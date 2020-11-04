import { DeleteOutlined, EditOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import TextArea from 'antd/lib/input/TextArea';
import { Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { addDataType1, addDataType2, addDataType3 } from '../../../redux/action/board';
// import { addDataType1, addDataType2, addDataType3 } from '../../../redux/action/board';
// import Card from '../card';
import './addcard.scss'
import fetchAddCard from './services/addCard';
import deleteCard from './services/deleteCard'
import updateCard from './services/updateCard'

const { confirm } = Modal;

const AddCard = (props) => {
  const [text, setText] = useState("");
  const [isCard, setIsCard] = useState(2);
  const [display, setDisplay] = useState(true)
  // const [displayModal, setDisplayModal] = useState(false)
  // const [confirmLoading, setConfirmLoading] = useState(false)
  const params = useParams();
  const id = params.id
  const dispatch = useDispatch()

  const changeText = (event) => {
    setText(event.target.value)
  }

  const onAddCard = async () => {
    const types = props.type
    setDisplay(false)
    const data = {
      idBoard: id,
      content: text,
      type: types
    }

    console.log(types);

    const datas = await fetchAddCard(data)
    // console.log(datas);
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
      showConfirm()
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

  const onUpdateCard = async () => {
    setIsCard(1);
    const types = props.type
    const data = {
      _id: props.data._id,
      idBoard: id,
      content: text,
      type: types
    }

    let update
    if (props.data.content !== text) {
      update = await updateCard(data)
      // chưa sửa update card
    }
    if (update === 500) {
      alert("error update");
    }
  }

  const handleOk = async () => {
    // console.log(props.data._id);
    // setConfirmLoading(true);
    const status = await deleteCard(props.data._id)
    if (status === 200) {
      console.log("delete Success")
    }

    // setTimeout(() => {
    //   // setConfirmLoading(true);
    //   // setDisplayModal(false)
    //   // setDisplay(false)
    // }, 500);
    setDisplay(false)

  }

  // const handleCancel = () => {
  //   setDisplayModal(false)
  // }

  const showConfirm = () => {
    confirm({
      title: 'Do you Want to delete this items?',
      icon: <ExclamationCircleOutlined />,
      content: 'Are you sure',
      onOk() {
        handleOk()
      },
      onCancel() {
        console.log('Cancel');
      },
    });
  }
  return (
    <div className={display ? "display" : "nonedisplay"}>

      <Draggable draggableId={`${props.type}${props.index}`} index={props.index}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >

            {/* style={{ marginTop: 10, marginBottom: 10 }} */}
            <div style={{ marginBottom: 10, marginTop: 10 }}>
              {/* <Modal
                width="300px"
                title="XÓA CARD"
                visible={displayModal}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
              >
                <p>Are you SURE?!!!</p>
              </Modal> */}
              {isCard === 1 ?
                (<div className="card" style={{ backgroundColor: props.color }}>
                  <div className="text-content">{text}</div>
                  <div className="iconEdit" onClick={openUpdate}><EditOutlined /></div>
                </div>)
                :
                isCard === 2 ?

                  <div className="addcard" style={{ borderWidth: 7, borderColor: props.color }}>
                    <TextArea className="text-content" value={text} onChange={changeText} placeholder="text" autoSize />
                    <div className="footer-card">
                      <button onClick={onAddCard}>Add</button>
                      <div className="btndelete" onClick={ondeleteCard}><DeleteOutlined /></div>
                    </div>
                  </div>
                  :
                  <div className="addcard" style={{ borderWidth: 7, borderColor: props.color }}>
                    {/* <textarea className="text-content" value={text} onChange={changeText}></textarea> */}
                    <TextArea className="text-content" value={text} onChange={changeText} placeholder="text" autoSize />
                    <div className="footer-card">
                      <button onClick={onUpdateCard}>Done</button>
                      <div className="btndelete" onClick={ondeleteCard}><DeleteOutlined /></div>
                    </div>
                  </div>
              }
            </div>
          </div>
        )}
      </Draggable>
    </div>
  );
}

export default AddCard;