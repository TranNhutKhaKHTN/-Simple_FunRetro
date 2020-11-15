import { CloseCircleOutlined } from '@ant-design/icons';
import React from 'react';
import './notfound.scss'

function NotFound(props) {
  return (
    <div className="notfound-wrapper">
      <div>404</div>
      <div>Page Not Found</div>
      <CloseCircleOutlined style={{ color: "red" }} />
    </div>
  );
}

export default NotFound;