import React from 'react';

function Card(props) {
  return (
    <div>
      <h1>{props.monster.name}</h1>
    </div>
  );
}

export default Card;
