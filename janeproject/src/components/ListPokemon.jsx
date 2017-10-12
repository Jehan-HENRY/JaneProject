import React, { Component } from "react";
import { Grid, Segment, Header, Image, Input } from "semantic-ui-react";
import NavBar from "./Navbar.jsx";

const urlForPokemon = () => `https://pokeapi.co/api/v2/pokemon/?limit=811`;

const square = { width: 175, height: 175 };

class ListPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
    this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
    this.generateImage = this.generateImage.bind(this);
    this.updateInput = this.updateInput.bind(this);
    this.updateResult = this.updateResult.bind(this);
    this.pokemonFilter = this.pokemonFilter.bind(this);
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
    return (
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
      id +
      ".png"
    );
  }

  updateInput(event) {
    this.setState(
      {
        search: event.target.value
      },
      () => {
        this.updateResult;
      }
    );
  }

  updateResult() {
    this.setState({
      pokemonData: this.state.pokemonData.results.filter(this.pokemonFilter)
    });
  }

  pokemonFilter(pokemon) {
    return (
      pokemon.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
    );
  }

  render() {
    console.log(this, event);
    if (this.state.requestFailed) return <p>Mince ça marche pas...</p>;
    if (!this.state.pokemonData) return <p>Chargement...</p>;
    const { path } = this.props.route;
    return (
      <div>
        <NavBar path={path} />
        <Input
          className="ListSearch"
          size="large"
          icon="search"
          type="text"
          placeholder="Chercher..."
          value={this.state.search}
          onChange={this.updateInput}
        />
        <Segment className="ListSegment">
          <Grid className="ListGrid">
            <Grid.Row columns={6}>
              <br />
              {this.state.pokemonData.results.map((pokemon, index) =>
                <Grid.Column key={index}>
                  <Segment key={index} circular style={square}>
                    <div className="ListPokeball" />
                    <Image
                      className="ListItemImage"
                      src={this.generateImage(
                        pokemon.url.match(/([0-9]+)/g)[1]
                      )}
                    />
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
      </div>
    );
  }
}

export default ListPokemon;
