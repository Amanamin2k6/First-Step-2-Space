import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.svg";
import { Link } from "react-router-dom";
import {
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { SlRocket } from "react-icons/sl"
import { TbAlertTriangle, TbParachute } from "react-icons/tb"

import { CgFileDocument } from "react-icons/cg";
import { IoIosPlanet, IoIosPricetags } from "react-icons/io";
function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/pricing"
                onClick={() => updateExpanded(false)}
              >
                <IoIosPricetags style={{ marginBottom: "2px" }} /> Pricing
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/procedures"
                onClick={() => updateExpanded(false)}
              >
                <TbAlertTriangle style={{ marginBottom: "2px" }} /> Procedures
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/vehicles"
                onClick={() => updateExpanded(false)}
              >
                <SlRocket style={{ marginBottom: "2px" }} /> Vehicles
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/launch-recovery"
                onClick={() => updateExpanded(false)}
              >
                <TbParachute style={{ marginBottom: "2px" }} /> Launch & Recovery
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/documentation"
                onClick={() => updateExpanded(false)}
              >
                <CgFileDocument style={{ marginBottom: "2px" }} /> Docs
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
