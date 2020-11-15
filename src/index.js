import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './Pages/Login';
import Home from './Pages/Home';
import BoardDetail from './Pages/boardDetail';
import { Provider } from 'react-redux';
import store from './store'
import Logup from './Pages/Logup';
import Header from './Components/header';
import UserInfor from './Pages/userInfor';
import NotFound from './Pages/notFound';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>

      <Router>
        <Header />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/login"><Login /></Route>
          <Route path="/boarddetail/:id"><BoardDetail /></Route>
          <Route path="/logup"><Logup /></Route>
          <Route path="/userinformation"><UserInfor /></Route>
          <Route><NotFound /></Route>
        </Switch>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
