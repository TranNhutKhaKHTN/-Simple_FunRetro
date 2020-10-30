import React from 'react';
import { UserOutlined } from '@ant-design/icons'
import './header.scss'
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <div className="header">
      <Link style={{ color: "white" }} to='/'>KhaRetro</Link>
      <div>
        <UserOutlined />
      </div>
    </div>
  );
}

export default Header;