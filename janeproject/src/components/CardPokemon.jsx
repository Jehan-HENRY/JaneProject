import React, { Component } from "react";
import NavBar from "./Navbar.jsx";
import { Grid, Segment, Header, Image, Card, Icon } from "semantic-ui-react";


class CardPokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {};
		this.generateImage = this.generateImage.bind(this);
		this.capitalizeFirstLetter = this.capitalizeFirstLetter.bind(this);
  }

  componentDidMount() {
		const urlForOnePokemon = () =>
		`https://pokeapi.co/api/v2/pokemon/` + this.props.location.state.pokemonID;
    fetch(urlForOnePokemon())
      .then(response => {
        if (!response.ok) {
          throw Error("Le Pokémon n'est pas venu, il boude...");
        }
        return response;
      })
      .then(d => d.json())
      .then(
        d => {
          this.setState({
            pokemonOneData: d
          });
        },
        () => {
          this.setState({
            requestFailed: true
          });
        }
      );
  }

	generateImage(id) {
		return (
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
			id +
			".png"
		);
	}

	capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  render() {
    console.log(this);
    const { path } = this.props.route;
    return (
			<div>
				<NavBar path={path} />
			{this.state.requestFailed
				? <p>Mince ça marche pas...</p>
      	: <div>{!this.state.pokemonOneData
					? <p>Chargement...</p>
					: <Card>
          <Image src={this.generateImage(this.state.pokemonOneData.id)} />
          <Card.Content>
            <Card.Header>{this.capitalizeFirstLetter(this.state.pokemonOneData.name)}</Card.Header>
            <Card.Meta>
              <span>ID {this.state.pokemonOneData.id}</span>
            </Card.Meta>
            <Card.Description>
              Matthew is a musician living in Nashville.
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <a>
              <Icon name="user" />
              22 Friends
            </a>
          </Card.Content>
        </Card>
			}
		</div>
		 }
	</div>
    );
  }
}

export default CardPokemon;
