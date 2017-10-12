import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
// import background from '../img/welcome.jpg';
import {Image, Button} from "semantic-ui-react"
import welcome1 from "../img/welcome1.png";
import welcome2 from "../img/welcome2.png";
import header from "../img/header.png";
import star from "../img/star.png";
class Home extends Component {
  constructor() {
    super()
    this.state = {
      visible: true
    }
  }
  toggle() {
    this.setState({visible: !this.state.visible})
  }

  render() {
    const {path} = this.props.route
    const {visible} = this.state
    console.log(this);
    return (
      <div >
        {/* <Button style={{zIndex:"999",position:"absolute", marginTop:"50vh"}} onClick={()=>this.toggle()}></Button> */}
        <Image className={visible
          ? "welcome1"
          : "welcome1bis"} onClick={()=>this.toggle()} src={welcome1} style={{
          height: "100vh"
        }}/>
        <Image className={visible
          ? "welcome2"
          : "welcome2bis"} onClick={()=>this.toggle()} src={welcome2} style={{
          height: "100vh"
        }}/> {/* <Image src={background} style={{height:"100vh"}} fluid/> */}
        <div className="wallpaper">
        <NavBar path={path}/>
        >
      <Image className="title" src={header}/>
      <Image className="star" src={star}/>
        <Button color="black" size="massive" circular icon='settings' />
    </div>
      </div>
    )
  }
}

export default Home;
