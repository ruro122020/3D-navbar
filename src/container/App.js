import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Home from "../components/home/Home";
import Projects from "../components/projects/Projects";
import Aboutme from "../components/aboutme/Aboutme";
import Technology from "../components/technology/Technology";
import Services from "../components/services/Services";
import Process from "../components/process/Process";
import Contact from "../components/contact/Contact";

import "./App.css";

const App = () => {
  return (
    <div className="body">
      <Router>
        <Navbar collapseOnSelect expand="lg" className="mainNav">
          <Navbar.Brand as={Link} to="/">
            Logo
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto nav">
              <div className="extra-div">
                <Nav.Link
                  id="projects-link"
                  className="links "
                  as={Link}
                  to="/projects"
                >
                  <span className="link-text">Projects</span>
                </Nav.Link>
              </div>
              <div className="extra-div">
                <Nav.Link
                  id="about-link"
                  className="links"
                  as={Link}
                  to="/about"
                >
                  <span className="link-text">About</span>
                </Nav.Link>
              </div>
              <div className="extra-div">
                <Nav.Link className="links" as={Link} to="/technology">
                  <span className="link-text">Technology</span>
                </Nav.Link>
              </div>
              <div className="extra-div">
                <Nav.Link
                  id="services-link"
                  className="links"
                  as={Link}
                  to="/services"
                >
                  <span className="link-text">Services</span>
                </Nav.Link>
              </div>
              <div className="extra-div">
                <Nav.Link className="links" as={Link} to="/process">
                  <span className="link-text">Process</span>
                </Nav.Link>
              </div>

              <div className="extra-div">
                <Nav.Link className="links" as={Link} to="/contact">
                  <span className="link-text">Contact</span>
                </Nav.Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/projects">
              <Projects />
            </Route>
            <Route path="/about">
              <Aboutme />
            </Route>
            <Route path="/technology">
              <Technology />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path="/process">
              <Process />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
};

export default App;
