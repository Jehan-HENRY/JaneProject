import React, {Component} from 'react';
import NavBar from './Navbar.jsx';
// import background from '../img/welcome.jpg';
import {Image} from "semantic-ui-react"
import welcome1 from "../img/welcome1.png";
import welcome2 from "../img/welcome2.png";
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
        <NavBar path={path}/>
        <h1>
          i'm the home</h1>
      </div>
    )
  }
}

export default Home;
