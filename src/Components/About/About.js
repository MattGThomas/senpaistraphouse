import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import "./About.css";
class About extends Component {
  render() {
    return (
      <div className="about">
        {/* <div className="text-left" style={{ paddingLeft: "3%" }}>
          <Link to="/">
            <MDBIcon
              icon="arrow-circle-left"
              size="3x"
              style={{ color: "#73bf32" }}
            />
          </Link>
        </div> */}
        <h2 className="reasons-1" style={{ paddingBottom: "3%" }}>
          <strong>About the traphouse</strong>
        </h2>
        <MDBContainer>
          <MDBRow>
            <MDBCol>
              <p className="text-left text-para" style={{ color: "white" }}>
                Senpai's Traphouse is a site for fans, run by fans, providing a
                new, fresh take on everyone's favorite shows from a more urban
                perspective. This is about being able to take one of favorite
                genres and discuss it in a way that relates to our own lives and
                experiences.
                <br />
                <br /> After searching the market for a site dedicated to
                reviews from a average viewers like myself, I couldn't find
                anything that quite fit the bill. There are many large anime
                blogs out there for anime inspiration, reviewing anime from a
                feminist perspective, or simply offering anime lists, but
                nothing with the voice and perspective I was looking for, so I
                thought, why not try providing that content myself?{" "}
              </p>
            </MDBCol>
            {/* <MDBCol></MDBCol> */}
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default About;
