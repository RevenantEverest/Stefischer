import React, { Component } from 'react';
import './Frontend.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import { 
    MDBCard, 
    MDBCardBody, 
    MDBCardImage, 
    MDBCardText, 
    MDBCardTitle, 
    MDBBtn, 
    MDBView,
    MDBModal,
    MDBModalBody,
    MDBModalFooter,
    MDBModalHeader,
    MDBCarousel,
    MDBCarouselItem,
    MDBCarouselInner,
    MDBBadge
} from 'mdbreact';
import projects from '../../res/projects';
import Skin from '../../res/Skin';

class Frontend extends Component {

    projects = projects.filter(el => el.category === "Frontend" || el.category === "Fullstack");

    state = {
        modal1: false,
        modal2: false
    }
      
    toggle = nr => () => {
        let modalNumber = 'modal' + nr;
        this.setState({[modalNumber]: !this.state[modalNumber]});
    }

    findModal = (index) => this.state[("modal" + index)];

    renderProjects() {
        let Projects = this.projects.map((el, idx) => {
            return(
                <Col key={idx} lg={4} md={6} sm={7} style={{ marginBottom: "4%" }} className="Portfolio-Col">
                <MDBCard style={{ width: "22rem" }}>
                    <MDBCardImage className="img-fluid" src={el.cardImage} waves />
                    
                    <MDBCardBody style={{ background: "#1a1a1a" }}>
                    <MDBCardTitle>{el.title}</MDBCardTitle>
                    <MDBCardText style={{ height: "5vh" }}>{el.text}</MDBCardText>
                    <MDBBtn color={Skin.MDBColor} className="Button" onClick={this.toggle((idx + 1))}>Learn More</MDBBtn>
                    </MDBCardBody>
                </MDBCard>

                <MDBModal isOpen={this.findModal((idx + 1))} toggle={this.toggle((idx + 1))} centered>
                <MDBModalHeader toggle={this.toggle((idx + 1))} className="Modal">{el.title}</MDBModalHeader>
                <MDBModalBody className="Modal">
                    <Container>
                    <Row>
                        <Col>
                        <MDBCarousel
                        activeItem={1}
                        length={el.images.length}
                        showControls={true}
                        showIndicators={true}
                        className="z-depth-1"
                        >
                        <MDBCarouselInner>
                            {
                                el.images.map((img, idxx) => {
                                    return(
                                        <MDBCarouselItem itemId={(idxx + 1)} key={idxx}>
                                        <MDBView>
                                            <img
                                            className="d-block w-100"
                                            src={img}
                                            alt={`Slide ${(idxx + 1)}`}
                                            />
                                        </MDBView>
                                        </MDBCarouselItem>
                                    );
                                })
                            }
                        </MDBCarouselInner>
                        </MDBCarousel>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                        <p style={{ fontWeight: "600" }}>Description: </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <p>{el.moreInfo}</p>
                        </Col>
                    </Row>
                    <br />
                    <Row>
                        <Col>
                            <p style={{ fontWeight: "600" }}>Technologies Used: </p>
                            <Container fluid>
                            <Row>
                                <Col style={{ paddingLeft: "0", paddingRight: "0" }}>
                                {
                                    el.techUsed.map((tech, idxx) => <MDBBadge color="dark" key={idxx}>{tech}</MDBBadge>)
                                }
                                </Col>
                            </Row>
                            </Container>
                        </Col>
                    </Row>
                    </Container>
                </MDBModalBody>
                <MDBModalFooter className="Modal">
                    {el.deployed ? <MDBBtn color={Skin.MDBColor} className="Button" tag="a" role="button" target="_blank" rel="noopener noreferrer" href={el.site}>View Site</MDBBtn> : ''}
                    {el.github ? <MDBBtn color={Skin.MDBColor} className="Button" tag="a" role="button" target="_blank" rel="noopener noreferrer" href={el.github}><FontAwesomeIcon icon={['fab', 'github']} /> Github</MDBBtn> : ''}
                </MDBModalFooter>
                </MDBModal>
                </Col>
            );
        });
        return Projects;
    }

    render() {

        

        return(
            <div id="Frontend">
            <Container>
                <Row className="justify-content-md-center justify-content-sm-center">
                {this.renderProjects()}
                </Row>
            </Container>
            </div>
        );
    }
};

export default Frontend;