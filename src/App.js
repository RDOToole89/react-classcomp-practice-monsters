import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '',
      title: '',
    };

    // wat to bind this to regular functions
    // this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e) => {
    this.setState({ searchField: e.target.value, title: e.target.value });
  };

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
    const { monsters, searchField, title } = this.state;
    const filteredMonsters = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className='App'>
        <h1>Monsters Rolodex</h1>
        <p>{title}</p>
        <SearchBox
          placeholder='search monsters'
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
