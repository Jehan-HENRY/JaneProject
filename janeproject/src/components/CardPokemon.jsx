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
			<div className="cardpok">
				<NavBar path={path} />
			{this.state.requestFailed
				? <p>Mince ça marche pas...</p>
      	: <div>{!this.state.pokemonOneData
					? <p>Chargement...</p>
					:<div>
      <p className="bigName">{this.capitalizeFirstLetter(this.state.pokemonOneData.name)}</p>
      <p className="bigId">Id : {this.state.pokemonOneData.id}</p>
      <p className="bigType">Type : {this.state.pokemonOneData.types[0].type.name} {this.state.pokemonOneData.types[1] ? ("- " + this.state.pokemonOneData.types[1].type.name) : null} </p>

          <Image className="cardo" style={{height:"37vh", backgroundColor:"transparent"}} src={this.generateImage(this.state.pokemonOneData.id)} />

          </div>
			}
		</div>
		 }
	</div>
    );
  }
}

export default CardPokemon;
