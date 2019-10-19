import React, { Component } from 'react';
import './Skills.css';

import { Container, Row, Col } from 'react-bootstrap';
import { 
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText
} from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MySkills from '../../res/Skills';
import Skin from '../../res/Skin';

class Skills extends Component {

      render() {
        return (
          <Container>
          <Row style={{ width: "99%", margin: "0 auto" }} className="justify-content-md-center">
            <Col className="Skills-Col" lg={4} md={8} sm={12}>
              <MDBCard className="Skills-Card text-center">    
                <MDBCardBody className="Skills-Card-Body">
                <MDBCardTitle className="Skills-Card-Title" tag="div">
                  <FontAwesomeIcon className="h1" style={{ color: Skin.hex }} icon="code" />
                  <br />
                  <h2 className="h2">Full Stack Developer</h2>
                  <br />
                  <h5 className="h5">
                    I'm prepared to lay the foundation and base structure of any application professionally, 
                    to ensure it supports the entire ediface.
                  </h5>
                </MDBCardTitle>
                <MDBCardText tag="div" style={{ color: "#cccccc" }}>
                  <h5 className="h5" style={{ color: Skin.hex }}>Languages</h5>
                  <h5 className="h5">{MySkills.languages.join(", ")}</h5>
                  <br />
                  <h5 className="h5" style={{ color: Skin.hex }}>Frameworks / Libraries</h5>
                  <h5 className="h5">{MySkills.libraries.join(", ")}</h5>
                  <br />
                  <h5 className="h5" style={{ color: Skin.hex }}>Databases</h5>
                  <h5 className="h5">{MySkills.databases.join(", ")}</h5>
                  <br />
                  <h5 className="h5" style={{ color: Skin.hex }}>DevOps</h5>
                  <h5 className="h5">{MySkills.devops.join(", ")}</h5>
                  <br />
                </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>

            <Col className="Skills-Col" lg={4} md={8} sm={12}>
              <MDBCard className="Skills-Card text-center">    
                <MDBCardBody className="Skills-Card-Body">
                <MDBCardTitle className="Skills-Card-Title" tag="div">
                  <FontAwesomeIcon className="h1" style={{ color: Skin.hex }} icon="palette" />
                  <br />
                  <h2 className="h2">Graphic Designer</h2>
                  <br />
                  <h5 className="h5">
                    I value designs that can convey their messages clearly, and effectively while maintaining simple content structures, and clean design patterns.
                  </h5>
                </MDBCardTitle>
                <MDBCardText tag="div" style={{ color: "#cccccc" }}>
                  <h5 className="h5" style={{ color: Skin.hex }}>What I Design</h5>
                  <h5 className="h5">Logos, Social Media Banners, Full Twitch Channel Graphics</h5>
                  <br />
                  <h5 className="h5" style={{ color: Skin.hex }}>Design Tools</h5>
                  <h5 className="h5">{MySkills.graphic_design.join(", ")}</h5>
                  <br />
                  <h5 className="h5" style={{ color: Skin.hex }}>Design Stats</h5>
                  {MySkills.design_stats.map((el, idx) => <h5 key={idx} className="h5">{el}</h5>)}
                </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>

            <Col className="Skills-Col" lg={4} md={8} sm={12}>
              <MDBCard className="Skills-Card text-center">    
                <MDBCardBody className="Skills-Card-Body">
                <MDBCardTitle className="Skills-Card-Title" tag="div">
                  <FontAwesomeIcon className="h1" style={{ color: Skin.hex }} icon="photo-video" />
                  <br />
                  <h2 className="h2">Visual Effects Artist</h2>
                  <br />
                  <h5 className="h5">
                    My experience in the field has given me a vast array of concepts and skills to apply to my work.
                  </h5>
                </MDBCardTitle>
                <MDBCardText tag="div" style={{ color: "#cccccc" }}>
                  <h5 className="h5" style={{ color: Skin.hex }}>What I've Worked On</h5>
                  <h5 className="h5">Stinger Transitions, Motion Graphics, Special Effects</h5>
                  <br />
                  <h5 className="h5" style={{ color: Skin.hex }}>Toolbelt</h5>
                  {MySkills.visual_effects.map((el, idx) => <h5 className="h5" key={idx}>{el}</h5>)}
                </MDBCardText>
                </MDBCardBody>
              </MDBCard>
            </Col>
          </Row>
          </Container>
      );
    }
};

export default Skills;