import React, { Component } from "react";
import { Link } from "react-router-dom";
import { MDBRow, MDBCol, MDBContainer, MDBIcon } from "mdbreact";
import neverland from "../../images/neverland.jpg";
import abyss from "../../images/abyss.jpg";
import parasyte from "../../images/parasyte.jpg";
import evangelion from "../../images/neonGenesis.jpeg";
import "./articles.css";

class StrangerThings extends Component {
  render() {
    return (
      <div>
        <div
          // className="text-left"
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
        <h2 className="strangerThings" style={{ paddingBottom: "3%" }}>
          <strong>IF YOU LIKE... 'STRANGER THINGS'</strong>
        </h2>
        <MDBContainer>
          <MDBRow
            style={{ paddingBottom: "3%" }}
            className="school-recs-reverse"
          >
            <MDBCol>
              <div className="text-left">
                <p style={{ color: "white" }}>
                  <span style={{ color: "#da8044", fontSize: "1.3rem" }}>
                    One Season:
                  </span>
                  <br />
                  12 episodes
                  <br />
                  <br />
                  <span style={{ color: "#da8044", fontSize: "1.3rem" }}>
                    Status:
                  </span>
                  <br />
                  Season 2 now playing
                  <br />
                  <br />
                  The Promised Neverland is a sci-fi, mystery, thriller that,
                  like Stranger Things, centers around a group of young
                  children. Their lives are changed forever after realizing the
                  orphanage they live in may not be all it seems.
                  <br />
                  <br />
                  <span style={{ color: "#da8044", fontSize: "1.3rem" }}>
                    Synopsis
                  </span>
                  <br />
                  Eleven-year-olds Emma, Norman and Ray live a seemingly perfect
                  life with their siblings in the Grace Field House Orphanage.
                  They spend their days hoping to be adopted into good families
                  like the kids that left before them. Although it is strange
                  that none of their previous siblings ever reach out to them
                  after leaving, the children imagine it must be because of how
                  great they are doing on the outside.
                  <br />
                  <br />
                  When their younger sibling, Conny, is adopted, the children
                  discover that leaving Grace Field is a far more complicated,
                  sinister farewell.
                  <br />
                  <span style={{ color: "#da8044", fontSize: "1.3rem" }}>
                    Similarities
                  </span>
                  <br />
                  <span style={{ color: "red", fontSize: "1.3rem" }}>
                    (Mild Spoilers)
                  </span>
                  Much like Stranger Things, Promised Neverland is rooted
                  closely in strong friendships and familial bonds. While the
                  idea of a story centered around children might not grab
                  everyone’s attention, there are plenty of shady adults to go
                  around as well.
                  <br />
                  <br />
                  As the central character, Emma gives off serious girl-power
                  vibes much like Eleven. She is willing to do anything for her
                  peers. An array of terrifying, man eating demons really adds
                  to the Stranger Things aesthetic, as the children come to
                  terms with the impending doom that is closing in on them.
                  <br />
                  <br />
                  <span style={{ color: "#da8044", fontSize: "1.3rem" }}>
                    Why You Should Give It A Chance
                  </span>
                  <br />
                  Promised Neverland is probably the closest anime on this list
                  to Stranger Things. If you enjoy a good coming of age story,
                  this is a solid choice. It’s hard enough making life altering
                  decisions as an adult, but as a child, it’s even
                  crazier—especially when the lives of your loved ones are on
                  the line.
                  <br />
                  <br />
                  This show gives you a much needed re-up on the mystery and
                  sci-fi elements that makes Stranger Things great. There were
                  times when I didn’t know who I could trust, if anyone, and it
                  delivers several solid plot twists along the way. As someone
                  who has not read the manga, I was on the edge of my seat each
                  week.
                  <br />
                  <br />
                  Much like the kids of Hawkins Elementary, Emma, Ray and Norman
                  are all extremely smart, and it’s interesting to see their
                  various plots and plans both succeed and fail. You’ll be
                  rooting for the children the entire way, but not without a
                  little bit of heartbreak and nail biting as well.
                </p>
              </div>
            </MDBCol>
            <MDBCol>
              <h2 style={{ color: "#da8044" }}>The Promised Neverland</h2>
              <p style={{ color: "#da8044" }}>
                <em>
                  <strong>
                    Available dubbed on Toonami & subbed on Crunchyroll, VRV and
                    HiDive
                  </strong>
                </em>
              </p>

              <img src={neverland} style={{ width: "100%" }} alt="" />
            </MDBCol>
          </MDBRow>
          <MDBRow className="school-recs">
            <MDBCol>
              <h2 style={{ color: "#81c94c" }}>Made in the Abyss</h2>
              <p style={{ color: "#81c94c" }}>
                <em>
                  <strong>Available dubbed and subbed on VRV and HiDive</strong>
                </em>
              </p>
              <img src={abyss} style={{ width: "100%" }} alt="" />
            </MDBCol>
            <MDBCol>
              <div className="text-left">
                <p style={{ color: "white" }}>
                  <span style={{ color: "#81c94c", fontSize: "1.3rem" }}>
                    One season:
                  </span>
                  <br />
                  13 episodes. Two recap movies
                  <br />
                  <br />
                  <span style={{ color: "#81c94c" }}>Status</span>
                  <br />
                  receiving a sequel movie in 2020
                  <br />
                  <br />
                  Made in the Abyss is a very unique fantasy, sci fi, adventure
                  anime about the obstacles people are willing to face for the
                  ones they love.
                  <br />
                  <br />
                  <span style={{ color: "#81c94c" }}>Synopsis</span>
                  <br />
                  Twelve-year-old orphan, Riko, aspires to be a famous cave
                  raider one day, just like her mother, “Liza the Annihilator”.
                  She wants to search for artifacts and discover the secrets of
                  The Abyss, a huge gaping hole in the middle of Earth filled
                  with amazing treasure and terrifying monsters. Neither The
                  Curse of the Abyss, or the fact that her mother journeyed down
                  on a mission and never returned, are enough to deter her from
                  achieving her goal.
                  <br />
                  <br />
                  She soon meets a young robot boy in the Abyss named Reg. A
                  real jackpot - he’s about as mysterious and exciting as Abyss
                  treasure gets. He has no memories, but the two form a deep
                  connection regardless.
                  <br />
                  <br />
                  One day, a note reaches the surface, supposedly from Liza,
                  with a secret message that she is waiting for her daughter at
                  the bottoms of the Abyss. Despite the danger of potential
                  death, Riko knows she must make the trip find her mother. So,
                  she and Reg set off on a journey that will forever change
                  their lives.
                  <br />
                  <br />
                  <span style={{ color: "#81c94c" }}>Similarities</span>
                  <br />
                  Like Promised Neverland and Stranger Things, this anime is
                  also centered around children. However, it definitely isn’t an
                  anime for younger audiences. It offers array of beasts and
                  monsters to be overcome, as well as a number of adult allies
                  and foes to be dealt with along the way.
                  <br />
                  <br />
                  While Riko is a normal human girl, Reg is definitely more an
                  Eleven type character. He comes with a mysterious past, and a
                  limited knowledge of how the real world works. Regardless, he
                  is incredibly loyal, has bad ass powers and is just all around
                  adorable.
                  <br />
                  <br />
                  <span style={{ color: "#81c94c" }}>
                    Why You Should Give It A Chance
                  </span>
                  <br />
                  Made in the Abyss has some very original world building going
                  on. Unlike Stranger Things, it takes place in more of a
                  fantasy type era but is still a good watch even if you aren’t
                  much into fantasy.
                  <br />
                  <br />
                  The animation style feels a little unconventional at
                  first—more cartoonish/chibi-ish than your average anime, but
                  it’s not a hard style to get used to. It works well for the
                  story the anime is telling. It’s not hard to fall in love with
                  the characters and their designs after an episode or two.
                  <br />
                  <br />
                  Although at first the anime might seem childish, it is
                  anything but. There are deep themes of family, loss, loyalty,
                  death and sacrifice that give this anime a much darker
                  storyline than children going on an adventure. There’s also
                  plenty of action, gore, and even scientific experiments on
                  humans that are basically fucking torture. Overall, it’s going
                  to be far from what you’re expecting but in all of the best
                  ways possible.
                  <br />
                  <br />
                  While it might feel like it’s start off slow, once viewers
                  make it into the Abyss, it begins to pick up and around
                  episode nine I started crying like a baby and basically didn’t
                  stop until the end—so be prepared. This anime is definitely
                  worth the pain.
                </p>
              </div>
            </MDBCol>
          </MDBRow>
          <MDBRow
            style={{ paddingBottom: "3%" }}
            className="school-recs-reverse"
          >
            <MDBCol>
              <div className="text-left">
                <p style={{ color: "white" }}>
                  <span style={{ color: "#8d2424", fontSize: "1.3rem" }}>
                    One Season:
                  </span>
                  <br />
                  24 episodes
                  <br />
                  <br />
                  <span style={{ color: "#8d2424", fontSize: "1.3rem" }}>
                    Status
                  </span>
                  <br />
                  Complete
                  <br />
                  <br />
                  Parasyte is a sci-fi, horror thriller that deals with the
                  tougher sides of being a reluctant hero. <br />
                  <br />
                  <span style={{ color: "#8d2424", fontSize: "1.3rem" }}>
                    Synopsis:
                  </span>
                  <br />
                  Shinichi Izumi is a normal, seventeen-year-old, high school
                  boy until one night he is infected by an alien parasite.
                  Although meant to take over his entire body through his head
                  and use it as his host, the parasite fails and burrows into
                  his hand instead, leaving them as two separately thinking
                  entities.
                  <br />
                  <br />
                  Despite originally coming to kill him, Shinichi and his
                  parasite, Migi, form a strange symbiotic bond. Shinichi’s
                  strong sense of morals often collides with Migi’s strong sense
                  of self preservation. Over time, they are forced to see the
                  other’s point of view while constantly fighting for their
                  lives against other, more hostile, parasites.
                  <br />
                  <br />
                  <span style={{ color: "#8d2424", fontSize: "1.3rem" }}>
                    Similarities:
                  </span>
                  <br />
                  <span style={{ color: "red", fontSize: "1.3rem" }}>
                    (Mild Spoilers)
                  </span>
                  The main similarity here is definitely the sci-fi horror
                  concept of fighting otherworldly monsters. Like Eleven,
                  Shinichi is thrust into a world he does not really fit into,
                  protecting those around him with his unique abilities. There
                  is a lot of mystery here, and the concept of parasites isn’t
                  as much of a secret as you might think. Watching Shinichi
                  figure out just where he fits into the narrative and what he’s
                  fighting for, is much like watching Eleven find herself in
                  season two of Stranger Things.
                  <br />
                  <br />
                  <span style={{ color: "#8d2424", fontSize: "1.3rem" }}>
                    Why You Should Give It A Chance
                  </span>
                  <br />
                  First of all, if the reason you like Stranger Things has
                  anything to do with epic, man eating monsters, that’s enough
                  right there. In design, the parasites can be pretty similar
                  looking to demigorgons.
                  <br />
                  <br />
                  Parasyte also has a lot of moralistic food for thought. A
                  sci-fi show where your main character has powers is always
                  bound to come with some deep inner turmoil. While Eleven was
                  already struggling when we met her, we follow Shinichi from
                  day one of his story. If you’re into tragic hero origin
                  stories, this is definitely a good choice. One of the most
                  interesting parts is watching how Shinichi and Migi influence
                  each other’s ideals and change throughout the course of the
                  show, until it feels like they’ve almost reversed roles.
                  (Also, it’s just fun to watch Shinichi up the hell out of his
                  swag as the anime progresses)
                  <br />
                  <br />
                  If you're into the scarier more intense sides of Stranger
                  Things, this is a good one to test
                </p>
              </div>
            </MDBCol>
            <MDBCol>
              <h2 style={{ color: "#8d2424" }}>Parasyte: The Maxim</h2>
              <p style={{ color: "#8d2424" }}>
                <em>
                  <strong>
                    Available subbed on Crunchyroll, HiDIVE, Hulu, VRV and
                    dubbed on HiDIVE, Hulu and VRV
                  </strong>
                </em>
              </p>
              <img src={parasyte} style={{ width: "100%" }} alt="" />
            </MDBCol>
          </MDBRow>

          <MDBRow style={{ paddingBottom: "3%" }} className="school-recs">
            <MDBCol>
              <h2 style={{ color: "#8640ae" }}>Neon Genesis Evangelion</h2>
              <p style={{ color: "#8640ae" }}>
                <em>
                  <strong>
                    Available dubbed (new 2019 version) and subbed on Netflix.
                    <br /> Original 90’s dub cast can be found on DVD (I
                    purchased a set on Ebay at the beginning of 2019)
                  </strong>
                </em>
              </p>
              <img src={evangelion} style={{ width: "100%" }} alt="" />
            </MDBCol>
            <MDBCol>
              <div className="text-left">
                <p style={{ color: "white" }}>
                  <span style={{ color: "#8640ae", fontSize: "1.3rem" }}>
                    One Season:
                  </span>
                  <br />
                  26 episodes. One recap movie. One sequel movie. Three “Rebuild
                  movies” (a semi-retelling of the original story but with new
                  elements, story arcs and plot points. It is also remastered.
                  Think of it like a modern remake, I.e., Halloween)
                  <br />
                  <br />
                  <span style={{ color: "#8640ae", fontSize: "1.3rem" }}>
                    Status
                  </span>
                  <br />
                  The anime is complete. There is one rebuild movie left to be
                  released in 2021.
                  <br />
                  <br />
                  Neon Genesis is the story of a futuristic society, where the
                  burden of humanity’s future is placed upon the shoulders of
                  young, naïve students.
                  <br />
                  <br />
                  <span style={{ color: "#8640ae", fontSize: "1.3rem" }}>
                    Synopsis:
                  </span>
                  <br />
                  Neon Genesis follows several children, mainly Shinji Ikari, as
                  they pilot mechs (giant mechanical robots) and fight off
                  monsters called Angels. It is basically a post-apocalyptic
                  anime, where humanity must fight to survive the reemergence of
                  the very monsters that damned them in the first place.
                  <br />
                  <br />
                  While Shinji struggles to win battles, he must also overcome
                  his intense feelings of anxiety, abandonment and inadequacy in
                  over to save the world from another major disaster. What he
                  doesn’t know, is that the leaders of the organization he works
                  for, are keeping more secrets than he thinks.
                  <br />
                  <br />
                  <span style={{ color: "#8640ae", fontSize: "1.3rem" }}>
                    Similarities
                  </span>
                  <br />
                  <span style={{ color: "red", fontSize: "1.3rem" }}>
                    (Mild Spoilers)
                  </span>{" "}
                  Much like Stranger Things, Neon Genesis is definitely a
                  coming-of-age story. No one has powers here, but we do see a
                  group of kids thrust into the thick of action, having to
                  overcome various obstacles in an attempt to save their city.
                  There is a lot of growing up going on in Neon Genesis, much
                  like with kids of Hawkins, and at times it can be hard to
                  juggle that while trying to engage in life threatening
                  battles. Much like the secret organization that held Eleven,
                  Neon Genesis also has a secret organization called Nerv, that
                  Shinji’s father is a part of. (His father is legit dead-beat
                  dad of the year and more infuriating than Eleven’s Papa).
                  <br />
                  <br />
                  Neon Genesis is full of action, but also full of trauma. The
                  kids are messed up. The adults are messed up and all of them
                  will have you wondering why people continue to mess with
                  things they do not fully understand.
                  <br />
                  <br />
                  <span style={{ color: "#8640ae", fontSize: "1.3rem" }}>
                    Why You Should Give It A Chance:
                  </span>
                  <br />
                  If you’re already into anime, especially Mechs, then Neon
                  Genesis is worth a watch. If not, it might a little harder to
                  get into.
                  <br />
                  <br />
                  The show starts off strong, with plenty of action and an
                  ensemble of interesting characters of various ages. There is a
                  slow patch in the middle of the anime for a few eps, but when
                  it picks back up again, the remainder of the anime is nonstop.
                  <br />
                  <br />I will say, Neon Genesis can be a bit of a hard watch
                  and at times it can be emotionally exhausting. Many of the
                  characters are dealing with serious inner turmoil and deep
                  struggles (tragic backstories left and right—no one is safe).
                  There is a lot of unresolved trauma, especially within the
                  main character, who struggles to understand his purpose in
                  life.
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default StrangerThings;
