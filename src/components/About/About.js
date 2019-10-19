import React, { Component } from 'react';
import './About.css';

import { Link as ScrollLink } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBBtn } from 'mdbreact';
import Skin from '../../res/Skin';

class About extends Component {

    render() {
        
        return(
            <div id="About">
            <Container style={{ marginBottom: "5%" }}>
                <Row className="justify-content-md-center justify-content-sm-center">
                <Col sm={8} md={8} lg={8} style={{ marginBottom: "5%"}}>
                    <Container style={{ textAlign: "center" }}>
                    <Row>
                        <Col>
                        <h2 className="h2" style={{ fontWeight: "600", textAlign: "center" }}>About Me</h2>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "5%", fontSize: "16px" }}>
                        <Col>
                        <p className="h5">
                        I'm a digerati with a background in design, utilizing the modern web stack to bring new and inovative designs to the web.
                        </p>
                        </Col>
                    </Row>
                    </Container>
                </Col>
                </Row>
                <Row className="justify-content-md-center justify-content-sm-center" style={{ width: "99%", margin: "0 auto" }}>
                <Col>
                    <Container>
                    <Row className="justify-content-md-center justify-content-sm-center justify-content-xs-center">
                        <Col xs={12} style={{ paddingLeft: "0", paddingRight: "0" }} className="justify-content-xs-center">
                        <MDBCard style={{ height: "auto", width: "20rem", margin: "0 auto" }}>
                            <MDBCardImage className="img-fluid" src="https://i.imgur.com/n41GdOj.jpg" waves />
                            <div className="avatar">
                                <Image className="Avatar_Image" src="https://i.imgur.com/7uFL2RB.jpg" roundedCircle />
                            </div>
                            <MDBCardBody style={{ background: "#1a1a1a", textAlign: "center" }}>
                            <MDBCardTitle style={{ marginTop: "20%", fontSize: "18px" }}>Stefan Fischer</MDBCardTitle>
                            <MDBCardText style={{ fontWeight: "600", fontSize: "16px" }}>
                                <FontAwesomeIcon icon="map-marker-alt" style={{ marginRight: "2%" }} />
                                 New York, New York
                                <br />
                                <br />
                                Full Stack Software Engineer
                            </MDBCardText>
                            <ScrollLink activeClass="active" className="test6" to="contact" spy={true} smooth={true} duration={800}>
                                <MDBBtn color={Skin.MDBColor} className="Button">
                                <FontAwesomeIcon className="FontAwesomeIcon" icon="mug-hot" />
                                Let's Get Coffee
                                </MDBBtn>
                            </ScrollLink>
                            </MDBCardBody>
                        </MDBCard>
                        </Col>
                    </Row>
                    </Container>
                </Col>
                </Row>
            </Container>
            </div>
        );
    }
};

export default About;