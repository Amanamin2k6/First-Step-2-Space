import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              FIRST <span className="purple"> STEP </span> 2
            </h1>
            <p className="home-about-body">
              BLAH
              <br />
              <br />BLAH
              <i>
                <b className="purple"> BLAH </b>
              </i>
              <br />
              <br />
              BLAH &nbsp;
              <i>
                <b className="purple">BLAH </b> BLAH{" "}
                <b className="purple">
                  BLAH
                </b>
              </i>
              <br />
              <br />
              BLAH<b className="purple">BLAH</b> and
              <i>
                <b className="purple">
                  {" "}
                 BLAH
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple">BLAH</b>
              </i>
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
