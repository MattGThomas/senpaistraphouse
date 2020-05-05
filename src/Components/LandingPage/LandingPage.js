import React, { Component } from "react";
import Link from "react-router-dom";
import NavBar from "../NavMenu/NavBar.js";
import Footer from "../Footer/Footer.js";
import logo from "../../images/traphouselogo.png";
import { MDBContainer, MDBRow, MDBCol, MDBInput } from "mdbreact";

import ReactPlayer from "react-player";
import "./landingpage.css";

class LandingPage extends Component {
  render() {
    return (
      <MDBContainer>
        {/* <NavBar /> */}
        <h1>
          <strong>SENPAI'S TRAPHOUSE</strong>
        </h1>
        <div>
          {logo}
          <p>
            <strong>
              Consuming, Promoting and Reviewing Anime from an Urban Perspective
            </strong>
          </p>
        </div>
        <MDBRow>
          <h2>NOTICE ME SENPAI</h2>
          <MDBCol className="column-info" md="4">
            SENPAI'S BLOG
            <p>Updates from your local Senpai</p>
          </MDBCol>
          <MDBCol className="column-info" md="4">
            ARTICLES
            <p>
              Articles, Essays, Opinions, Reviews, Lists, and Puff Pieces
              covering the latest anime nes and more...
            </p>
          </MDBCol>
          <MDBCol className="column-info" md="4">
            VIDEOS
            <p>
              The Official Senpai's Traphouse Round Table Discussion and more...
            </p>
          </MDBCol>
        </MDBRow>
        <div>
          <h2>SENPAI'S TRAPHOUSE EP. 1: PILOT</h2>
          <ReactPlayer url="https://www.youtube.com/watch?v=bZ_Ye4Rz6Ws" />
          <div>
            <p>
              A round table style discussion covering a variety of anime related
              topics
            </p>
            <p>Ep. 1: Pilot </p>
            <ul>
              <li>Sake and a Snack: Dorayaki, Mochi, Coffee, Pocky, Sake</li>
              <li>Icebreaker: How did you get into anime</li>
              <li>Main Topic: Good and Bad Anime Fathers</li>
            </ul>
          </div>
        </div>
        <form>
          <MDBInput
            id="firstName"
            name="firstName"
            type="text"
            label="First Name"
            required
          />
          <MDBInput
            id="lastName"
            name="lastName"
            type="text"
            label="Last Name"
          />
          <MDBInput
            id="email"
            name="email"
            type="text"
            label="Email"
            required
          />
          <MDBInput
            id="comment"
            name="comment"
            type="text"
            label="Comment"
            required
          />
        </form>
        {/* <Footer /> */}
      </MDBContainer>
    );
  }
}

export default LandingPage;
