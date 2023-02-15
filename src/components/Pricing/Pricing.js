import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PricingCard from "./PricingCards";
import Particle from "../Particle";
import tier1 from "../../Assets/rocket-racer.png";
import tier2 from "../../Assets/Deep-Space-Diver.png";
import tier3 from "../../Assets/Solar-Sojourner.png";

function Pricing() {
  return (
    <section>
      <Container fluid className="project-section">
        <Container>
          <h1 className="project-heading">
            <strong>Tier <span className="purple">Plans</span></strong>
          </h1>
          <p style={{ color: "white" }}>
            Here are the different plans we offer.
          </p>
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <Col md={4} className="project-card">
              <PricingCard
                imgPath={tier1}
                isBlog={false}
                title="Rocket Racer"
                description21="20 min Space Experience ✓"
                description1="Priority booking and check-in ✕​​"
                description2="Private cabin ✕​"
                description3="EXTRA+ Plush bedding ✕​​"
                description4="Premium toiletries  ✕​​"
                description5="Gourmet dining  ✕​​"
                description6="Personalized service  ✕​​"
                description7="Virtual reality experiences  ✕​​"
                description8="Movies  ✕​​"
                description9="Exclusive training programs  ✕​​"
                description10="Personalized space suits  ✕​​"
                description11="commemorative items  ✕​​"
                description12="Dedicated crew  ✕​​"
                description13="In-flight spa services  ✕​​"
                description14="Personalized itinerary  ✕​​"
                description15="Exclusive access to space facilities  ✕​​"
                description16="Private transportation  ✕​"
                description17="Membership rewards  ✕​​"
                description18="Special events and meet-and-greets  ✕​​"
                description19="Free WIFI  ✕​​"
                description20="Space Walks ✕​​"
              />
            </Col>

            <Col md={4} className="project-card">
              <PricingCard
                imgPath={tier2}
                isBlog={false}
                title="Deep Space Diver"
                description21="1 DAY Space Experience ✓"
                description1="Priority booking and check-in ✕​"
                description2="Private cabin ✕"
                description3="EXTRA+ Plush bedding ✓​"
                description4="Premium toiletries ✓​"
                description5="Gourmet dining ✓​"
                description6="Personalized service ✓​"
                description7="Virtual reality experiences ✕​"
                description8="Movies ✕​"
                description9="Exclusive training programs  ✓​"
                description10="Personalized space suits  ✕​"
                description11="commemorative items ✓"
                description12="Dedicated crew ✓​"
                description13="In-flight spa services ✕​"
                description14="Personalized itinerary ✕​"
                description15="Exclusive access to space facilities ✕​"
                description16="Private transportation ✕"
                description17="Membership rewards ✕​"
                description18="Special events and meet-and-greets ✓​"
                description19="Free WIFI ✓​"
                description20="Space Walks 30min ✓​"
              />
            </Col>

            <Col md={4} className="project-card">
              <PricingCard
              imgPath={tier3}
                title="Solar Sojourner"
                description21="1 WEEK Space Experience ✓"
                description1="Priority booking and check-in ✓​"
                description2="Private cabin ✓"
                description3="EXTRA+ Plush bedding ✓​"
                description4="Premium toiletries ✓​"
                description5="Gourmet dining ✓​"
                description6="Personalized service ✓​"
                description7="Virtual reality experiences ✓​"
                description8="Movies ✓​"
                description9="Exclusive training programs ✓​"
                description10="Personalized space suits ✓​"
                description11="commemorative items ✓​"
                description12="Dedicated crew ✓​"
                description13="In-flight spa services ✓​"
                description14="Personalized itinerary ✓​"
                description15="Exclusive access to space facilities ✓​"
                description16="Private transportation ✓"
                description17="Membership rewards ✓​"
                description18="Special events and meet-and-greets ✓​"
                description19="Free WIFI ✓​"
                description20="Exclusive Space Walks 1hr+ ✓​"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Particle />
    </section>
  );
}

export default Pricing;
