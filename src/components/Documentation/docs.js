import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
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
            <iframe src="https://drive.google.com/file/d/1tP_1aANa2xgukrdtv5n4TOdsHhuZj425/preview" width="640" height="480" allow="autoplay"></iframe>
          </Row>
          <Row style={{padding:50}}>
            <h5> We used Canva, Adobe Photoshop, Adobe Illustrator, and Adobe Photoshop Express to make our graphics. </h5>
            <h5>We used webflow as a tool to help us visualize our website.</h5>
            <h5>We used Reactjs, react-tsparticles, typewriter, and react-bootstrap to design our website </h5>
            <h5>We used Vercel to publish our website.</h5>
          </Row>
        </Container>
      </Container>
      <Particle />
    </section>
    )
}

export default Docs;