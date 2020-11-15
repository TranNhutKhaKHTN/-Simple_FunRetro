import { EditOutlined } from '@ant-design/icons';
import { Button, Input, message } from 'antd';
import Axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { addUser } from '../../redux/action/user';
import './userinfor.scss'

const UserInfor = (props) => {
  const user = useSelector(state => state.user.user)
  const [edit, setEdit] = useState(false)
  const [newname, setNewname] = useState("");
  const [loadingButton, setLoadingButton] = useState(false)
  const dispatch = useDispatch()
  console.log(user);

  const changeText = (e) => {
    const text = e.target.value;
    setNewname(text)
  }

  const clickUpdateUser = () => {
    setLoadingButton(true);
    const newUser = {
      ...user,
      name: newname
    }
    Axios.post("https://backendretro1712512.herokuapp.com/users/update", { ...newUser })
      .then(() => {
        setLoadingButton(false);
        setEdit(false)
        const action = addUser(newUser);
        dispatch(action)
        message.success("Update user Success!")
      })
      .catch(() => {
        setLoadingButton(false);
        setEdit(false)
        message.error("something is ERROR!")
      })
  }

  return (
    <div>
      {user !== null ? <div style={{ display: "flex", alignItems: "center", flexDirection: "column", marginTop: 40 }}>
        <div>{user.username}</div>
        {edit
          ?
          <div className="user__username">
            <div style={{ width: 150 }}><Input placeholder="Basic usage" defaultValue={user.name} onChange={changeText} /></div>
            <div style={{ cursor: "pointer", marginLeft: 20 }}>
              <Button type="primary" onClick={clickUpdateUser} loading={loadingButton}>Done</Button>
            </div>
          </div>
          : <div className="user__username">
            <div>{user.name}</div>
            <div style={{ cursor: "pointer", marginLeft: 20 }} onClick={() => setEdit(true)}>
              <EditOutlined />
            </div>
          </div>}
      </div> : <Redirect push to='/login'></Redirect>}
    </div>
  );
}

export default UserInfor;