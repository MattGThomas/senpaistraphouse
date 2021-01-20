import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PictureGallery from "../Gallery/PictureGallery.js";
// import logo from "../../images/traphouselogo.png";
import new_logo from "../../images/new_logos/new_logo.png";
// import logo_two from "../../images/logo_two.png";
import midoriya from "../../images/midoriya.png";
import article_image from "../../images/article_image.jpg";
import rascal from "../../images/rascal.jpg";
// import Footer from "../../Components/Footer/Footer.js";
import threed from "../../images/new_logos/3d_logo.jpg";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
} from "mdbreact";

import ReactPlayer from "react-player";
import "./landingpage.css";

class LandingPage extends Component {
  render() {
    return (
      <div style={{ backgroundImage: `url(${threed})` }}>
        <div>
          <h1 className="traphouse">
            <strong>SENPAI'S TRAPHOUSE</strong>
          </h1>
          <p style={{ color: "white" }} className="japanese">
            <strong>(せんぱい の わな)</strong>
          </p>
        </div>
        <img
          src={new_logo}
          style={{ height: "35%", width: "35%" }}
          alt="logo"
        />
        {/* <img src={logo} style={{ height: "35%", width: "35%" }} /> */}
        <p style={{ paddingTop: "5%", paddingBottom: "5%" }} className="shadow">
          <strong>
            Anime from an <br />
            <span>Urban Perspective</span>
          </strong>
        </p>
        <MDBContainer style={{ paddingBottom: "5%" }}>
          <MDBRow className="d-flex flex-column">
            <h2 style={{ color: "white" }} className="landing-card-text">
              <strong>NOTICE ME SENPAI</strong>
            </h2>
          </MDBRow>
          <MDBRow className="mdb-cards">
            <MDBCol className="mdb-cards-column">
              <MDBCard style={{ height: "300px" }}>
                <MDBCardImage
                  src={midoriya}
                  style={{ height: "150px", width: "100%" }}
                />
                <MDBCardBody>
                  <Link to="/senpais-blog">
                    <MDBCardTitle
                      style={{ color: "#73bf32" }}
                      className="landing-card-title"
                    >
                      <strong>senpai's blog</strong>
                    </MDBCardTitle>
                  </Link>
                  <MDBCardText className="landing-card-text">
                    <p className="landing-card-text-body">
                      Updates from your local Senpai
                    </p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="mdb-cards-column">
              <MDBCard style={{ height: "300px" }}>
                <MDBCardBody>
                  <Link to="/articles">
                    <MDBCardTitle
                      style={{ color: "#73bf32" }}
                      className="landing-card-title"
                    >
                      <strong>articles</strong>
                    </MDBCardTitle>
                  </Link>
                  <MDBCardText className="landing-card-text">
                    <p className="landing-card-text-body">
                      Articles, Essays, Opinions, Reviews, Lists, and Puff
                      Pieces, covering the latest anime news and more...
                    </p>
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardImage
                  src={article_image}
                  style={{ height: "150px", width: "100%" }}
                />
              </MDBCard>
            </MDBCol>

            <MDBCol className="mdb-cards-column">
              <MDBCard style={{ height: "300px" }}>
                <MDBCardImage
                  src={rascal}
                  style={{ height: "150px", width: "100%" }}
                />
                <MDBCardBody>
                  <Link to="/videos">
                    <MDBCardTitle
                      style={{ color: "#73bf32" }}
                      className="landing-card-title"
                    >
                      <strong>videos</strong>
                    </MDBCardTitle>
                  </Link>
                  <MDBCardText className="landing-card-text">
                    <p className="landing-card-text-body">
                      The Official Senpai's Traphouse Round Table Discussion and
                      more...
                    </p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          {/* <div>
            <h2 className="text-center" style={{ color: "#FFFFFF" }}>
              SENPAI'S TRAPHOUSE EP. 1: PILOT
            </h2>
          </div>
          <MDBRow style={{ paddingTop: "5%" }} className="stupid-video">
            <MDBCol>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=bZ_Ye4Rz6Ws"
                width="100%"
              />
            </MDBCol>
            <MDBCol className="text-left" style={{ paddingBottom: "16%" }}>
              <span className="p-2 text-left">
                A round table style discussion covering a variety of anime
                related topics
              </span>

              <br />
              <span className="p-2 text-left">
                -Sake and a snack: Dorayaki, Mochi, Coffee, Pocky, and Sake
              </span>
              <br />
              <span className="p-2 text-left">
                -Icebreaker: how did you get into anime
              </span>
              <br />
              <span className="p-2 text-left">
                -Main Topic: "Good and Bad anime fathers"
              </span>
            </MDBCol>
          </MDBRow> */}
        </MDBContainer>
      </div>
    );
  }
}

export default LandingPage;
