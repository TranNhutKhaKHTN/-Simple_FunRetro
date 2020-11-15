import { Button, message } from 'antd';
import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import './formLogin.scss'

const FormLogup = (props) => {

  const { register, handleSubmit, errors, watch } = useForm()
  // const [success,setSuccess]=useState(false)
  const [loadingRegiter, setLoadingRegiter] = useState(false)
  const router = useHistory();

  const onSubmit = (data) => {
    // console.log(data);
    const user = {
      name: data.name,
      password: data.password,
      username: data.username
    }
    setLoadingRegiter(true)
    Axios.post('https://backendretro1712512.herokuapp.com/users/logup', { ...user })
      .then((res) => {
        console.log(res.data);
        // setSuccess(true);
        setLoadingRegiter(false)
        if (res.data.status !== 200) {
          console.log();
          message.error(res.data.data);
        }
        else {
          router.push('/login')
        }
      })
      .catch((error) => {
        console.log(error);
        setLoadingRegiter(false)
      })
  }
  return (
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      <div style={{ fontSize: 25 }}><b>Signup</b></div>
      <input name="name" placeholder="Your name" className="inputLogin" ref={register({ required: true })}></input>
      {errors.name && "name is required"}
      <input name="username" placeholder="User name" className="inputLogin" ref={register({ required: true })}></input>
      {errors.username && "username is required"}
      <input name="password" type="password" placeholder="Password" className="inputLogin" ref={register({ required: true })}></input>
      {errors.password && "password not validate"}
      <input name="retype" type="password" placeholder="Retype Password" className="inputLogin" ref={register({ required: true, validate: value => value === watch('password') })}></input>
      {errors.retype && "retype not validate"}
      <Button type="primary" htmlType="submit" className="button-login" size="large" loading={loadingRegiter}>
        Register
      </Button>
    </form>
  );
}

export default FormLogup;