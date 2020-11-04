import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import Header from '../../Components/header';
import FormLogin from './component/formLogin/formLogin';


const Login = (props) => {
  const router = useHistory()
  const user = useSelector(state => state.user.user)
  useEffect(() => {
    if (user !== null) {
      router.push('/')
    }
  }, [router, user])

  return (
    <div>
      {/* <Header></Header> */}
      <div style={{ display: "flex", justifyContent: "center", marginTop: 30 }}>
        <FormLogin></FormLogin>
      </div>
    </div>
  );
}

export default Login;