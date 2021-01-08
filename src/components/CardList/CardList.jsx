import React from 'react';
import Card from '../Card/Card';
import './CardList.css';

function CardList(props) {
  console.log(props);
  return (
    <div className='card-list'>
      {' '}
      {props.monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </div>
  );
}

export default CardList;
