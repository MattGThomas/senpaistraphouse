import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBJumbotron,
} from "mdbreact";

import relife from "../../images/relife.jpg";

import reasons from "../../images/reasons-why.jpg";
import neverland from "../../images/neverland.jpg";

import threed from "../../images/new_logos/3d_logo.jpg";
import "./articles.css";

class Articles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      articlesPerPage: 5,
    };
  }

  render() {
    return (
      <MDBContainer style={{ backgroundImage: `url(${threed})` }}>
        {/* <div className="text-left" style={{ paddingLeft: "3%" }}>
          <Link to="/">
            <MDBIcon
              icon="arrow-circle-left"
              size="3x"
              style={{ color: "#73bf32" }}
            />
          </Link>
        </div> */}
        {/* // <div className="d-flex justify-content-center"> */}
        <h2 className="senpais-articles"> Senpai's Articles</h2>

        {/* <h3>Back To School Recs</h3> */}
        <MDBRow style={{ paddingBottom: "3%" }} className="article-cards">
          <MDBCol className="relife-card">
            {/* <MDBRow> */}
            <MDBJumbotron
              className="p-0"
              style={{ background: "#73bf32", height: "500px" }}
            >
              <MDBCardTitle
                className="jumbotron-header"
                style={{ color: "white" }}
              >
                Back To School Recs
              </MDBCardTitle>
              <MDBCardImage
                src={relife}
                style={{ width: "100%" }}
                // style={{ width: " }}
              />
              <MDBCardText
                className="jumbotron-header text-left"
                style={{ background: "#73bf32", color: "white" }}
              >
                As we get back into the groove of school (or not if you're
                lucky), here is a list of anime recommendations that take place
                in an academic setting.
                <div>
                  <Link to="/articles/back-to-school">
                    <span className="read-me">Read more</span>
                  </Link>
                </div>
              </MDBCardText>
            </MDBJumbotron>
            {/* </MDBRow> */}
          </MDBCol>

          <MDBCol>
            <MDBRow>
              <MDBJumbotron className="p-0" style={{ background: "#73bf32" }}>
                <MDBCardTitle
                  className="jumbotron-header"
                  style={{ color: "white" }}
                >
                  If You Like 13 Reasons Why
                </MDBCardTitle>
                <MDBCardImage src={reasons} style={{ width: "100%" }} />
                <MDBCardText
                  className="jumbotron-header text-left"
                  style={{ background: "#73bf32", color: "white" }}
                >
                  A detailed breakdown of animes you may enjoy if you're a fan
                  of the Netflix series "13 Reasons Why".
                  <div>
                    <Link to="/articles/13-reasons-why">
                      <span className="read-me">Read more</span>
                    </Link>
                  </div>
                </MDBCardText>
              </MDBJumbotron>
            </MDBRow>

            <MDBRow>
              <MDBJumbotron
                className="p-0"
                style={{ background: "#73bf32", color: "white" }}
              >
                <MDBCardTitle
                  className="jumbotron-header"
                  style={{ color: "white" }}
                >
                  If you like stranger things
                </MDBCardTitle>
                <MDBCardImage src={neverland} style={{ width: "100%" }} />
                <MDBCardText
                  className="jumbotron-header text-left"
                  style={{ background: "#73bf32", color: "white" }}
                >
                  A detailed breakdown of animes you may enjoy if you're a fan
                  of the Netflix series "Stranger Things".
                  <div>
                    <Link to="/articles/anime-to-try-if-you-like-stranger-things">
                      <span className="read-me">Read more</span>
                    </Link>
                  </div>
                </MDBCardText>
              </MDBJumbotron>
            </MDBRow>
          </MDBCol>
        </MDBRow>
        {/* // </div> */}
      </MDBContainer>
    );
  }
}

export default Articles;
