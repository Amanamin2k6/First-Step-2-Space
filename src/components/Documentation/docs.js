import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
const halfwidth = window.screen.width / 2
function Docs(){
    return(
        <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row style={{textAlign : 'center'}} className="purple">
            <h1><strong>Documentation</strong></h1>
          </Row>
          <Row>
            <h2>Plan of Work Log</h2>
            <iframe src="https://drive.google.com/file/d/1ZMn9Rkp9qFgMTH3cvX0BicExrCPEN7Ia/preview" width="640" height="480" allow="autoplay"></iframe>
          </Row>
          <Row>
            <h2>Copyright Checklist</h2>
            <iframe src="https://drive.google.com/file/d/1kNihHTdzGM2T006jVR9q2d8qs-3t5bML/preview" width="640" height="480" allow="autoplay"></iframe>
          </Row>
        </Container>
      </Container>
      <Particle />
    </section>
    )
}

export default Docs;