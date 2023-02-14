import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
             ABOUT <span className="purple"> FS2S </span> 
            </h1>
            <p className="home-about-body">
            We are the leading provider of space tourism experiences in the field,  providing people from all walks of life with risk-free, easily accessible, and amazing experiences. We provide a range of programs for all kinds of space enthusiasts, including suborbital flights, zero-gravity outings, and circling tours. Our ground support team works hard to guarantee a safe and comfortable flight ,our astronauts are highly trained and our spacecrafts are cutting edge. We are dedicated to making space travel accessible to everyone, and we can't wait to share this incredible experience with you.
            </p>
            <p className="home-about-body">
              Hey businesses! Did you know we are #1 in the space shipment industry? We make sure your products get where and when you want them to. Ranging from small to industrial shipment sizing. Fill out the information below if your business believes FS2S - SHIPMENT is right for you
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
