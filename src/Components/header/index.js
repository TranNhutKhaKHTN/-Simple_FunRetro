import React from 'react';
import { UserOutlined } from '@ant-design/icons'
import './header.scss'

const Header = (props) => {
  return (
    <div className="header">
      <div>KhaRetro</div>
      <div>
        <UserOutlined />
      </div>
    </div>
  );
}

export default Header;