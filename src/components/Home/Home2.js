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
              FIRST <span className="purple"> STEP </span> 2 SPACE
            </h1>
            <p className="home-about-body">
              Welcome to <span className="purple"> First Step 2 Space</span>, a leading provider of <span className="purple">space tourism experiences</span>. We are a team of passionate space enthusiasts and experts who are dedicated to making the dream of space travel a reality for everyone.

Our mission is to provide <span className="purple">a safe, accessible, and unforgettable experiences</span>  for people from all walks of life. We believe that<span className="purple">everyone</span>  should have the opportunity to experience the wonder and excitement of space, and we are committed to making this a reality.

We offer a range of space tourism packages, including <span className="purple">suborbital flights, zero-gravity experiences, and orbiting missions</span>. Our state-of-the-art spacecraft and experienced astronauts ensure a safe and enjoyable experience, while our ground support team works tirelessly to ensure that every aspect of your trip is seamless and enjoyable.

Whether you are a space enthusiast, an aspiring astronaut, or just looking for a <span className="purple">once-in-a-lifetime experience</span>, we have the perfect space tourism package for you. So come join us on a journey to the stars and see what it feels like to be an astronaut for a day!

At First Step 2 Space, we are committed to making space travel a reality for everyone, and we can't wait to take you on this journey with us.
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
