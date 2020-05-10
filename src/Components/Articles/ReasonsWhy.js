import React, { Component } from "react";
import { Link } from "react-router-dom";
import anohana from "../../images/anohana.jpg";
import orange from "../../images/orange.jpg";
import { MDBTypography, MDBRow, MDBCol, MDBContainer, MDBIcon } from "mdbreact";
import "./articles.css";

class ReasonsWhy extends Component {
  render() {
    return (
      <div>
        <div
          className="text-left"
          style={{ paddingLeft: "3%" }}
          className="arrow text-left"
        >
          <Link to="/articles">
            <MDBIcon
              icon="arrow-circle-left"
              size="3x"
              style={{ color: "#73bf32" }}
            />
          </Link>
        </div>
        <h2 className="reasons" style={{ paddingBottom: "3%" }}>
          <strong>IF YOU LIKE... '13 REASONS WHY'</strong>
        </h2>
        <MDBContainer>
          <MDBRow style={{ paddingBottom: "3%" }} className="school-recs">
            <MDBCol>
              <h2 style={{ color: "#da8044" }}>Orange.</h2>
              <p style={{ color: "#da8044" }}>
                <em>
                  <strong>
                    Available dubbed on Funimation and subbed on Crunchyroll and
                    VRV.
                  </strong>
                </em>
              </p>
              <img src={orange} style={{ width: "100%" }} />
            </MDBCol>
            <MDBCol>
              <div className="text-left">
                <p style={{ color: "white" }}>
                  <span style={{ color: "#da8044", fontSize: "1.3rem" }}>
                    One Season:
                  </span>
                  <br /> 13 episodes. One continuation movie. <br />
                  <br />
                  <span style={{ color: "#da8044", fontSize: "1.3rem" }}>
                    Status:
                  </span>
                  <br /> Complete.
                  <br />
                  <br />
                  Orange is an interesting mix of slice of life, sci-fi, romance
                  and drama. Much like 13 Reasons Why, it centers around a group
                  of high school kids. Their lives are changed forever by the
                  introduction of transfer student, Kakeru Naruse.
                  <br />
                  <br />
                  <span style={{ color: "#da8044", fontSize: "1.3rem" }}>
                    Synopsis:
                  </span>
                  <br /> After a meet up to celebrate the life of their friend,
                  Kakeru Naruse, Naho Takamiya decides to write a letter to her
                  former self in hopes of reversing the tragic suicide that
                  would change the lives of her and her friends.
                  <br />
                  <br />
                  <span style={{ color: "#da8044", fontSize: "1.3rem" }}>
                    Similarities:
                  </span>
                  <br /> Much like 13 Reasons, Orange deals with the topics of
                  teen suicide, budding teenage romance and friendship. Naho
                  Takamiya struggles with feelings for Kakeru, as well as how to
                  help him when it becomes obvious that something is wrong. She
                  is very much the Clay of the series--unsure about growing up
                  and unsure how her feelings play into her friendship with
                  Kakeru. Orange illustrates how difficult it can be to help
                  someone who is trying to come across as if nothing is wrong.
                  Elements of depression and guilt round out the deep
                  relationships and motivations of this intimate group of
                  friends.
                  <br />
                  <br />
                  <span style={{ color: "#da8044", fontSize: "1.3rem" }}>
                    Why You Should Give It A Chance:
                  </span>
                  <br /> While Orange definitely has a similar subject matter
                  and tone to 13 Reasons. Still, there are a few things that set
                  it apart and make it it's own unique experience. A sci-fi
                  element sounds strange in an anime so heavily focused on
                  depression and mental health. However, I did manage to get one
                  of my non-anime watching friends to check it out simply based
                  on the idea that it was similar to 13 Reasons and she was
                  pleasantly surprised by how much she liked it. (She binge
                  watched it in two days)
                  <br />
                  <br />
                  Orange has a strong theme of guilt and the characters are
                  often driven by the idea of what cues they missed and what
                  they could've done differently to help their friend. Naho is
                  as skeptical as anyone when she receives letters from her
                  "future" self, but she soon realizes there might actually be
                  some truth behind the words in the letter. The futuristic
                  element adds a whole new layer of depth, as the viewer sees
                  not only what has to change in the past, but what these
                  characters are giving up in the future to save the life of
                  their friend.
                  <br />
                  <br />​ The cast of friends and side characters are also an
                  incredibly memorable part of this anime. Along with being
                  crazy loyal, they don't come across as stock characters who
                  are there for only classic comic relief or as the generic best
                  friends. Each character has a role to play, and to this day,
                  all I can say is that Suwa might just be one of the best anime
                  friends of all time. (Don't sleep on the guy with the glasses
                  though) Much like Jeff in 13 Reasons, Suwa deserved so much
                  better.
                </p>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow
            style={{ paddingBottom: "4%" }}
            className="school-recs-reverse"
          >
            <MDBCol>
              <div className="text-left">
                <p style={{ width: "100%", color: "white" }}>
                  <span style={{ color: "#d061c7", fontSize: "1.3rem" }}>
                    One Season:
                  </span>
                  <br /> 11 episodes.
                  <br />
                  <br />
                  <span style={{ color: "#d061c7", fontSize: "1.3rem" }}>
                    Status:
                  </span>
                  <br /> Complete.
                  <br />
                  <br />
                  Anohana is only something you should watch if you're prepared
                  to cry--like red faced, heaving, ugly cry. It's a painful look
                  at what it's like to grow up, grow apart from your friends,
                  and how hard it is to handle grief as a child.
                  <br />
                  <br />
                  <span style={{ color: "#d061c7", fontSize: "1.3rem" }}>
                    Synopsis:
                  </span>
                  <br /> A group of childhood friends drift apart after one of
                  them dies in a tragic accident. Years later, Jinta Yadomi, the
                  leader of the group with a once promising future, has become a
                  depressed, withdrawn shell of his former self. In a
                  surprising, supernatural twist, the ghost of his old friend,
                  Menma, appears to him, asking him to help her grant her wish
                  so that she can move on to the afterlife. The problem is,
                  granting the wish requires the help of all of their old
                  friends, and not only has Jinta not talked to his friends in
                  years, he's the only one who can see Menma's ghost at all.
                  <br />
                  <br />
                  <span style={{ color: "#d061c7", fontSize: "1.3rem" }}>
                    Similarities:
                  </span>
                  <br /> Much like 13 Reasons, Anohana deals with the aftermath
                  of the death of a friend. Jinta's demeanor will definitely
                  give you Clay vibes. His emotions and struggle to finally move
                  on from what happened are painfully easy to relate to.
                  <br />
                  <br />
                  Anohana offers a solid cast of characters, not all of whom are
                  kind or supportive. Some are rough around the edges, weird, or
                  even downright cruel at times. Like everyone who was featured
                  on Hannah Baker's tapes, everyone in Anohana has a different
                  way of dealing with their grief and some surprising
                  backstories. From parents to friends, there is no shortage of
                  character development and growth as you watch these people
                  come to terms with a death that's been haunting them for
                  years.
                  <br />
                  <br />
                  Why You Should Give It A Chance: While Anohana doesn't deal
                  with suicide, premature death is just as hard regardless.
                  Honestly though, this anime left me screwed up and thinking
                  about it for several days after I finished it. It has an
                  interesting supernatural element to it with Menma's ghost as a
                  main character in the anime. Her relationship with Jinta will
                  seem reminiscent of Clay and Hannah's, as there is obviously a
                  strong connection there.
                  <br />
                  <br />
                  What sets Anohana apart though, is the sense of closure that
                  comes along with watching the series. It's obvious these
                  characters are hurting and have been for a while, but it's
                  almost worse watching them get over that pain. Anohana offers
                  a raw look into depression, unresolved issues, and growing up.
                  There is no shortage of emotion in this anime and in just 11
                  episodes, I found myself questioning how I viewed grief and
                  death entirely. If you're looking for an emotional roller
                  coaster drama, this is definitely one to add to your list.
                  <br />
                </p>
              </div>
            </MDBCol>
            <MDBCol>
              <h2 style={{ color: "#d061c7" }}>
                Anohana: The Flowers We Saw That Day
              </h2>
              <p style={{ color: "#d061c7" }}>
                <em>
                  <strong>
                    Available subbed on Crunchyroll and VRV, subbed and dubbed
                    on Netflix.
                  </strong>
                </em>
              </p>
              <img src={anohana} style={{ width: "100%" }} />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default ReasonsWhy;
