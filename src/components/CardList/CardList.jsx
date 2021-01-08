import React from 'react';

function CardList(props) {
  console.log(props);
  return <div>{props.children}</div>;
}

export default CardList;
