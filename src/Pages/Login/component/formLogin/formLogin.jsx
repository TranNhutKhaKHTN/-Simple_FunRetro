import { Button } from 'antd';
import { useForm } from 'react-hook-form';
import Axios from 'axios';
import React from 'react'
// import React, { useEffect } from 'react';
import './formLogin.scss'
import { useHistory } from 'react-router-dom';

const FormLogin = (props) => {
  const router = useHistory()
  const { register, handleSubmit } = useForm()

  // useEffect=(()=>{
  //   const user = localStorage.getItem("user")
  //   if(user)
  //   {
  //     push("/")
  //   }
  // })

  const onSubmit = (dataLogin) => {
    console.log(dataLogin);
    Axios.post('http://localhost:5000/users/login', { ...dataLogin })
      .then(res => {
        const { data } = res
        const user = data.data;
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user))
        router.push('/')
      })
      .catch(error => {
        console.log(error);
      })
  }
  return (
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <div style={{ fontSize: 25 }}><b>Login</b></div>
      <input placeholder="userame" name="username" className="inputLogin" ref={register({ required: true })}></input>
      <input placeholder="Password" type="password" name="password" className="inputLogin" ref={register({ required: true })}></input>
      <div className="forgotpass">
        <div> Forgot password?</div>
      </div>
      <Button type="primary" htmlType="submit" className="button-login" size="large">
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