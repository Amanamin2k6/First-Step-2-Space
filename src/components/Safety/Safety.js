import React, {useState} from "react";
import ChatbotButton from "../chatbot/Chatbot";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import cabin from "../../Assets/cabin.svg";
import departure from "../../Assets/ondeparture1.svg";
import training from "../../Assets/training.svg";
import medical from "../../Assets/Medical Evaluation.png";
import lanch from "../../Assets/lanch .png";
import luggage from "../../Assets/luggage.png";
function Saftey(){
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  return(
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
            <Col md={12} style={{textAlign: "center" }}>
              <h1 className="purple"><strong>Procedures</strong></h1>
              <h4>Planning | Training | Safety</h4>
            </Col>
          </Row>
          <Row>
            <Col md={2}/>
            <Col md={8}>
            <p className="home-about-body" style={{textAlign: "center"}}> Our space tourism company offers you the chance to experience suborbital and orbital space travel. We prioritize your safety greatly, which is why we require extensive training and medical evaluations before any spaceflight with us. Here's what you can expect as you prepare for your once-in-a-lifetime experience with us. - FS2S</p>
            </Col>
            <Col md={2}/>
          </Row>
          <Row>

          </Row>
          <Row style={{padding : 50}}>

          </Row>
          <Row>
            <Col md={1} />
            <Col md={4}>
              <img src= {departure} alt="Before Departure" ></img>
            </Col>
            <Col md={2} />
            <Col md={4}> 
              <img src= {cabin} alt="On board" ></img>
            </Col>
            <Col md={1} />
          </Row>
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{textAlign: "center"}} className="purple">Before Departure</h1>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <img src= {training} alt="training" className="fluidimage" style={{padding : 50}}></img>
            </Col>
            <Col md={3} />
            <Col md={6}> 
              <p className="home-about-body">
              We provide all customers with extensive training before their flight, whether they book a suborbital or orbital experience. Training includes information on the spacecraft, procedures for launch and reentry, and emergency preparedness. We also offer training on space acclimatization, so you are well-prepared for the physical changes you'll experience during your time in space.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={3}>
              <img src={medical} alt="medical Evaluation" className="fluidimage" style={{padding : 50}}></img>
            </Col>
            <Col md={3} />
            <Col md={6}> 
              <p className="home-about-body">
                To ensure the safety of all customers, we require a medical evaluation before any spaceflight. This includes a physical exam and medical history assessment. Customers will need to meet specific health requirements to be approved for spaceflight, including good cardiovascular health, no history of heart disease or other serious medical conditions, and no significant psychological or emotional conditions.
              </p>
            </Col>
          </Row>
          <Row>
            <Col md={12} className="home-header">
              <h1 style={{textAlign: "center"}} className="purple">On Board</h1>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <p className="home-about-body" style={{textAlign: "right"}}>
                Our safety protocol is our top priority, and we follow rigorous procedures to ensure the safety of all our customers. We work around the clock with our experienced pilots, engineers, and hospitality staff to make sure that all aspects of your experience in space are safe and secure. Our spacecraft undergoes extensive testing, maintenance, and cleaning before and after every flight; however, just in case we have a comprehensive emergency preparedness plan in place.
              </p>
            </Col>
            <Col md={6} style={{alignContent: "left"}}> 
              <img src={lanch} alt="Safety Protocol" className="fluidimage" style={{padding : 50}}></img>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <p className="home-about-body" style={{textAlign: "right"}}>
              We have strict guidelines on luggage to ensure the safety of all customers during the flight. We provide customers with a packing guide with information on what they should bring and what they should probably leave behind (Don't worry we have extra toothbrushes).
              </p>
            </Col>
            <Col md={6}> 
              <img src={ luggage} alt="Luggage" className="fluidimage" style={{padding : 50}}></img>
            </Col>
          </Row>

        </Container>
      </Container>
      <Particle />
    </section>
    )
}

export default Saftey;