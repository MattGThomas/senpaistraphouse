import React from "react";
import { Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import NavBar from "../src/Components/NavMenu/NavBar.js";
import Footer from "../src/Components/Footer/Footer.js";
import LandingPage from "./Components/LandingPage/LandingPage.js";
import About from "../src/Components/About/About.js";
import Blog from "../src/Components/Blog/Blog.js";
import Videos from "../src/Components/Videos/Videos.js";
import Articles from "../src/Components/Articles/Articles.js";
import SchoolRecs from "../src/Components/Articles/SchoolRecs.js";

import "./App.css";

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap')

    html, body {
        font-family: 'Open Sans', sans-serif !important;
    }

    #root {
        min-height: 100vh;
    }
`;
const Container = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
`;

function App() {
  return (
    // <Container className="App">
    //   <GlobalStyle />
    <div className="App">
      <GlobalStyle />
      <NavBar sticky="top" />
      {/* this content class allows enough rem at bottom of page so footer doesnt come up too far */}
      <div className="Content">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/senpais-blog" component={Blog} />
          <Route exact path="/videos" component={Videos} />
          <Route exact path="/articles" component={Articles} />
          <Route exact path="/articles/back-to-school" component={SchoolRecs} />

          <Route exact path="*" component={() => "404 Page Not Found."} />
        </Switch>
      </div>
      {/* <NavBar /> */}
      {/* <h2>Hello, just show something so im not looking at a white screen</h2>
      <h3>Thanks bro, i appreciate it</h3> */}
      <Footer />
    </div>
    // </Container>
  );
}

export default App;
