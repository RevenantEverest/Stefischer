import React, { Component } from 'react';
import './Footer.css';

import { Link as ScrollLink } from 'react-scroll'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col, OverlayTrigger, Tooltip } from 'react-bootstrap';

class Footer extends Component {
    
    render() {
        return(
            <div id="Footer" style={{ height: "150px" }}>
            <Container>
                <Row className="justify-contant-md-center" style={{ marginTop: "5%", height: "20vh" }}>
                    <Col>
                        <ScrollLink activeClass="active" className="test6" to="home" spy={true} smooth={true} duration={2000}>
                            <OverlayTrigger overlay={<Tooltip id="tooltip-disabled">Beam me up Scotty!</Tooltip>}>
                            <div style={{ position: "relative", top: "10%" }}>
                                <div className="BeamMeUp"><FontAwesomeIcon className="BeamMeUp-Text" icon="user-astronaut" /></div>
                            </div>
                            </OverlayTrigger>
                        </ScrollLink>
                    </Col>
                </Row>
            </Container>
            </div>
        );
    }
};

export default Footer;