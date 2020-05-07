import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardText,
  MDBCardTitle,
  MDBBtn,
  MDBJumbotron,
} from "mdbreact";
import Styled from "styled-components";
import relife from "../../images/relife.jpg";
// import reReLife from "../../images/resizedRelife.jpg";
import hostClub from "../../images/host-club.jpg";
import reasons from "../../images/reasons-why.jpg";
import neverland from "../../images/neverland.jpg";

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
      <MDBContainer>
        {/* // <div className="d-flex justify-content-center"> */}
        <h2> Senpai's Articles</h2>

        {/* <h3>Back To School Recs</h3> */}

        <MDBRow>
          <MDBJumbotron className="p-0">
            <MDBCardTitle>Back To School Recs</MDBCardTitle>
            <MDBCardImage
              src={relife}
              // style={{ width: " }}
            />

            <MDBCardText>
              As we get back into the groove of school (or not if you're lucky),
              here is a list of anime recommendations that take place in an
              academic setting.
              <div>
                <Link to="/articles/back-to-school">Read more</Link>
              </div>
            </MDBCardText>
          </MDBJumbotron>
        </MDBRow>
        <MDBRow>
          <MDBJumbotron className="p-0">
            <MDBCardTitle>If You Like 13 Reasons Why</MDBCardTitle>
            <MDBCardImage src={reasons} style={{ width: "100%" }} />
            <MDBCardText>
              A detailed breakdown of animes you may enjoy if you're a fan of
              the Netflix series "13 Reasons Why".
              <div>
                <Link to="/articles/13-reasons-why">Read more</Link>
              </div>
            </MDBCardText>
          </MDBJumbotron>
        </MDBRow>
        <MDBRow>
          <MDBJumbotron className="p-0">
            <MDBCardTitle>If you like stranger things</MDBCardTitle>
            <MDBCardImage src={neverland} style={{ width: "100%" }} />
            <MDBCardText>
              A detailed breakdown of animes you may enjoy if you're a fan of
              the Netflix series "Stranger Things".
              <div>
                <Link to="/articles/anime-to-try-if-you-like-stranger-things">
                  Read more
                </Link>
              </div>
            </MDBCardText>
          </MDBJumbotron>
        </MDBRow>

        {/* // </div> */}
      </MDBContainer>
    );
  }
}

export default Articles;
