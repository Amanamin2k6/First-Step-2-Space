import React from "react";
import { Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button  } from "react-bootstrap";
import Particle from "../Particle"

<section>
    <Particle />
    <Container>
        <Container>
            <Row>
                <h1><strong>Launch and Recovery</strong></h1>
            </Row>
            <Row>
                <Card className="d-flex">
                    <Col md={4}>
                        <CardImg
                            src="https://via.placeholder.com/300x150"
                            alt="Card Image cap"
                        />
                    </Col>
                    <Col md={8}>
                        <CardBody>
                            <CardTitle>Card Title</CardTitle>
                            <CardSubtitle>Card Subtitle</CardSubtitle>
                            <CardText>
                                Sample Text
                            </CardText>
                            <Button>Button</Button>
                        </CardBody>
                    </Col>
                </Card>
            </Row>
        </Container>
    </Container>
</section>
