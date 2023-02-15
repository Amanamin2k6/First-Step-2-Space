import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import fs2s1 from "../../Assets/ondeparture1.svg";
import fs2s2 from "../../Assets/fs2s2.png";
import fs2s3 from "../../Assets/fs2f3.png";

function Vehicles(){
  return(
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={3} />
            <Col md={6 } style={{padding : 25}}> 
              <h1 style={{textAlign: "center"}}>
                <span className="purple">Vehicles</span>
              </h1>
            </Col>
            <Col md={3} />
          </Row>
          <Row style={{padding : 25}}>
            <Col md={3} />
            <Col md={6} style={{textAlign: "center"}}> 
            <h3 className="purple">FS2S3 </h3>
            </Col>
            <Col md={3} />
          </Row>
          <Row>
            <Col md={4}>
              <img src={fs2s3} alt="tier 3" className="center"></img>
            </Col>
            <Col md={1} />
            <Col md={7}>
              <p style={{textAlign: "left"}}>Made by our lead engineers and taking over a decade to fully construct and powered by ion propulsion. The FS2S Hotel was designed to provide all the lavish amenities for guests.</p>

              <p style={{textAlign: "left"}}>Panoramic views of Earth and the surrounding universe, allowing you to witness breathtaking sunrises, sunsets, and shooting stars.</p>
              <p style={{textAlign: "left"}}>Comfortable and secure sleeping quarters that use advanced technologies to simulate gravity, ensuring guests get a good night's sleep.</p>

              <p style={{textAlign: "left"}}>Recreational facilities such as virtual reality simulators, space gardens, and zero-gravity sports equipment to keep guests entertained.</p>
              <p style={{textAlign: "left"}}>Experienced staff, including pilots, engineers, and scientists, who can guide guests on space walks and provide informative lectures about space exploration.</p>
            </Col>
          </Row>
          <Row style={{padding : 25}}>
            <Col md={3} />
            <Col md={6} style={{textAlign: "center"}}> 
            <h3 className="purple">FS2S2 </h3>
            </Col>
            <Col md={3} />
          </Row>
          <Row>
            <Col md={4} style={{padding : 25}}>
              <img src={fs2s2} alt="tier 2" className="center"></img>
            </Col>
            <Col md={1} />
            <Col md={7}>
              <p style={{textAlign: "left"}}>Introducing the next level in space travel - the FS2F2. This state-of-the-art spacecraft combines the ultimate in luxury and comfort with advanced safety features to ensure a seamless and enjoyable journey to the final frontier.</p>
              <p style={{textAlign: "left"}}>As soon as you step onboard, you'll be transported to a world of elegance and sophistication, with plush leather seating, state-of-the-art entertainment systems, and panoramic views of the stars through the expansive windows.</p>
              <p style={{textAlign: "left"}}>But the FS2F2 isn't just about style - it's also engineered to the highest standards of safety. The spacecraft is equipped with multiple redundant systems to ensure a safe and secure flight, and in the unlikely event of an emergency, you'll be able to evacuate quickly and safely thanks to the cutting-edge escape pods.</p>
            </Col>
          </Row>
          <Row style={{padding : 25}}>
            <Col md={3} />
            <Col md={6} style={{textAlign: "center"}}> 
            <h3 className="purple">FS2S1 </h3>
            </Col>
            <Col md={3} />
          </Row>
          <Row>
            <Col md={4} style={{padding : 25}}>
              <img src={fs2s1} alt="tier 1" className="center"></img>
            </Col>
            <Col md={1} />
            <Col md={7}>
              <p style={{textAlign: "left"}}>Introducing the cutting-edge FS2F1 rocket, the future of space travel. FS2F1 offers a quick and efficient trip to space, with its advanced propulsion system, you can reach your destination in record time. But speed isn't the only thing FS2F1 has to offer.</p>
              <p style={{textAlign: "left"}}>The safety of its passengers and crew is a top priority. That's why FS2F1 is equipped with state-of-the-art technology, designed to provide the highest level of safety during every phase of the mission. The rocket features a redundant system of sensors and control systems, ensuring a smooth and stable flight. In the unlikely event of an emergency,FS2F1 is equipped with an advanced escape system, which can safely eject the crew and passengers to safety.</p>
              <p style={{textAlign: "left"}}>FS2F1's sleek and aerodynamic design not only looks amazing, but also reduces wind resistance and provides a more stable and efficient flight. The interior of the rocket is designed with the comfort of the passengers in mind, featuring spacious seating, and large windows.</p>

            </Col>
          </Row>
        </Container>
        <Particle />
      </Container>
    </section>
  )
}

export default Vehicles;