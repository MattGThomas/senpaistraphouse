import React, { Component } from "react";
import { Link } from "react-router-dom";
import NavBar from "../NavMenu/NavBar.js";
import Footer from "../Footer/Footer.js";
import logo from "../../images/traphouselogo.png";
import people from "../../images/people.jpg";
import reading from "../../images/reading.mp4";
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
} from "mdbreact";

import ReactPlayer from "react-player";
import "./landingpage.css";

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      comment: "",
    };
  }
  changeHandler = (evt) => {
    evt.preventDefault();
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  };
  submitHandler = async (evt) => {
    evt.preventDefault();
    alert(
      `${this.state.name} thank you for your feedback, a team member will review it shortly`
    );
  };
  render() {
    return (
      <MDBContainer>
        {/* <NavBar /> */}
        <h1>
          <strong>SENPAI'S TRAPHOUSE</strong>
        </h1>
        <div>
          <img src={logo} alt="logo" style={{ height: "35%", width: "35%" }} />
          <p>
            <strong>
              Consuming, Promoting and Reviewing Anime from an Urban Perspective
            </strong>
          </p>
        </div>
        <MDBRow className="d-flex flex-column">
          <h2>
            <strong>NOTICE ME SENPAI</strong>
          </h2>
          <MDBRow className="d-flex justify-content-center">
            <MDBCol style={{ maxWidth: "40%" }}>
              <MDBCard style={{ height: "275px" }}>
                <MDBCardImage
                  src={people}
                  style={{ height: "150px", width: "100%" }}
                />
                <MDBCardBody>
                  <Link to="/senpais-blog">
                    <MDBCardTitle style={{ color: "black" }}>
                      SENPAI'S BLOG
                    </MDBCardTitle>
                  </Link>
                  <MDBCardText>Updates from your local Senpai</MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol style={{ maxWidth: "40%" }}>
              <MDBCard style={{ height: "275px" }}>
                <MDBCardImage
                  src={people}
                  style={{ height: "150px", width: "100%" }}
                />
                <MDBCardBody>
                  <Link to="/articles">
                    <MDBCardTitle style={{ color: "black" }}>
                      Articles
                    </MDBCardTitle>
                  </Link>
                  <MDBCardText>
                    Articles, Essays, Opinions, Reviews, Lists, and Puff Pieces,
                    covering the latest anime news and more...
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol style={{ maxWidth: "40%" }}>
              <MDBCard style={{ height: "275px" }}>
                <MDBCardImage
                  src={people}
                  style={{ height: "150px", width: "100%" }}
                />
                <MDBCardBody>
                  <Link to="/videos">
                    <MDBCardTitle style={{ color: "black" }}>
                      VIDEOS
                    </MDBCardTitle>
                  </Link>
                  <MDBCardText>
                    The Official Senpai's Traphouse Round Table Discussion and
                    more...
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
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
        <form onSubmit={this.submitHandler}>
          <MDBInput
            id="firstName"
            name="firstName"
            type="text"
            label="First Name"
            onChange={this.changeHandler}
            value={this.state.firstName}
            required
          />
          <MDBInput
            id="lastName"
            name="lastName"
            type="text"
            label="Last Name"
            onChange={this.changeHandler}
            value={this.state.lastName}
          />
          <MDBInput
            id="email"
            name="email"
            type="text"
            label="Email"
            onChange={this.changeHandler}
            value={this.state.email}
            required
          />
          <MDBInput
            id="comment"
            name="comment"
            type="text"
            label="Comment"
            onChange={this.changeHandler}
            onChange={this.state.comment}
            required
          />
          <MDBBtn size="lg" color="primary" type="submit">
            Submit Form
          </MDBBtn>
        </form>
        {/* <Footer /> */}
      </MDBContainer>
    );
  }
}

export default LandingPage;
