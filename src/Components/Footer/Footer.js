import React from "react";
import { MDBContainer, MDBRow, MDBFooter, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom";
import Styled from "styled-components";

const FooterContainer = Styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    padding: 0 9.5%;
    background: #00A8C5;
    z-index: 300;
    position: absolute;
    bottom: 0;
`;
const Footer = () => {
  return (
    <FooterContainer>
      <MDBFooter>
        <MDBRow>
          <a target="_blank" href="https://www.facebook.com/Senpaistraphouse/">
            <MDBIcon fab icon="facebook" size="3x" />
          </a>
          <a target="_blank" href="https://twitter.com/senpaistraphous">
            <MDBIcon fab icon="twitter" size="3x" />
          </a>
          <MDBIcon far icon="envelope" size="3x" />
        </MDBRow>
      </MDBFooter>
    </FooterContainer>
  );
};

export default Footer;
