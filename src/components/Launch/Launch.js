import React, {useState} from "react";
import ChatbotButton from "../chatbot/Chatbot";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import rocketswing from "../../Assets/rocketswing.png";
import parashoot from "../../Assets/parashoot.png";


function Launch(){
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  return(
    <section>
      <div style={{ position: 'relative' }}>
        <button
          style={{
            position: 'fixed',
            bottom: 20,
            right: 50,
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
          <Row style={{paddingBottom: 50}}>
            <h1 className="heading" style={{textAlign: "center"}}> <strong><span className="purple">Launch</span> and <span className="purple">Recovery</span></strong></h1>
          </Row>
          <Row>
            <Col md={4}>
              <img src={rocketswing} alt="Rocket Swing"></img>
            </Col>
            <Col md={8}>
              <h3 className="purple">Launch</h3>
              <p>Our spacecraft is launched using the latest rocket technology, ensuring a smooth and efficient ascent into space.</p>
              <p>Our expert team of mission control specialists and engineers monitors the launch from the ground, ensuring everything runs smooth.</p>
              <p>You'll feel the intense acceleration as you leave the Earth's atmosphere and enter the vast expanse of space.</p>
            </Col>
          </Row>
          <Row style={{paddingBottom: 50}}>
          </Row>
          <Row>
            <Col md={4}>
              <img src={ parashoot } alt="Parachuette"></img>
            </Col>
            <Col md={8}>
              <h3 className="purple">Recovery</h3>
              <p>After your space journey, our spacecraft will re-enter the Earth's atmosphere and deploy a series of parachutes to slow its descent. </p>
              <p>Our experienced recovery team will be waiting to retrieve the spacecraft and its passengers.</p>
              <p>You'll land safely back on Earth, and our team will be there to greet you a and celebrate your successful journey into space.</p>
            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>
    </section>
    )
}

export default Launch;