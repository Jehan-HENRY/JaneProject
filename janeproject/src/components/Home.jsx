import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
import {browserHistory} from "react-router";
import {Image} from "semantic-ui-react"
import welcome1 from "../img/welcome3.png";
import welcome2 from "../img/welcome4.png";
import header from "../img/header.png";
import star from "../img/star.png";
import pusher from "../img/button.png";

class Home extends Component {
  constructor() {
    super()
    this.state = {
      visible: true
    }
  }
  componentWillMount(){
    if(this.props.location.state && this.props.location.state.visible===false ){
      this.setState({visible: false}) }
  }
  toggle() {
    this.setState({visible: false})
  }

  render() {

    const {visible} = this.state
    console.log(this);
    return (
      <div >
        <Image className={visible
          ? "welcome1"
          : "welcome1bis"} onClick={()=>this.toggle()} src={welcome1} style={{
          height: "98vh"
        }}/>
        <Image className={visible
          ? "welcome2"
          : "welcome2bis"} onClick={()=>this.toggle()} src={welcome2} style={{
          height: "98vh"
        }}/>
        <div className="wallpaper">
        <NavBar />
      <Image className="title" src={header}/>
      <Image className="star" src={star}/>
      <Image className="pusher" src={pusher} onClick={()=>browserHistory.push("/list")}/>
<p className="paraph">Cliquez pour tous les attraper !</p>
    </div>
      </div>
    )
  }
}

export default Home;
