import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatarAstro.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import frontpage from "../../Assets/frontpage.png";
import ChatbotButton from "../chatbot/Chatbot";
import earthhome from "../../Assets/earth-fhomepage.png";
import styled from 'styled-components';
import logomin from "../../Assets/logomin.png"
import Tilt from "react-parallax-tilt";

function Home() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  return (
    <section>
     <div style={{ position: 'relative' }}>
      <button
        style={{
          position: 'fixed',
          bottom: 20,
          right: 20,
        }}
        onClick={() => setIsChatbotOpen(!isChatbotOpen)}
      >
        Open Chatbot
      </button>
      {isChatbotOpen && (
        <div style={{
          position: 'fixed',
          bottom: 70,
          right: 20,
        }}>
          <ChatbotButton />
        </div>
      )}
    </div>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Ready for Lift off!{" "}
              </h1>
              <h1 className="heading-name">
                <strong className="main-name"> Become </strong> <strong> a </strong>
              </h1> 
              
              <div className="Type"> <Type/> </div>
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
          </Row>
          <Row>
          <Col md={6} style={{ paddingBottom: 20 }}>
              <img
                src={frontpage}
                alt="front pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              
            </Col>
            <Col md={6} style={{ paddingTop: 20 }}>
              <h1 style={{ padding: 50, textAlign: "right", }} className="heading">
              <em>"Beyond <span className="purple">Earth</span>, Beyond <span className="purple">Imagination</span>"</em>{" "}
              </h1>
            </Col>
          </Row>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.6em" }}>
                ABOUT <span className="purple"> FS2S </span> 
                </h1>
                <p className="home-about-body">
                We are the leading provider of space tourism experiences in the field,  providing people from all walks of life with risk-free, easily accessible, and amazing experiences. We provide a range of programs for all kinds of space enthusiasts, including suborbital flights, zero-gravity outings, and circling tours. Our ground support team works hard to guarantee a safe and comfortable flight ,our astronauts are highly trained and our spacecrafts are cutting edge. We are dedicated to making space travel accessible to everyone, and we can't wait to share this incredible experience with you.
                </p>
              </Col>
              <Col md={4} className="myAvtar">
                <Tilt>
                  <img src={logomin} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
      </Container>
    </Container>
    <Particle/>
    </section>
  );
}

export default Home;
