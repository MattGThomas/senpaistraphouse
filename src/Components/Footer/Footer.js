import React from "react";
import { MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";
import Styled from "styled-components";
// import "./footer.css";
const FooterContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 65px;
    width: 100%;
    padding: 0 9.5%;
    background: #73bf32;
    z-index: 300;
    position: absolute;
    bottom: 0;
`;
const Footer = () => {
  return (
    <MDBFooter>
      <FooterContainer class="footer">
        {/* <MDBFooter> */}
        <MDBRow>
          <a target="_blank" href="https://www.facebook.com/Senpaistraphouse/">
            <MDBIcon
              fab
              icon="facebook"
              size="3x"
              style={{ paddingRight: "10px", color: "black" }}
            />
          </a>
          <a target="_blank" href="https://twitter.com/senpaistraphous">
            <MDBIcon
              fab
              icon="twitter"
              size="3x"
              style={{ paddingRight: "10px", color: "black" }}
            />
          </a>
          <MDBIcon far icon="envelope" size="3x" style={{ color: "black" }} />
        </MDBRow>
        {/* </MDBFooter> */}
      </FooterContainer>
    </MDBFooter>
  );
};

export default Footer;
