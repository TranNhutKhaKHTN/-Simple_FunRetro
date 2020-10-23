import { Button } from 'antd';
import React from 'react';
import './formLogin.scss'

const FormLogin = (props) => {
  return (
    <div className="loginForm">
      <div style={{ fontSize: 25 }}><b>Login</b></div>
      <input placeholder="Your name" className="inputLogin"></input>
      <input placeholder="Password" className="inputLogin"></input>
      <div className="forgotpass">
        <div> Forgot password?</div>
      </div>
      <Button type="primary" className="button-login" size="large">
        Login
      </Button>

      <Button type="primary" className="button-login gglogin" size="large">
        Login Google
      </Button>
      <div style={{ marginTop: 15, color: "#af6dc0" }}> Or register</div>
    </div>
  );
}

export default FormLogin;