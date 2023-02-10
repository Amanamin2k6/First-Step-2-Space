import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/avatarAstro.png";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import frontpage from "../../Assets/frontpage.png"

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Ready for Lift off!{" "}
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> WE </strong> <strong> ARE </strong>
              </h1> 
              
              <div style = {{padding : 50 }}> <Type /> </div>
              
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col>
            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={frontpage}
                alt="front pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
              
            </Col>
            <Col md={7} style={{ paddingTop: 165 }}>
              <h1 style={{ padding: 50, textAlign: "right", }} className="heading">
              <em>"Beyond <span className="purple">Earth</span>, Beyond <span className="purple">Imagination</span>"</em>{" "}
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
