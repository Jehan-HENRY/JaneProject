import React, { Component } from "react";
import { Grid, Segment, Header } from "semantic-ui-react";

const urlForPokemon = () => `https://pokeapi.co/api/v2/pokemon/?limit=60/`;

const square = { width: 175, height: 175 };

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
      <Segment className="ListSegment">
        <Grid className="ListGrid">
          <Grid.Row columns={5}>
            <br />
            {this.state.pokemonData.results.map((pokemon, index) =>
              <Grid.Column key={index}>
                <Segment key={index} circular style={square}>
                  <Header as="h3">
                    {pokemon.name}
                    <Header.Subheader>ID 1234</Header.Subheader>
                  </Header>
                </Segment>
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default ListPokemon;
