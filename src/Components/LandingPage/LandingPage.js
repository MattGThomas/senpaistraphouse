import React, { Component } from "react";
import { Link } from "react-router-dom";
import PictureGallery from "../Gallery/PictureGallery.js";
import logo from "../../images/traphouselogo.png";

import midoriya from "../../images/midoriya.png";
import article_image from "../../images/article_image.jpg";
import rascal from "../../images/rascal.jpg";
// import Footer from "../../Components/Footer/Footer.js";

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
  render() {
    return (
      <div>
        <div>
          <h1 className="traphouse">
            <strong>SENPAI'S TRAPHOUSE</strong>
          </h1>
          <p style={{ color: "white" }} className="japanese">
            (せんぱい の わな)
          </p>
        </div>
        <img src={logo} style={{ height: "35%", width: "35%" }} />
        <p
          style={{ color: "white", paddingTop: "5%", paddingBottom: "5%" }}
          className="shadow"
        >
          <strong>
            Consuming, Promoting and Reviewing Anime from and Urban Perspective
          </strong>
        </p>
        <MDBContainer>
          <MDBRow className="d-flex flex-column">
            <h2 style={{ color: "white" }} className="landing-card-text">
              <strong>NOTICE ME SENPAI</strong>
            </h2>
          </MDBRow>
          <MDBRow className="mdb-cards">
            <MDBCol className="mdb-cards-column">
              <MDBCard style={{ height: "300px" }}>
                <MDBCardImage
                  src={midoriya}
                  style={{ height: "150px", width: "100%" }}
                />
                <MDBCardBody>
                  <Link to="/senpais-blog">
                    <MDBCardTitle
                      style={{ color: "#73bf32" }}
                      className="landing-card-title"
                    >
                      <strong>senpai's blog</strong>
                    </MDBCardTitle>
                  </Link>
                  <MDBCardText className="landing-card-text">
                    <p className="landing-card-text-body">
                      Updates from your local Senpai
                    </p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
            <MDBCol className="mdb-cards-column">
              >
              <MDBCard style={{ height: "300px" }}>
                <MDBCardBody>
                  <Link to="/articles">
                    <MDBCardTitle
                      style={{ color: "#73bf32" }}
                      className="landing-card-title"
                    >
                      <strong>articles</strong>
                    </MDBCardTitle>
                  </Link>
                  <MDBCardText className="landing-card-text">
                    <p className="landing-card-text-body">
                      Articles, Essays, Opinions, Reviews, Lists, and Puff
                      Pieces, covering the latest anime news and more...
                    </p>
                  </MDBCardText>
                </MDBCardBody>
                <MDBCardImage
                  src={article_image}
                  style={{ height: "150px", width: "100%" }}
                />
              </MDBCard>
            </MDBCol>

            <MDBCol className="mdb-cards-column">
              >
              <MDBCard style={{ height: "300px" }}>
                <MDBCardImage
                  src={rascal}
                  style={{ height: "150px", width: "100%" }}
                />
                <MDBCardBody>
                  <Link to="/videos">
                    <MDBCardTitle
                      style={{ color: "#73bf32" }}
                      className="landing-card-title"
                    >
                      <strong>videos</strong>
                    </MDBCardTitle>
                  </Link>
                  <MDBCardText className="landing-card-text">
                    <p className="landing-card-text-body">
                      The Official Senpai's Traphouse Round Table Discussion and
                      more...
                    </p>
                  </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
          <div>
            <h2 className="text-center" style={{ color: "#FFFFFF" }}>
              SENPAI'S TRAPHOUSE EP. 1: PILOT
            </h2>
          </div>
          <MDBRow style={{ paddingTop: "5%" }} className="stupid-video">
            <MDBCol>
              <ReactPlayer
                url="https://www.youtube.com/watch?v=bZ_Ye4Rz6Ws"
                width="100%"
              />
            </MDBCol>
            <MDBCol className="text-left" style={{ paddingBottom: "16%" }}>
              <span className="p-2 text-left">
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
              </span>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default LandingPage;
// class LandingPage extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       firstName: "",
//       lastName: "",
//       email: "",
//       comment: "",
//     };
//   }
//   changeHandler = (evt) => {
//     evt.preventDefault();
//     this.setState({
//       [evt.target.name]: evt.target.value,
//     });
//   };
//   submitHandler = async (evt) => {
//     evt.preventDefault();
//     alert(
//       `${this.state.name} thank you for your feedback, a team member will review it shortly`
//     );
//   };
//   render() {
//     return (
//       <div style={{ width: "100%" }} className="landing-page-content">
//         <div>
//           <div>
//             <h1 style={{ color: "white", paddingTop: "5%" }} className="senpai">
//               <strong>SENPAI'S TRAPHOUSE</strong>
//             </h1>
//             <span
//               style={{
//                 color: "white",
//                 fontSize: "2.0rem",
//                 paddingTop: "0",
//                 marginTop: "0",
//               }}
//             >
//               (せんぱい の わな)
//             </span>
//           </div>
//           <div>
//             <img
//               src={logo}
//               alt="logo"
//               style={{ height: "35%", width: "35%" }}
//             />
//             <p
//               style={{
//                 color: "white",
//                 paddingTop: "5%",
//                 paddingBottom: "5%",
//               }}
//               className="shadow"
//             >
//               <strong>
//                 Consuming, Promoting and Reviewing Anime from an Urban
//                 Perspective
//               </strong>
//             </p>
//           </div>
//         </div>
//         <MDBContainer>
//           <MDBRow className="d-flex flex-column">
//             <h2 style={{ color: "white" }} className="landing-card-text">
//               <strong>NOTICE ME SENPAI</strong>
//             </h2>

//             <MDBRow className="d-flex justify-content-center">
//               <MDBCol>
//                 <MDBCard style={{ height: "300px" }}>
//                   <MDBCardImage
//                     src={midoriya}
//                     style={{ height: "150px", width: "100%" }}
//                   />
//                   <MDBCardBody>
//                     <Link to="/senpais-blog">
//                       <MDBCardTitle
//                         style={{ color: "#73bf32" }}
//                         className="landing-card-title"
//                       >
//                         <strong>senpai's blog</strong>
//                       </MDBCardTitle>
//                     </Link>
//                     <MDBCardText className="landing-card-text">
//                       <p className="landing-card-text-body">
//                         Updates from your local Senpai
//                       </p>
//                     </MDBCardText>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>

//               <MDBCol>
//                 <MDBCard style={{ height: "300px" }}>
//                   <MDBCardBody>
//                     <Link to="/articles">
//                       <MDBCardTitle
//                         style={{ color: "#73bf32" }}
//                         className="landing-card-title"
//                       >
//                         <strong>articles</strong>
//                       </MDBCardTitle>
//                     </Link>
//                     <MDBCardText className="landing-card-text">
//                       <p className="landing-card-text-body">
//                         Articles, Essays, Opinions, Reviews, Lists, and Puff
//                         Pieces, covering the latest anime news and more...
//                       </p>
//                     </MDBCardText>
//                   </MDBCardBody>
//                   <MDBCardImage
//                     src={article_image}
//                     style={{ height: "150px", width: "100%" }}
//                   />
//                 </MDBCard>
//               </MDBCol>

//               <MDBCol>
//                 <MDBCard style={{ height: "300px" }}>
//                   <MDBCardImage
//                     src={rascal}
//                     style={{ height: "150px", width: "100%" }}
//                   />
//                   <MDBCardBody>
//                     <Link to="/videos">
//                       <MDBCardTitle
//                         style={{ color: "#73bf32" }}
//                         className="landing-card-title"
//                       >
//                         <strong>videos</strong>
//                       </MDBCardTitle>
//                     </Link>
//                     <MDBCardText className="landing-card-text">
//                       <p className="landing-card-text-body">
//                         The Official Senpai's Traphouse Round Table Discussion
//                         and more...
//                       </p>
//                     </MDBCardText>
//                   </MDBCardBody>
//                 </MDBCard>
//               </MDBCol>
//             </MDBRow>
//           </MDBRow>
//           <div>
//             <h2 className="text-center" style={{ color: "#FFFFFF" }}>
//               SENPAI'S TRAPHOUSE EP. 1: PILOT
//             </h2>
//           </div>
//           <MDBRow style={{ paddingTop: "5%" }} className="stupid-video">
//             <MDBCol>
//               <ReactPlayer
//                 url="https://www.youtube.com/watch?v=bZ_Ye4Rz6Ws"
//                 width="100%"
//               />
//             </MDBCol>
//             <MDBCol
//               className="d-flex flex-column"
//               style={{ paddingBottom: "16%" }}
//             >
//               <span className="p-2 text-left">
//                 A round table style discussion covering a variety of anime
//                 related topics
//               </span>

//               <br />
//               <span className="p-2 text-left">
//                 -Sake and a snack: Dorayaki, Mochi, Coffee, Pocky, and Sake
//               </span>

//               <span className="p-2 text-left">
//                 -Icebreaker: how did you get into anime
//               </span>

//               <span className="p-2 text-left">
//                 -Main Topic: "Good and Bad anime fathers"
//               </span>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//         {/* <Footer /> */}
//       </div>
//     );
//   }
// }

// export default LandingPage;
