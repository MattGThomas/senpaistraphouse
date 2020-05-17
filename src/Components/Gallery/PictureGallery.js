import React, { Component } from "react";
import dragonball from "../../images/Traphouse Pics/dragonball.JPG";
import hisoka from "../../images/Traphouse Pics/hisoka.jpeg";
import kaneki from "../../images/Traphouse Pics/kaneki.jpeg";
import stab_ban from "../../images/Traphouse Pics/stab_ban.jpeg";
import unknown from "../../images/Traphouse Pics/unknown.jpeg";
import venom from "../../images/Traphouse Pics/venom.jpeg";
import yang from "../../images/Traphouse Pics/yangvbakugo.jpg";
import "./picturegallery.css";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";

class PictureGallery extends Component {
  state = {
    index: Math.floor(Math.random() * 7),
    pictureList: [hisoka, dragonball, stab_ban, yang, kaneki, venom, unknown],
    array: [
      {
        name: "Hisoka",
        anime: "Hunter x Hunter",
        picture: hisoka,
      },
      {
        name: "Goku & The Prince of All Saiyans (Vegeta)",
        anime: "Dragonball Super",
        picture: dragonball,
      },
      { name: "King & Ban", anime: "Seven Deadly Sins", picture: stab_ban },
      {
        name: "Yang & Lord Explosion Murder",
        anime: "RWBY & My Hero Academia",
        picture: yang,
      },
      {
        name: "Kaneki",
        anime: "Tokyo Ghoul",
        picture: kaneki,
      },
      {
        name: "Venom",
        anime: "Marvel Comics ...well not an anime, but close enough",
        picture: venom,
      },
    ],
  };
  nextPic = () => {
    if (this.state.index + 1 === this.state.pictureList.length) {
      this.setState({
        index: 0,
      });
    } else {
      this.setState({
        index: this.state.index + 1,
      });
      console.log(this.state.index);
    }
  };
  prevPic = () => {
    if (this.state.index - 1 === -1) {
      this.setState({
        index: this.state.pictureList.length - 1,
      });
    } else {
      this.setState({
        index: this.state.index - 1,
      });
    }
  };

