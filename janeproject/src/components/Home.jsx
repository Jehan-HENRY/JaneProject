import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
import {browserHistory} from "react-router";
import {Image} from "semantic-ui-react"
import welcome1 from "../img/welcome3.png";
import welcome2 from "../img/welcome4.png";
import header from "../img/header.png";
import star from "../img/star.png";
import pusher from "../img/button.png";
import audio from "../sounds/door.mp3"
import audio2 from "../sounds/flash.mp3"

class Home extends Component {
  constructor() {
    super()
    this.state = {
      visible: true,
      audio: new Audio(audio),
      audio2: new Audio(audio2),
      moved:false
    }
    this.toggle = this.toggle.bind(this)
  }
  componentWillMount() {
    if (this.props.location.state && this.props.location.state.visible === false) {
      this.setState({visible: false})
    }
  }
  go() {
    this.setState({moved:true})
    this.state.audio2.play();
    let nav =()=> browserHistory.push("/list");
    setTimeout(nav , 2000)
}

toggle() {
  this.setState({visible: false})
  this.state.audio.play();
}

render() {

  const {visible} = this.state
  console.log(this);
  return (
    <div>
      {/* <embed src="ton_fichier.mp3" autostart="true" loop="false" hidden="true"></embed> */}
      <Image className={visible
        ? "welcome1"
        : "welcome1bis"} onClick={() => this.toggle()} src={welcome1} style={{
        height: "98vh"
      }}/>
      <Image className={visible
        ? "welcome2"
        : "welcome2bis"} onClick={() => this.toggle()} src={welcome2} style={{
        height: "98vh"
      }}/>
      <div className={this.state.moved ? "move2":"move"}>
      <div className="wallpaper">
        <NavBar/>
        <Image className="title" src={header}/>
        <Image className="star" src={star}/>
        <Image className="pusher" src={pusher} onClick={()=>this.go()}/>
      </div>
    </div>
        {/* <p className="paraph">Cliquez pour tous les attraper !</p> */}
    </div>
  )
}
}

export default Home;
