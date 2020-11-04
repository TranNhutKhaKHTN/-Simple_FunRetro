import React from 'react';
import { UserOutlined } from '@ant-design/icons'
import './header.scss'
import { Link, useHistory } from 'react-router-dom';
import { Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from './../../redux/action/user'


const Header = (props) => {
  const user = useSelector(state => state.user.user)
  const router = useHistory()
  const dispatch = useDispatch()

  const onLogOut = () => {
    // localStorage.setItem("user", null)
    const action = logOut();
    dispatch(action)
    router.push('/login')
  }

  const clickSingup = () => {
    router.push('/logup')
  }

  const clickLogin = () => {
    router.push('/login')
  }

  const clickEditInfor = () => {
    router.push('/userinformation')
  }
  return (
    <div className="header">
      <Link style={{ color: "white" }} to='/'>KhaRetro</Link>
      <div>
        {user !== null
          ?
          <span>
            <Button type="primary" danger style={{ marginRight: 15 }} onClick={onLogOut}>
              Logout
            </Button>
            <Button danger style={{ marginRight: 15 }} onClick={clickEditInfor}>Edit Infor</Button>
          </span>
          :
          <span>
            <Button type="primary" danger onClick={clickLogin}>
              Signin
            </Button>
            <Button danger style={{ marginLeft: 15, marginRight: 15 }} onClick={clickSingup}>Singup</Button>
          </span>
        }
        <UserOutlined />
      </div>
    </div>
  );
}

export default Header;