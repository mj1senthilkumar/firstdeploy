import React, {Component} from 'react';
import './App.css';
import { CardsLists } from './components/card-list-component/card-list-component';
import {SearchBox} from './components/search-box/search-box-component';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log("in constructor ", this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    console.log("once component mounted ", this.state);
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => {return res.json();})
    .then(res => {
      this.setState({monsters: res});
    })
  }
  
  handleChange (e) {
    console.log("inside handle chagnes ", this);
    this.setState({searchField: e.target.value});
  }

  render () {
    console.log("on render", this);
    const {monsters, searchField} = this.state;
    const filteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase());
    });

    return (
      <div className="App">
        <SearchBox 
          placeholder="Search boxes" 
          handler={this.handleChange}></SearchBox>
        <header className="App-header">
          <CardsLists monsters={filteredMonster}></CardsLists>
          
          <button onClick={() => this.setState({string: 'Hello Senthl'})}>Click me</button>
        </header>
      </div>
    )
  };
};

export default App;
