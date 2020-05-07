import React, { Component } from "react";
import gif from "../../images/gif.gif";
import { MDBContainer, MDBCol, MDBRow } from "mdbreact";
import "./blog.css";
class Blog extends Component {
  render() {
    return (
      <MDBContainer>
        <h2 className="blog-header">
          <strong>SENPAI'S BLOG</strong>
        </h2>
        <MDBRow style={{ paddingBottom: "3%" }}>
          <MDBCol>
            <div style={{ color: "white" }} className="text-left">
              <p className="blog-text">WELCOME TO THE TRAPHOUSE</p>
              <img src={gif} />
              {/* <div>
                <div>
                  <p>AUTHOR</p>
                  <p>just a few words from your Senpai</p>
                </div>
                <div>
                  <p>ARCHIVES</p>
                  <p>links to different months / years</p>
                </div>
                <div>
                  <p>CATEGORIES</p>
                  <p>different category options</p>
                </div>
              </div> */}
            </div>
          </MDBCol>
          <MDBCol>
            <div className="text-left" style={{ color: "white" }}>
              <p className="blog-text">
                Thank you for visiting the blog!
                <br />
                <br />
                As you can see, this blog is super new, but I intend to provide
                quality content as often as I possibly can either through these
                blog posts, various articles, and/or our round table discussion,
                "Senpai's Traphouse".
                <br />
                <br />
                A little about myself...I've been watching anime since I was
                about six when I saw my first episode of Pokemon. I enjoy almost
                all genres, and I'm willing to try almost any show once at
                least. You won't know you like it if you don't try. I also enjoy
                sci-fi movies, reading (Ender's Game is my all time favorite),
                and anything involving superheroes. I'm pretty terrible at video
                games, but Sonic is my Super Smash character and I almost always
                pick the water starter in Pokemon. (I think knowing these two
                things will tell you a lot about somebody!)
                <br />
                <br />
                I'm not perfect. I do not consider myself an expert by any
                means. I am just an anime fan like anyone else. So, if you ever
                have any comments, ideas, suggestions or whatever else, I'm
                always open to hearing it! This is like my passion project and I
                want everyone visiting to get the most out of their experience!
                <br />
                <br />
                Sincerely,
                <br />
                <strong>Your Senpai!</strong>
              </p>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Blog;
