import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Planning() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Tier <strong className="purple">Plans </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are the different plans we offer.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Rocket Racer"
              description="
              20 minutes in space
              "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Deep Space Diver"
              description="
              1 Full Orbit of the Earth
              "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              title="Solar Sojourner"
              isBlog={false}
              description="
              1 Week in Orbit
              "              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Planning;
