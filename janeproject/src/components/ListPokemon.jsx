import React, { Component } from "react";
import { List } from "semantic-ui-react";

const urlForPokemon = () => `https://pokeapi.co/api/v2/pokemon/?limit=60/`;

class ListPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(urlForPokemon()).then(d => d.json()).then(d => {
      this.setState({
        pokemonData: d
      });
    });
  }
  render() {
    console.log(this);
    if (!this.state.pokemonData) return <p>Loading...</p>;
    return (
      <div>
        <List>
        {this.state.pokemonData.results.map((pokemon, index) =>
            <List.Item key={index} value={pokemon.name}>{pokemon.name}</List.Item>
        )}
      </List>
      </div>
    );
  }
}

export default ListPokemon;
