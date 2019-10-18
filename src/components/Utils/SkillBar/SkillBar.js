import React, { Component } from 'react';
import './SkillBar.css';

import { Container, Row, Col } from 'react-bootstrap';
import { MDBProgress } from 'mdbreact';

class SkillsLangs extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return(
            <MDBProgress value={100} className="my-2 SkillBar">
            <MDBProgress value={this.props.value} className="ProgressBar">
            <Container fluid style={{ zIndex: "1" }}>
            <Row>
                <Col style={{ padding: "0" }}><p>Beginner</p></Col>
                <Col style={{ padding: "0" }}><p>|</p></Col>
                <Col style={{ padding: "0" }}><p>Intermediate</p></Col>
                <Col style={{ padding: "0" }}><p>|</p></Col>
                <Col style={{ padding: "0" }}><p>Advanced</p></Col>
                <Col style={{ padding: "0" }}><p>|</p></Col>
                <Col style={{ padding: "0" }}><p>Expert</p></Col>
            </Row>
            </Container>
            </MDBProgress>
            </MDBProgress>
        );
    }
};

export default SkillsLangs;