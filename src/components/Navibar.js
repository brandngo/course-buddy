import React from 'react';
import { Link } from "react-router-dom";

// bootstrap components
import { Image, Nav, Navbar } from 'react-bootstrap';

function Navibar() {

  return (
    <Navbar expand="md" style={{ backgroundColor: "#343A40" }}>
      <Navbar.Brand style={{ color: "white", fontSize: "22px" }} href="/">
        Course Buddy
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  );

}

export default Navibar;