import React, { Component } from "react";
import { Link } from "react-router-dom";
import Styled from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
// import STLogo from "../Logo/STLogo";
// import WowoWordLogo from "../../images/WowoWordLogo.js";
import logo from "../../images/traphouselogo.png";

import Backdrop from "./Backdrop.js";
import NavButton from "./NavButton.js";
import SideDrawer from "./SideDrawer.js";
import "./NavBar.css";

const NavContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 25%;
    width: 100%;
    padding: 0 9.5%;
    background: #73bf32;
    z-index: 300;
    position: fixed;
`;

const LogoContainer = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100px;

    @media (min-width: 1800px) { // ##Device = Desktops ##Screen = 1800px to higher resolution desktops //
        height: 100%;
        width: 115px;
        left: 15%;
    }
`;

const MDBContainer = Styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  
`;
class NavBar extends Component {
  state = {
    sideDrawerOpen: false,
    textColor: "#73bf32",
  };
  backDropClick = () => {
    this.setState({
      sideDrawerOpen: false,
    });
  };
  navClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };
  listenScrollEvent = (e) => {
    if (window.scrollY > 100) {
      this.setState({ textColor: "#FFFFFF" });
    } else {
      this.setState({ textColor: "#73bf32" });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    let backDrop;
    if (this.state.sideDrawerOpen) {
      backDrop = <Backdrop clickHandler={this.backDropClick} />;
    }
    return (
      // <MDBContainer class="d-flex">
      <div className="w-100">
        <div style={{ paddingBottom: "7%" }}>
          <NavContainer
            className="nav-container"
            style={{ height: "70px", width: "100%" }}
          >
            <LogoContainer className="logo-container">
              <Link to="/">
                <img src={logo} alt="logo" style={{ height: "50px" }} />
                {/* <STLogo width="100%" /> */}
              </Link>
            </LogoContainer>
            <p
              style={{ fontSize: "1.5rem", color: this.state.textColor }}
              className="navText"
            >
              <strong>SENPAI'S TRAPHOUSE</strong>
            </p>
            {/* <Zoom>
              <p>GTHis is a test to see if this s working</p>
            </Zoom> */}
            <NavButton clickHandler={this.navClickHandler} />
          </NavContainer>
        </div>
        <SideDrawer logout={this.logout} show={this.state.sideDrawerOpen} />
        {backDrop}
      </div>
      // </MDBContainer>
    );
  }
}
export default NavBar;
