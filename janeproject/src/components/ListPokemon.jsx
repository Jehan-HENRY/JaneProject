import React, { Component } from "react";
import { List } from "semantic-ui-react";

const urlForPokemon = () => `https://pokeapi.co/api/v2/pokemon/?limit=60/`;

class ListPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    fetch(urlForPokemon())
      .then(response => {
        if (!response.ok) {
          throw Error("Les Pokémon ne sont pas venus, ils boudent...");
        }
        return response;
      })
      .then(d => d.json())
      .then(
        d => {
          this.setState({
            pokemonData: d
          });
        },
        () => {
          this.setState({
            requestFailed: true
          });
        }
      );
  }
  render() {
    console.log(this);
    if (this.state.requestFailed) return <p>Mince ça marche pas...</p>;
    if (!this.state.pokemonData) return <p>Chargement...</p>;
    return (
      <div>
        <List>
          {this.state.pokemonData.results.map((pokemon, index) =>
            <List.Item key={index} value={pokemon.name}>
              {pokemon.name}
            </List.Item>
          )}
        </List>
      </div>
    );
  }
}

export default ListPokemon;
