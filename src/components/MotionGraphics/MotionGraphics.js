import React, { Component } from 'react';
import './MotionGraphics.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCardTitle,
    MDBCardText,
    MDBView,
    MDBModal,
    MDBModalBody,
    MDBModalHeader,
    MDBModalFooter,
    MDBBtn,
    MDBMask
} from 'mdbreact';
import projects from '../../res/projects';
import Skin from '../../res/Skin';

class MotionGraphics extends Component {

    projects = projects.filter(el => el.category === "MotionGraphics");

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
        console.log(this.projects)
        let Projects = this.projects.map((el, idx) => {
            return(
                <Col key={idx} md={4} style={{ marginBottom: "4%" }}>

                <Container>
                <Row>
                    <Col md={9}>

                    <MDBCard style={{ width: "22rem" }}>
                        <MDBView hover>
                        <MDBCardImage
                            src={el.thumbnail}
                            className="img-fluid"
                            alt=""
                            waves
                        />
                        <MDBMask className="flex-center" overlay="black-strong">
                            <FontAwesomeIcon 
                            style={{ fontSize: "100px" }} 
                            className=" flex-center white-text" 
                            icon="play-circle" 
                            onClick={this.toggle((idx + 1))}
                            />
                        </MDBMask>
                        </MDBView>
                        <MDBCardBody style={{ background: "#1a1a1a" }}>
                        <MDBCardTitle>{el.title}</MDBCardTitle>
                        <MDBCardText>{el.text}</MDBCardText>
                        <MDBBtn color={Skin.MDBColor} className="Button" onClick={this.toggle((idx + 1))}>Learn More</MDBBtn>
                        </MDBCardBody>
                    </MDBCard>
                    </Col>
                </Row>
                </Container>

                <MDBModal isOpen={this.findModal((idx + 1))} toggle={this.toggle((idx + 1))} centered>
                <MDBModalHeader toggle={this.toggle((idx + 1))} className="Modal">{el.title}</MDBModalHeader>
                <MDBModalBody className="Modal">
                    <Container>
                    <Row>
                        <Col>
                            <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                            title={idx}
                            className="embed-responsive-item"
                            src={el.videoLink} 
                            frameborder="0" 
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen />
                            </div>
                        </Col>
                    </Row>
                    </Container>
                </MDBModalBody>
                <MDBModalFooter className="Modal">
                    {el.channel ? <MDBBtn color={Skin.MDBColor} className="Button" tag="a" role="button" target="_blank" rel="noopener noreferrer" href={el.channel}>View Twitch Channel</MDBBtn> : ''}
                </MDBModalFooter>
                </MDBModal>
                </Col>
            );
        });
        return Projects;
    }

    render() {

        

        return(
            <div id="MotionGraphics">
            <Container>
                <Row className="justify-content-md-center">
                {this.renderProjects()}
                </Row>
            </Container>
            </div>
        );
    }
};

export default MotionGraphics;