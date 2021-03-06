import React, { Component } from "react";
import ReactPlayer from "react-player";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import threed from "../../images/new_logos/3d_logo.jpg";
import "./videos.css";
class Videos extends Component {
  render() {
    return (
      <div>
        <MDBContainer
          style={{ backgroundImage: `url(${threed})` }}
          className="videos-background"
        >
          <div className="videos">
            <h2 style={{ color: "white" }}>WELCOME TO THE TRAPHOUSE PODCAST</h2>
          </div>
          <MDBRow>
            {/* <div>
              <p style={{ color: "#FFFFFF" }} className="text-center">
                SENPAI'S TRAPHOUSE EP. 1: PILOT
              </p>
            </div> */}
          </MDBRow>
          <MDBRow className="stupid-video">
            <MDBCol>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=bZ_Ye4Rz6Ws"
                width="100%"
              />
            </MDBCol>
            <MDBCol className="text-left" style={{ paddingBottom: "16%" }}>
              {/* <span className="p-2 text-left">
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
          </span> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default Videos;
