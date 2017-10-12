import React, { Component } from "react";
import { Grid, Segment, Header, Image } from "semantic-ui-react";

const urlForPokemon = () => `https://pokeapi.co/api/v2/pokemon/?limit=811/`;

const square = { width: 175, height: 175 };

class ListPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
    this.generateImage = this.generateImage.bind(this);
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

  capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
  }

  generateImage(id) {
      return "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id + ".png"
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
                  <Image className="ListItemImage" src={this.generateImage(pokemon.url.match(/([0-9]+)/g)[1])} />
                  <Header className="ListItemHeader" as="h3">
                    {this.capitalizeFirstLetter(pokemon.name)}
                    <Header.Subheader>
                      ID {pokemon.url.match(/([0-9]+)/g)[1]}
                    </Header.Subheader>
                  </Header>
                </Segment>
                <br />
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      </Segment>
    );
  }
}

export default ListPokemon;
