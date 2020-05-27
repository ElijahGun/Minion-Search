import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      people: [],
      searchInput: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => this.setState({ people: data }));
  }

  handleChange = (e) => this.setState({ searchInput: e.target.value });

  render() {
    const { people, searchInput } = this.state;
    const filteredPeople = people.filter((person) =>
      person.name.toLowerCase().includes(searchInput.toLowerCase())
    );

    return (
      <div className="App">
        <h1>🔎  Minion Lookup 🔍 </h1>
        <SearchBox
          placeholder="search weirdos"
          handleChange={this.handleChange}
        />
        <CardList people={filteredPeople} />
      </div>
    );
  }
}

export default App;
