import React from 'react';
import './card.scss'

const Card = (props) => {
  return (
    <div className="card">
      {props.value}
    </div>
  );
}

export default Card;