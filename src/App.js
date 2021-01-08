import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState({
          monsters: [...users],
        })
      )
      .catch((e) => console.log(e));
  }

  render() {
    return (
      <div className='App'>
        <CardList name='roibin'>
          <h1>Roibin</h1>
        </CardList>
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

export default App;
