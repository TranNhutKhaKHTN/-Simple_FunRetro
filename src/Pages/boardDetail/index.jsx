import Column from './component/column';
import React from 'react';
import Header from '../../Components/header';
import './boarddetail.scss'

const BoardDetail = (props) => {
  return (
    <div>
      <Header></Header>
      <div className="detail-body">
        <div className="col-card">
          <Column></Column>
        </div>
        <div className="col-card">
          <Column></Column>
        </div>
        <div className="col-card">
          <Column></Column>
        </div>
      </div>
    </div>
  );
}

export default BoardDetail;