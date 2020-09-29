import React, { Component } from 'react'
import {Navbar,Nav, NavLink} from "react-bootstrap"
import { Link } from 'react-router-dom'
import logo1 from "../images/logo1.png"
import logo2 from "../images/logo2.png"
import flex from "../images/flex.png"

export class Home extends Component {
    render() {
        return (
        <div>
          <Navbar className="nav bg-white fixed-top" expand="sm">
            <Navbar.Brand>
                <Link to="/"><img src={logo1} alt="logo1"/><img className="mx-3" src={logo2} alt="logo2"/></Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="mr-auto">
                <NavLink className="ml-5"><b>Why Vyorius?</b></NavLink>
                <NavLink className="ml-5"><b>Product</b></NavLink>
                <NavLink><b>Use Cases</b></NavLink>
                <NavLink><b>Team</b></NavLink>
                <NavLink><b>Partners</b></NavLink>
                <NavLink><b>Contact us</b></NavLink>
              </Nav>
              <Link to="/"><button className="btn text-white mr-4" style={{backgroundColor:"#ff9d5c"}}><b>Launch Vyorius &#62;</b></button></Link>
            </Navbar.Collapse>
          </Navbar> 
          <div className="container-fluid">
            <div className="row">
                <div className="col-lg-6 px-5" style={{marginTop:"150px", fontWeight:"500"}}>
                    <p style={{color:"#ff9d5c"}}>CONNECTING THE DISCONNECTED</p>
                    <span style={{fontSize:"50px", fontWeight:"500", letterSpacing:"1px"}}>
                        <span style={{color:"#ff9d5c"}}>Vyorius</span> brings unmanned robots
                        <span style={{color:"#ff9d5c"}}> together</span>,<br/>
                        wherever they are</span>
                    <p style={{fontSize:"1.5rem"}}>With all of the operations, commanding and maintenance tools in one place,
                     unmanned vehicles will stay connected<br/> and productive no matter where you’re Delivering.
                    </p>
                    <button className="btn text-white mr-4"
                     style={{backgroundColor:"#ff9d5c",fontSize:"17px",marginRight:"2%",
                     paddingLeft: "13%",paddingRight: "13%", paddingTop: "3%",paddingBottom: "3%",
                     borderRadius:"10px"}}><b>Try Vyorius</b></button>
                    <button className="btn text-white mr-4"
                     style={{backgroundColor: "#fff",borderColor: "#ff9d5c", fontSize:"17px",
                     paddingLeft: "13%",paddingRight: "13%", paddingTop: "3%",paddingBottom: "3%",
                     borderRadius:"10px"}}><a href="#" style={{color:"#ff9d5c"}}><b>Learn More</b></a></button>
                    <p className="mt-3">Need to order a delivery? <a href="#"><u> Get Started</u></a> </p>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid" src={flex} height="450px" width="700px" alt="flex"
                    style={{marginTop:"190px"}}/>
                </div>
            </div>
          </div>
          </div>
        )
    }
}

export default Home
