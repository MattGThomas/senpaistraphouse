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

const NavContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 25%;
    width: 100%;
    padding: 0 9.5%;
    background: #00A8C5;
    z-index: 300;
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
            style={{ height: "50px", width: "100%" }}
          >
            <LogoContainer className="logo-container">
              <Link to="/">
                <img src={logo} alt="logo" style={{ height: "50px" }} />
                {/* <STLogo width="100%" /> */}
              </Link>
            </LogoContainer>

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
