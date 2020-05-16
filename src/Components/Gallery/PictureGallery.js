import React, { Component } from "react";
import dragonball from "../../images/Traphouse Pics/dragonball.JPG";
import hisoka from "../../images/Traphouse Pics/hisoka.jpeg";
import kaneki from "../../images/Traphouse Pics/kaneki.jpeg";
import stab_ban from "../../images/Traphouse Pics/stab_ban.jpeg";
import unknown from "../../images/Traphouse Pics/unknown.jpeg";
import venom from "../../images/Traphouse Pics/venom.jpeg";
import yang from "../../images/Traphouse Pics/yangvbakugo.jpg";
import "./picturegallery.css";
import { MDBContainer, MDBBtn, MDBRow, MDBCol, MDBIcon } from "mdbreact";

class PictureGallery extends Component {
  state = {
    index: Math.floor(Math.random() * 7),
    pictureList: [hisoka, dragonball, stab_ban, yang, kaneki, venom, unknown],
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
        <MDBRow style={{ paddingBottom: "7%" }}>
          <MDBCol>
            <img
              src={this.state.pictureList[0]}
              alt=""
              style={{ width: "100%" }}
            />{" "}
          </MDBCol>
          <MDBCol>
            <img
              src={this.state.pictureList[1]}
              alt=""
              style={{ width: "100%", paddingBottom: "7%" }}
            />
            <img
              src={this.state.pictureList[2]}
              alt=""
              style={{ width: "100%" }}
            />
          </MDBCol>
        </MDBRow>
        <MDBRow>
          <MDBCol>
            <img
              src={this.state.pictureList[3]}
              alt=""
              style={{ width: "100%", paddingBottom: "7%" }}
            />
            <img
              src={this.state.pictureList[4]}
              alt=""
              style={{ width: "100%" }}
            />
          </MDBCol>
          <MDBCol>
            <img
              src={this.state.pictureList[5]}
              alt=""
              style={{ width: "100%" }}
            />
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
