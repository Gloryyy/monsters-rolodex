import React, { Component } from "react";
import "./App.css";
import { CardList } from "./Components/card-list/cardList.component";
import { SearchBox } from "./Components/search-box/searchBox.component";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchFild: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange(e) {
    this.setState({ searchFild: e.target.value });
  }

  render() {
    const { monsters, searchFild } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchFild.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
