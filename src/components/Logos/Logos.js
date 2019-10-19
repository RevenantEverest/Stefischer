import React, { Component } from 'react';
import './Logos.css';

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
    MDBModalHeader
} from 'mdbreact';
import projects from '../../res/projects';
import Skin from '../../res/Skin';

class Logos extends Component {

    projects = projects.filter(el => el.category === "Logos");

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
                    <MDBCardImage className="img-fluid" src={el.cardImage} waves onClick={this.toggle((idx + 1))} />
                    
                    <MDBCardBody style={{ background: "#1a1a1a" }}>
                    <MDBCardTitle>{el.title}</MDBCardTitle>
                    <MDBCardText>{el.text}</MDBCardText>
                    <MDBBtn color={Skin.MDBColor} className="Button" onClick={this.toggle((idx + 1))}>View Image</MDBBtn>
                    </MDBCardBody>
                </MDBCard>

                <MDBModal isOpen={this.findModal((idx + 1))} toggle={this.toggle((idx + 1))} centered>
                <MDBModalHeader toggle={this.toggle((idx + 1))} className="Modal">{el.title}</MDBModalHeader>
                <MDBModalBody className="Modal">
                    <Container>
                    <Row>
                        <Col>
                        <MDBView>
                            <img
                            className="d-block w-100"
                            src={el.cardImage}
                            alt={`Slide ${(idx + 1)}`}
                            />
                        </MDBView>
                        </Col>
                    </Row>
                    </Container>
                </MDBModalBody>
                <MDBModalFooter className="Modal">
                   
                </MDBModalFooter>
                </MDBModal>
                </Col>
            );
        });
        return Projects;
    }

    render() {

        

        return(
            <div id="Logos">
            <Container>
                <Row className="justify-content-md-center justify-content-sm-center">
                {this.renderProjects()}
                </Row>
            </Container>
            </div>
        );
    }
};

export default Logos;