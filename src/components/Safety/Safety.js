import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle"
const halfwidth = window.screen.width / 2
function Saftey(){
    return(
        <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Work in progress!{" "}
              </h1>

              <h1 className="heading-name">
                <strong className="main-name"> FIRST STEP 2 SPACE</strong>
              </h1>
            </Col>
            <Col md={12} className="home-header">
                <h1 style = {{ paddingLeft: (halfwidth - 200) }}> Work In Progress </h1>
            </Col>
            <Col md={12} style={{ paddingTop: 165 }}>
              <h1 style={{ padding: 50, textAlign: "right", }} className="heading">
              <em>"Beyond <span className="purple">Earth</span>, Beyond <span className="purple">Imagination</span>"</em>{" "}
              </h1>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
    )
}

export default Saftey;