import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row, Col } from 'react-bootstrap';
import {
    MDBModal,
    MDBModalBody,
    MDBModalFooter,
    MDBModalHeader,
    MDBCarousel,
    MDBCarouselInner,
    MDBCarouselItem,
    MDBBadge,
    MDBView, 
    MDBMask,
    MDBBtn
} from 'mdbreact';
import Skin from '../../res/Skin';
import Projects from '../../res/projects';

class Portfolio extends Component {

    development_projects = Projects.filter(el => el.title === "FiresideBOT" || el.title === "Alexa Monahan MUA" || el.title === "Acirhia");
    graphicDesign_projects = Projects.filter(el => el.title === "AarEey Logo" || el.title === "Acero Logo" || el.title === "HecticBoomer Logo");
    motionGraphics_projects = Projects.filter(el => el.title === "HecticBoomer Screen" || el.title === "HecticBoomer Transition" || el.title === "DTM_Zombie Transition");

    constructor() {
        super();
        this.state = {};
    }

    toggle = nr => () => {
        let modalNumber = 'modal' + nr;
        this.setState({[modalNumber]: !this.state[modalNumber]});
    }

    findModal = (index) => this.state[("modal" + index)];

    renderVideoEmbed(el, idx) {
        return(
            <div className="embed-responsive embed-responsive-16by9">
                <iframe
                title={idx}
                className="embed-responsive-item"
                src={el} 
                frameborder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen 
                />
            </div>
        );
    }

    renderDevProjects() {
        let Projects = this.development_projects.map((el, idx) => {
            return(
                <Col key={idx} md={4} sm={"auto"} className="FeaturedDev">
                <MDBView hover>
                <img
                    src={el.featuredImage}
                    style={{ borderRadius: "10px" }}
                    className="img-fluid"
                    alt=""
                />
                <MDBMask className="flex-center" overlay="black-strong" style={{ borderRadius: "10px" }}>
                    <div className="text-center" style={{ width: "96%" }}>
                        <h3 className="white-text h3" style={{ fontWeight: "800" }}>{el.title}</h3>
                        <h6 className="white-text h6">{el.text}</h6>
                        <br />
                        <MDBBtn color={Skin.MDBColor} className="Button" onClick={this.toggle((idx + 1))}>View Project</MDBBtn>
                    </div>
                </MDBMask>
                </MDBView>

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
                                            {!img.split("/").includes("youtube.com") ? <img className="d-block w-100" src={img} alt={`Slide ${(idxx + 1)}`} /> : ''}
                                            {img.split("/").includes("youtube.com") ? this.renderVideoEmbed(img, idx) : ''}
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

    renderGraphicDesignProjects() {
        let Projects = this.graphicDesign_projects.map((el, idx) => {
            let _idx = (idx + this.development_projects.length) + 1;
            return(
                <Col key={_idx} md={4} sm={10} className="FeaturedGraphic">
                    <MDBView hover>
                    <img
                        src={el.featuredImage}
                        style={{ borderRadius: "10px" }}
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center" overlay="black-strong" style={{ borderRadius: "10px" }}>
                        <div className="text-center" style={{ width: "96%" }}>
                            <h3 className="white-text h3" style={{ fontWeight: "800" }}>{el.title}</h3>
                            <h6 className="white-text h6">{el.text}</h6>
                            <br />
                            <MDBBtn color={Skin.MDBColor} className="Button" onClick={this.toggle(_idx)}>View Project</MDBBtn>
                        </div>
                    </MDBMask>
                    </MDBView>

                    <MDBModal isOpen={this.findModal(_idx)} toggle={this.toggle(((idx + this.development_projects.length) + 1))} centered>
                    <MDBModalHeader toggle={this.toggle(_idx)} className="Modal">{el.title}</MDBModalHeader>
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

    renderMotionGraphicProjects() {
        let Projects = this.motionGraphics_projects.map((el, idx) => {
            let _idx = (idx + this.development_projects.length + this.graphicDesign_projects.length) + 1;
            return(
                <Col key={_idx} md={4} sm={10} className="FeaturedVisual">
                    <MDBView hover>
                    <img
                        src={el.featuredImage}
                        style={{ borderRadius: "10px" }}
                        className="img-fluid"
                        alt=""
                    />
                    <MDBMask className="flex-center" overlay="black-strong" style={{ borderRadius: "10px" }}>
                        <div className="text-center" style={{ width: "96%" }}>
                            <h3 className="white-text h3" style={{ fontWeight: "800" }}>{el.title}</h3>
                            <h6 className="white-text h6">{el.text}</h6>
                            <br />
                            <MDBBtn color={Skin.MDBColor} className="Button" onClick={this.toggle(_idx)}>View Project</MDBBtn>
                        </div>
                    </MDBMask>
                    </MDBView>

                    <MDBModal isOpen={this.findModal(_idx)} toggle={this.toggle(_idx)} centered>
                    <MDBModalHeader toggle={this.toggle(_idx)} className="Modal">{el.title}</MDBModalHeader>
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
        })

        return Projects;
    }

    render() {
        return(
            <div id="Portfolio">
            <Container fluid style={{ width: "80%", marginBottom: "5%" }}>
                <Row className="justify-content-md-center" style={{ marginBottom: "5%", textAlign: "center" }}>
                <Col>
                    <h2 className="h2" style={{ fontWeight: "600" }}>Recent Work</h2>
                </Col>
                </Row>
                <Row style={{ marginBottom: "5%" }}>
                    <Container>
                        <Row className="justify-content-sm-center">
                        {this.renderDevProjects()}
                        </Row>
                        <Row className="justify-content-sm-center">
                        {this.renderGraphicDesignProjects()}
                        </Row>
                        <Row className="justify-content-sm-center">
                        {this.renderMotionGraphicProjects()}
                        </Row>
                        <Row className="Portfolio-ViewFull-Button">
                        <Col>
                            <Link to="/portfolio">
                                <MDBBtn color={Skin.MDBColor} className="Button">
                                <p style={{ display: "inline" }}>View Full Portfolio </p>
                                <FontAwesomeIcon icon="arrow-circle-right" />
                                </MDBBtn>
                            </Link>
                        </Col>
                        </Row>
                    </Container>
                </Row>
            </Container>
            </div>
        );
    }
};

export default Portfolio;