import React, { Component } from "react";
import { Link } from "react-router-dom";
import relife from "../../images/relife.jpg";
import justBecause from "../../images/just-because.jpg";
import hostClub from "../../images/host-club.jpg";
import goldenTime from "../../images/golden-time.jpg";
import { MDBRow, MDBCol, MDBContainer, MDBIcon } from "mdbreact";
import "./articles.css";

class SchoolRecs extends Component {
  render() {
    return (
      <div
        className="w-100"
        style={{
          paddingBottom: "5%",
          marginRight: 0,
          marginLeft: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <div className="arrow text-left" style={{ paddingLeft: "3%" }}>
          <Link to="/articles">
            <MDBIcon
              icon="arrow-circle-left"
              size="3x"
              style={{ color: "#73bf32" }}
            />
          </Link>
        </div>
        <h2 className="schoolRecs" style={{ paddingBottom: "3%" }}>
          <strong>BACK TO SCHOOL RECS</strong>
        </h2>
        <MDBContainer>
          <MDBRow
            style={{ paddingBottom: "3%" }}
            className="school-recs-reverse"
          >
            <MDBCol style={{ paddingRight: 0, marginRight: 0 }}>
              <div className="text-left">
                <strong>
                  <p style={{ color: "white" }}>
                    <span style={{ color: "#5cbce0", fontSize: "1.3rem" }}>
                      One Season:
                    </span>
                    <br />
                    13 episodes and 4 OVA’s
                    <br />
                    <br />
                    <span style={{ color: "#5cbce0", fontSize: "1.3rem" }}>
                      What:
                    </span>
                    <br />
                    ReLife is a comedy drama that follows Arata Kaizaki, a
                    failing adult, as he enters The ReLife program. This program
                    gives him the temporary ability to look ten years younger so
                    that he can to redo high school and hopefully change his
                    future and perspective on life as a whole.
                    <br />
                    <br />
                    <span
                      style={{
                        color: "#5cbce0",
                        fontSize: "1.3rem",
                      }}
                    >
                      Why:
                    </span>
                    <br />
                    ReLife is both hilarious and emotionally real at times. It
                    deals with the ideas of failure, trauma, and the inability
                    to reach your full potential in both adulthood, and as a
                    decent person in general. <br />
                    <br />
                    After taking the pill to change his appearance and
                    re-entering high school as a transfer student, Arata sees
                    not only how things have changed since he graduated, but how
                    he has changed too. He’s always been personable, and he has
                    more experiences than the children he’s around, which allows
                    for him to offer them a completely different perspective on
                    life. Yet in his own life, he is stagnant and lost. <br />
                    <br />
                    While the idea of going back to high school sucks for most
                    people, even Arata, he has a chance to do some genuine good,
                    and maybe get a job out of it in the end. As long as he can
                    keep his secret safe, while still managing to do well in the
                    program (and not ruin any young lives), he might have a
                    chance to redo his life better the second time around.{" "}
                    <br />
                    <br />
                    ReLife is a good watch for anyone who enjoys slice of life
                    or high school drama. Watching Arata is incredibly relatable
                    for any young adult, especially one who’s struggled with
                    what step to take next. He’s a reluctant hero who’s drive to
                    do good in adversity makes you root for him every step of
                    the way.
                  </p>
                </strong>
              </div>
              <p style={{ color: "white" }} className="text-left"></p>
            </MDBCol>
            <MDBCol>
              <h2 style={{ color: "#5cbce0" }}>ReLife</h2>
              <p style={{ color: "#5cbce0" }}>
                <em>
                  <strong>
                    Available dubbed and subbed on Crunchyroll and VRV
                  </strong>
                </em>
              </p>
              <img src={relife} style={{ width: "100%" }} alt="" />
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ paddingBottom: "3%" }} className="school-recs">
            <MDBCol>
              <h2 style={{ color: "#8640ae" }}>Just Because</h2>
              <p style={{ color: "#8640ae" }}>
                <em>
                  <strong>
                    Available subbed on Amazon Prime Video & <br />
                    subbed and dubbed on VRV and HiDive
                  </strong>
                </em>
              </p>
              <img src={justBecause} style={{ width: "100%" }} alt="" />
            </MDBCol>
            <MDBCol style={{ paddingRight: 0, marginRight: 0 }}>
              <div className="text-left">
                <strong>
                  <p style={{ color: "white" }}>
                    <span style={{ color: "#8640ae", fontSize: "1.3rem" }}>
                      One Season:
                    </span>
                    <br /> 12 episodes <br />
                    <br />
                    <span style={{ color: "#8640ae", fontSize: "1.3rem" }}>
                      What:
                    </span>
                    <br /> Just Because is a high school drama that follows Eita
                    Izumi, a high school student who moves back to his hometown
                    for his final year of high school. He quickly discovers
                    things are simultaneously the same and different as he left
                    them. He still has a longstanding crush on Mio Natsume, who
                    still has a crush on his best friend, Haruto Sōma. <br />
                    <br />
                    As Eita reluctantly attempts to help the persistent
                    photography student, Ena Komiya, with her photography
                    contest, love triangles and college exams make coming back
                    home much more complicated than he expected. <br />
                    <br />
                    <span style={{ color: "#8640ae", fontSize: "1.3rem" }}>
                      Why:
                    </span>
                    <br /> Just Because is a classic slice of life anime that
                    deals with the everyday struggles of high school students.
                    There's some romance, and of course some comedy, as well as
                    sports anime elements thrown in for a little razzle dazzle.
                    There aren’t any crazy plot twists or supernatural
                    happenings, but what kept me coming back every week was the
                    strong characters and relationships. Everything I felt, I
                    felt hard. I think I went through the full spectrum of human
                    emotion watching this. I found myself truly invested in this
                    story and rooting for these kids along the way. At times the
                    show can be frustrating. The main character is very aloof,
                    often coming off as if he could care less about what's going
                    on, which is untrue. Even still, I enjoyed him. He was a
                    good contrast to many of the other, hyper characters with
                    strong personalities. While I will forever be butthurt about
                    the ending, many people found the anime to be very
                    realistic. Overall, this anime really does remind you about
                    the importance of strong friendships and how they can
                    withstand the test of time if you give them a chance. It’s
                    quite honest in the sense that not everyone gets what they
                    want, but they all learn something valuable along the way.{" "}
                    <br />
                    <br />
                    {/* <span style={{ color: "#8640ae" }}> */}
                    At times the show can be frustrating. The main character is
                    very aloof, often coming off as if he could care less about
                    what's going on, which is untrue. Even still, I enjoyed him.
                    He was a good contrast to many of the other, hyper
                    characters with strong personalities. While I will forever
                    be butthurt about the ending, many people found the anime to
                    be very realistic. Overall, this anime really does remind
                    you about the importance of strong friendships and how they
                    can withstand the test of time if you give them a chance.
                    It’s quite honest in the sense that not everyone gets what
                    they want, but they all learn something valuable along the
                    way.
                    {/* </span> */}
                  </p>
                </strong>
              </div>
            </MDBCol>
          </MDBRow>

          <MDBRow
            style={{ paddingBottom: "3%" }}
            className="school-recs-reverse"
          >
            <MDBCol style={{ paddingRight: 0, marginRight: 0 }}>
              <div className="text-left">
                <strong>
                  <p style={{ color: "white" }}>
                    <span style={{ color: "#ff0a7a", fontSize: "1.3rem" }}>
                      One Season:
                    </span>{" "}
                    <br />
                    26 episodes <br />
                    <br />
                    <span style={{ color: "#ff0a7a", fontSize: "1.3rem" }}>
                      What:
                    </span>
                    <br />
                    This anime follows the story of Haruhi Fujioka, a girl
                    attending a ritzy private school on a scholarship. In the
                    first of what will turn out to be a series of wild antics,
                    she breaks a ridiculously expensive vase in what she thinks
                    is a random music room. Unable to pay for the vase, the
                    occupants of that room decide she can pay back its value by
                    working in their “host club”, entertaining the school’s
                    female population. The only problem is, unlike the other
                    members, Haruhi is not a boy. She simply looks like one.
                    However, she does seem to have a real talent for
                    entertaining girls though. <br />
                    <br />
                    <span style={{ color: "#ff0a7a", fontSize: "1.3rem" }}>
                      Why:
                    </span>
                    <br /> Host Club is easily one of the funniest animes I’ve
                    ever watched. At times it’s downright campy in its humor,
                    but still incredibly entertaining. It features a range of
                    over the top characters, but still manages to stay grounded
                    with a few more serious elements, feelings and backstories.
                    It's hard not to find yourself loving every character for
                    one reason or another, though I do have my favorites (I'm a
                    sucker for anyone dubbed by Greg Ayres). There’s romance, a
                    touch of mild drama, and a ton of humor to round out this
                    anime and make it a fun, easy watch. <br />
                    <br />
                    If you've ever heard of Host Club, it's popularity basically
                    speaks for itself. It's the kind of anime you can watch more
                    than once and never get tired of it.
                  </p>
                </strong>
              </div>
            </MDBCol>
            <MDBCol>
              <h2 style={{ color: "#ff0a7a" }}>Ouran High School Host Club</h2>
              <p style={{ color: "#ff0a7a" }}>
                <em>
                  <strong>Available subbed and dubbed on Netflix</strong>
                </em>
              </p>
              <img src={hostClub} style={{ width: "100%" }} alt="" />
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ paddingBottom: "3%" }} className="school-recs">
            <MDBCol>
              <h2 style={{ color: "#dab844" }}>Golden Time</h2>
              <p style={{ color: "#dab844" }}>
                <em>
                  <strong>
                    Available subbed VRV and HiDive. <br />
                    (It was recently announced that HIDIVE <br />
                    will be releasing a dubbed version on DVD)
                  </strong>
                </em>
              </p>
              <img src={goldenTime} style={{ width: "100%" }} alt="" />
            </MDBCol>
            <MDBCol style={{ paddingRight: 0, marginRight: 0 }}>
              <div className="text-left">
                <strong>
                  <p style={{ color: "white" }}>
                    <span style={{ color: "#dab844", fontSize: "1.3rem" }}>
                      One Season:
                    </span>
                    <br /> 24 episodes <br />
                    <br />
                    <span style={{ color: "#dab844", fontSize: "1.3rem" }}>
                      What:
                    </span>
                    <br /> Golden Time follows Tada Banri, a college freshman
                    trying to navigate college after a recent accident leaves
                    him with no memories of his past. Along the way he discovers
                    both friendship and love, while learning more about he is,
                    and who he was, in the process. <br />
                    <br />
                    <span style={{ color: "#dab844", fontSize: "1.3rem" }}>
                      Why:
                    </span>
                    <br /> At first, Golden Time presents itself as your classic
                    slice of life, romantic comedy, but it soon reveals itself
                    to be much more than that. It is an emotional roller coaster
                    that, at times, can be downright heartbreaking (I may or may
                    not have cried). Yet it still manages to come off fun and
                    make the viewer laugh. It has its own range of twists and
                    turns, as you watch Banri learn more about his past.
                    <br />
                    <br />
                    What makes it interesting is, unlike most people, Banri
                    isn’t fighting to go back to who he was before his accident.
                    His story isn’t driven by a desire to be his old self again.
                    Instead he attempts to move forward and have new experiences
                    as a new Banri, even when his past forces its way to the
                    forefront of his life. It’s interesting to see this story
                    line play out different from the norm. You find yourself
                    torn between rooting for both the old and the new Banri.{" "}
                    <br />
                    <br />
                    The supporting cast rounds out this anime well. They have
                    their own unique story lines that are hilarious and
                    compelling in their own right. Golden Time puts a unique
                    spin on college life and how hard it can be to find yourself
                    as a young adult.
                  </p>
                </strong>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default SchoolRecs;
