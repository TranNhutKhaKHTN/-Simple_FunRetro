import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import React, { useState } from 'react'
// import React, { useEffect } from 'react';
import './formLogin.scss'
import { useHistory } from 'react-router-dom';
import { addUser } from '../../../../redux/action/user';
import { useDispatch } from 'react-redux';


const FormLogin = (props) => {
  const [loadingBtn, setLoadingBtn] = useState(false)
  const router = useHistory()
  const { register, handleSubmit } = useForm()
  const dispatch = useDispatch()
  // useEffect = (() => {
  //   const user = localStorage.getItem("user")
  //   if (user) {
  //     router.push("/")
  //   }
  // })

  const onSubmit = (dataLogin) => {
    // console.log(dataLogin);
    setLoadingBtn(true)
    Axios.post('https://backendretro1712512.herokuapp.com/users/login', { ...dataLogin })
      .then(res => {
        const { data } = res
        console.log(res);
        if (res.data.status === 200) {
          const user = data.data;
          console.log(user);
          localStorage.setItem("user", JSON.stringify(user))
          const action = addUser(user)
          dispatch(action)
          router.push('/')
        }
        else {
          alert("đăng nhập thất bại")
        }
        setLoadingBtn(false)
      })
      .catch(error => {
        setLoadingBtn(false)
        console.log(error);
      })
  }
  return (
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <div style={{ fontSize: 25, marginTop: 25 }}><b>Login</b></div>
      <input placeholder="userame" name="username" className="inputLogin" ref={register({ required: true })}></input>
      <input placeholder="Password" type="password" name="password" className="inputLogin" ref={register({ required: true })}></input>
      <div className="forgotpass">
        <div> Forgot password?</div>
      </div>
      <Button type="primary" loading={loadingBtn} htmlType="submit" className="button-login" size="large">
        Login
      </Button>

      <Button type="primary" className="button-login gglogin" size="large">
        Login Google
      </Button>
      <div style={{ marginTop: 15, color: "#af6dc0" }}> Or register</div>
    </form>
  );
}

export default FormLogin;