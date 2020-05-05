import React, { Component } from "react";
import ReactPlayer from "react-player";

class Videos extends Component {
  render() {
    return (
      <div>
        <h2>SENPAI'S TRAPHOUSE EP. 1: PILOT</h2>
        <ReactPlayer url="https://www.youtube.com/watch?v=bZ_Ye4Rz6Ws" />
        <div>
          <p>
            <strong>
              A round table style discussion covering a variety of anime related
              topics
            </strong>
          </p>
          <p>Ep. 1: Pilot </p>
          <ul>
            <li>Sake and a Snack: Dorayaki, Mochi, Coffee, Pocky, Sake</li>
            <li>Icebreaker: How did you get into anime</li>
            <li>Main Topic: Good and Bad Anime Fathers</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Videos;