  get pictureCaption() {
    let index = this.state.index;
    if (index === 0) {
      return (
        <div style={{ color: "white" }} className="text-left">
          <h2>Character: Hisoka</h2>
          <p>Anime: Hunter x Hunter</p>
        </div>
      );
    } else if (index === 1) {
      return (
        <div style={{ color: "white" }} className="text-right">
          <h2>Character: Goku vs. Vegeta</h2>
          <p>Anime: Dragonball Super</p>
        </div>
      );
    } else if (index === 2) {
      return (
        <div style={{ color: "white" }} className="text-right">
          <h2>Characters: Ban and King</h2>
          <p>Anime: Seven Deadly Sins</p>
        </div>
      );
    } else if (index === 3) {
      return (
        <div style={{ color: "white" }} className="text-right">
          <h2>Characters: Yang vs. Bakugo</h2>
          <p>Anime: RWBY and BNHA (respectively)</p>
        </div>
      );
    } else if (index === 4) {
      return (
        <div style={{ color: "white" }} className="text-right">
          <h2>Character: Kaneki</h2>
          <p>Anime: Tokyo Ghoul</p>
        </div>
      );
    } else if (index === 5) {
      return (
        <div
          style={{ color: "white", height: "200px", width: "200px" }}
          className="text-right"
        >
          <h2>Character: Venom</h2>
          <p>Anime, not anime: Marvel Comics</p>
          <p>I know this is an anime site, but this was just too good</p>
        </div>
      );
    } else if (index === 6) {
      return (
        <div style={{ color: "white" }} className="text-right">
          <h2>Character: unknown</h2>
          <p>Anime: Idk who this even is if im being honest</p>
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    return (
      <MDBContainer className="picture-gallery">
        <h2 className="picture-gallery-header">Senpai's Picture Gallery</h2>
        <MDBRow style={{ paddingBottom: "7%" }} className="picture-row">
          <MDBCol style={{ height: "100%" }}>
            <div className="picture-container">
              <img
                src={this.state.array[0].picture}
                alt=""
                style={{ width: "100%" }}
              />
              <div className="picture-overlay">
                <div className="picture-description">
                  Anime: {this.state.array[0].anime}&nbsp; <br />
                  Character: {this.state.array[0].name}
                </div>
              </div>
            </div>
          </MDBCol>

          <MDBCol>
            <div className="picture-container">
              <img
                src={this.state.array[1].picture}
                alt=""
                style={{ width: "100%" }}
              />
              <div className="picture-overlay">
                <div className="picture-description">
                  Anime: {this.state.array[1].anime}&nbsp; <br />
                  Character: {this.state.array[1].name}
                </div>
              </div>
            </div>

            <div className="picture-container">
              <img
                src={this.state.array[2].picture}
                alt=""
                style={{ width: "100%" }}
              />
              <div className="picture-overlay">
                <div className="picture-description">
                  Anime: {this.state.array[2].anime}&nbsp; Character:{" "}
                  {this.state.array[2].name}
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        <MDBRow className="picture-row">
          <MDBCol>
            <div className="picture-container">
              <img
                src={this.state.array[3].picture}
                alt=""
                style={{ width: "100%" }}
              />
              <div className="picture-overlay">
                <div className="picture-description">
                  Anime: {this.state.array[3].anime}&nbsp; Character:{" "}
                  {this.state.array[3].name}
                </div>
              </div>
            </div>

            <div className="picture-container">
              <img
                src={this.state.array[4].picture}
                alt=""
                style={{ width: "100%" }}
              />
              <div className="picture-overlay">
                <div className="picture-description">
                  Anime: {this.state.array[4].anime}&nbsp; Character:{" "}
                  {this.state.array[4].name}
                </div>
              </div>
            </div>
          </MDBCol>
          <MDBCol>
            <div className="picture-container">
              <img
                src={this.state.array[5].picture}
                alt=""
                style={{ width: "100%" }}
              />
              <div className="picture-overlay">
                <div className="picture-description">
                  Anime: {this.state.array[5].anime}&nbsp; Character:{" "}
                  {this.state.array[5].name}
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
        {/* <MDBRow className="picture-gallery" style={{ paddingBottom: "10%" }}>
          <MDBCol> */}
        {/* <div> */}

        {/* 
            <div className="pictures">
              <img
                src={this.state.pictureList[this.state.index]}
                style={{ height: "90%", width: "90%" }}
                alt=""
              />
              <div className="circle-dots">
                <MDBIcon
                  icon="dot-circle"
                  size="2x"
                  style={{ color: "#73bf32" }}
                  onClick={() => {
                    this.setState({
                      index: 0,
                    });
                  }}
                />
                <MDBIcon
                  icon="dot-circle"
                  size="2x"
                  style={{ color: "#73bf32" }}
                  onClick={() => {
                    this.setState({
                      index: 1,
                    });
                  }}
                />
                <MDBIcon
                  icon="dot-circle"
                  size="2x"
                  style={{ color: "#73bf32" }}
                  onClick={() => {
                    this.setState({
                      index: 2,
                    });
                  }}
                />
                <MDBIcon
                  icon="dot-circle"
                  size="2x"
                  style={{ color: "#73bf32" }}
                  onClick={() => {
                    this.setState({
                      index: 3,
                    });
                  }}
                />
                <MDBIcon
                  icon="dot-circle"
                  size="2x"
                  style={{ color: "#73bf32" }}
                  onClick={() => {
                    this.setState({
                      index: 4,
                    });
                  }}
                />
                <MDBIcon
                  icon="dot-circle"
                  size="2x"
                  style={{ color: "#73bf32" }}
                  onClick={() => {
                    this.setState({
                      index: 5,
                    });
                  }}
                />
                <MDBIcon
                  icon="dot-circle"
                  size="2x"
                  style={{ color: "#73bf32" }}
                  onClick={() => {
                    this.setState({
                      index: 6,
                    });
                  }}
                />
              </div>
            </div>
            <div className="pic-arrows">
              <MDBIcon
                icon="arrow-alt-circle-left"
                size="2x"
                onClick={this.prevPic}
                style={{ color: "#73bf32" }}
              />

              <MDBIcon
                icon="arrow-alt-circle-right"
                size="2x"
                onClick={this.nextPic}
                style={{ color: "#73bf32" }}
              />
            </div> */}
        {/* <MDBBtn onClick={this.prevPic} outline="true" color="white">
              prev
            </MDBBtn> */}

        {/* <MDBBtn onClick={this.nextPic} outline="true" color="white">
              next
            </MDBBtn> */}
        {/* </div> */}
        {/* </MDBCol>
          <MDBCol>
            <div>{this.pictureCaption}</div>
          </MDBCol>
        </MDBRow> */}
      </MDBContainer>
    );
  }
}

export default PictureGallery;
