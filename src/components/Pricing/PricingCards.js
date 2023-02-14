import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";

function PricingCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" width= { 100} src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title> <span className="purple"> {props.title} </span></Card.Title>
        &nbsp;
        <Card.Text style={{ textAlign: "center"}}>
          {props.description21}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description3}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description4}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description5}
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          {props.description}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description9}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description11}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description12}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description18}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description19}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center"}}>
          {props.description20}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description1}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description2}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description7}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description8}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description10}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description13}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description14}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description15}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description16}
        </Card.Text>
        &nbsp;
        <Card.Text style={{ textAlign: "center" }}>
          {props.description17}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank"> Sign Up
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default PricingCards;
