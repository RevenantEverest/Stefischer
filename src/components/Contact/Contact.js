import React, { Component } from 'react';
import './Contact.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { MDBBtn } from 'mdbreact';
import Skin from '../../res/Skin';

import apiServices from '../../services/apiServices';

class Contact extends Component {

    constructor() {
        super();
        this.state = {
            validated: false,
            formComplete: false
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => this.setState({ [e.target.name]: e.target.value });

    handleSubmit(e) {
        const form = e.currentTarget;
        e.preventDefault();
        if(form.checkValidity() === false) e.stopPropagation();
        else {
            this.setState({ validated: true });
            let data = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                phone_number: this.state.phone_number,
                message: this.state.message
            }
            apiServices.sendEmail(data)
            .then(response => {
                form.reset();
                this.setState({ formComplete: true }, () => {
                    setTimeout(() => this.setState({ formComplete: false }), 2000);
                })
            })
            .catch(err => console.error(err));
        }
    }

    renderFormComplete() {
        return(
            <Row style={{ marginBottom: "5%" }}>
                <Col style={{ paddingLeft: "0" }}>
                <MDBBtn color="green" style={{ width: "100%", fontWeight: "600", fontSize: "12px" }}>Thank you for your message!</MDBBtn>
                </Col>
            </Row>
        );
    }

    renderSubmitButton() {
        return(
            <MDBBtn color={Skin.MDBColor} style={{ width: "100%", marginLeft: "0" }} className="Button" type="submit" value="submit">
            <FontAwesomeIcon className="FontAwesomeIcon" icon="paper-plane" />
            Submit
            </MDBBtn>
        );
    }

    render() {
        const { validated } = this.state;
        return(
            <div id="Contact" style={{ marginTop: "5%" }}>
            <Container>
                <Row style={{ marginBottom: "5%" }}>
                <Col md={7} lg={7} style={{ marginBottom: "5%" }}>
                    <Container>
                    <Row>
                        <Col>
                            <h2 style={{ fontWeight: "800" }} className="h2">Contact</h2>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "5%", fontSize: "20px" }}>
                        <Col className="Contact-Col">
                            <FontAwesomeIcon className="FontAwesomeIcon" icon="envelope" />
                            <p style={{ display: "inline" }}>Stefischer@mail.com</p>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "1%", fontSize: "20px" }}>
                        <Col className="Contact-Col">
                            <a href="https://github/RevenantEverest" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="FontAwesomeIcon Contact-Icon" icon={["fab", "github"]} />
                                <p className="Contact-P">github.com/RevenantEverest</p>
                            </a>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "1%", fontSize: "20px" }}>
                        <Col className="Contact-Col">
                            <a href="https://linkedin.com/in/Stefischer" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="FontAwesomeIcon Contact-Icon" icon={["fab", "linkedin"]} />
                                <p className="Contact-P">linkedin.com/in/Stefischer</p>
                            </a>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "1%", fontSize: "20px" }}>
                        <Col className="Contact-Col">
                            <a href="https://facebook.com/RevenantEeverest" target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon className="FontAwesomeIcon Contact-Icon" icon={["fab", "facebook"]} />
                                <p className="Contact-P">facebook.com/RevenantEeverest</p>
                            </a>
                        </Col>
                    </Row>
                    </Container>
                </Col>
                <Col md={5} lg={5}>
                    <Container>
                    
                    <Row>
                        <Col>
                        <Form
                        noValidate
                        validated={validated}
                        onSubmit={this.handleSubmit}
                        style={{ 
                            color: '#cccccc', 
                            display: 'block', 
                            marginLeft: 'auto', 
                            marginRight: 'auto'
                        }}
                        id="Contact-Form"
                        >
                            <Form.Row>
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label style={{ width: '100%' }}>
                                    First Name
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text" 
                                    name="first_name"
                                    placeholder="John"
                                    onChange={this.handleChange} 
                                    className="Contact-Input"
                                />
                                <Form.Control.Feedback>Looks Good!</Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} controlId="exampleForm.ControlInput1">
                                <Form.Label style={{ width: '100%' }}>
                                    Last Name
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="text" 
                                    name="last_name"
                                    placeholder="Smith"
                                    onChange={this.handleChange} 
                                    className="Contact-Input"
                                />
                            </Form.Group>
                            </Form.Row>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label style={{ width: '100%' }}>
                                    <FontAwesomeIcon icon="envelope" style={{ marginRight: '5%' }} />
                                    Email Address
                                </Form.Label>
                                <Form.Control
                                    required
                                    type="email" 
                                    placeholder="name@example.com" 
                                    name="email" 
                                    onChange={this.handleChange} 
                                    className="Contact-Input"
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlInput1">
                                <Form.Label style={{ width: '100%' }}>
                                    <FontAwesomeIcon icon="phone" style={{ marginRight: '5%' }} />
                                    Phone Number
                                </Form.Label>
                                <Form.Control 
                                    required
                                    type="tel" 
                                    placeholder="1-800-555-6677" 
                                    name="phone_number" 
                                    onChange={this.handleChange} 
                                    className="Contact-Input"
                                />
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Message</Form.Label>
                                <Form.Control 
                                    required
                                    as="textarea" 
                                    rows="3" name="message" 
                                    onChange={this.handleChange} 
                                    style={{ height: '15vh' }} 
                                    className="Contact-Input"
                                />
                            </Form.Group>
                            <Form.Group >
                                {this.state.formComplete ? this.renderFormComplete() : this.renderSubmitButton()}
                            </Form.Group>
                        </Form>
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

export default Contact;