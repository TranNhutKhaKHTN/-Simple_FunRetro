import { PlusCircleFilled } from '@ant-design/icons';
// import { Button, Input } from 'antd';
import { Form, Input, Button } from 'antd';
import Modal from 'antd/lib/modal/Modal';
import React, { useState } from 'react';
import './addBoards.scss'


const AddBoard = (props) => {
  const [displayModal, setDisplayModal] = useState(false);

  const showModal = () => {
    setDisplayModal(true)
  }

  const onCancel = () => {
    setDisplayModal(false)
  }

  const onFinish = (value) => {
    // console.log(value);
    const date = new Date();
    const daycreate = `${date.getDate()} ${date.getMonth()}`
    console.log(daycreate)
    props.onCreate(value)
    onCancel()
  }

  const onFinishFailed = (error) => {
    console.log(error);
  }
  return (
    <div>
      <div className="addBoard" onClick={showModal}>
        <PlusCircleFilled />
        <div className="add">Add Board</div>
      </div>
      <div>
        <Modal
          width="400px"
          title="Create Board"
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
                    message: 'Please input Board name!',
                  },
                ]}
              >
                <Input placeholder="Name" />
              </Form.Item>
              <Form.Item >
                <Button type="primary" htmlType="submit" className="btnCreate">Create</Button>
              </Form.Item>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default AddBoard;