import React, { Component } from "react";

import { CardList } from "./components/card-list/card-list.component.jsx";
import { SearchBox } from "./components/search-box/search-box.component.jsx";
import "./App.css";
// import { Component } from 'react';

class App extends Component {
	constructor() {
		super();

		this.state = {
			monsters: [],
			searchField: "",
		};
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then((response) => response.json())
			.then((user) => this.setState({ monsters: user }));
	}
	render() {
		const { monsters, searchField } = this.state;
		const filteredField = monsters.filter((monster) =>
			monster.name.toLowerCase().includes(searchField.toLowerCase()),
		);
		return (
			<div className="App">
				<h1>Monsters Rolodex</h1>
				<SearchBox
					placeholders="search monsters"
					handleChange={(e) => this.setState({ searchField: e.target.value })}
				/>
				<CardList monsters={filteredField} />
			</div>
		);
	}
}
export default App;
