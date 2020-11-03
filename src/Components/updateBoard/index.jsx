// import { PlusCircleFilled } from '@ant-design/icons';
// import { Button, Input } from 'antd';
import { Form, Input, Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import Axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { confirmUpdateBoard, updateBoard } from '../../redux/action/home';
// import Board from '../Board';


const UpdateBoard = (props) => {
  const [displayModal, setDisplayModal] = useState(false);
  const boardUpdate = useSelector(state => state.home.boardUpdate)
  const dispatch = useDispatch()
  useEffect(() => {
    // console.log(boardUpdate);
    if (boardUpdate) {
      setDisplayModal(true)
      // console.log(boardUpdate);
    }
    else {
      setDisplayModal(false)
      // console.log(boardUpdate);
    }
    // return () => {
    //   const action = updateBoard(null)
    //   dispatch(action)
    // }
  }, [boardUpdate])

  // const showModal = () => {
  //   setDisplayModal(true)
  // }

  const onCancel = () => {
    const action = updateBoard(null)
    dispatch(action)
    setDisplayModal(false)
  }

  const onFinish = (value) => {
    // console.log(value);
    // const date = new Date();
    // const daycreate = `${date.getDate()} ${date.getMonth()}`
    // console.log(daycreate)
    // props.onCreate(value)
    const board = {
      ...boardUpdate,
      name: value.name
    }
    console.log(board);
    Axios.post("https://backendretro1712512.herokuapp.com/board/update", { ...board })
      .then(() => {
        // console.log(res.data.data);
        // console.log("success");
        const action = confirmUpdateBoard(board);
        dispatch(action)
      })
      .catch((error) => {
        console.log(error);
      })
    onCancel()
  }

  const onFinishFailed = (error) => {
    console.log(error);
  }
  // console.log(boardUpdate);
  const name = boardUpdate ? boardUpdate.name : null
  // console.log(name);
  return (
    <div>
      <div>
        <Modal
          width="400px"
          title={`Update Board "${name}"`}
          visible={displayModal}
          footer={false}
          onCancel={onCancel}
        >
          <div>

            <Form
              name="basic"
              initialValues={{
                remember: true,

              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                name="name"
                rules={[
                  {
                    required: true,
                    message: 'Please input orther name!',
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item >
                <Button type="primary" htmlType="submit" className="btnCreate">Update</Button>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default UpdateBoard;