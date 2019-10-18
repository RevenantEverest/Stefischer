import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

import ParticlesConfig from '../../res/ParticlesConfig';
import { Link as ScrollLink, Element, Events } from 'react-scroll';
import { 
    MDBContainer, 
    MDBRow, 
    MDBCol, 
    MDBJumbotron, 
    MDBCardTitle, 
    MDBCardBody,
    MDBBtn 
} from 'mdbreact';

import About from '../About/About';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Contact from '../Contact/Contact';
import Spotify from '../Spotify/Spotify';
import Skin from '../../res/Skin';
import Particles from 'react-particles-js';

class HomePage extends Component {
    
    componentDidMount() {
        Events.scrollEvent.register('begin', () => console.log("begin", arguments));
        Events.scrollEvent.register('end', () => console.log("end", arguments));
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return(
            <div id="HomePage">
            <MDBContainer fluid className=" text-center" style={{ marginTop: "0", marginBottom: "5%" }}>
            <MDBRow>
                <MDBCol style={{ paddingLeft: "0", paddingRight: "0" }}>
                <MDBJumbotron fluid style={{ background: "#1a1a1a", height: "720px" }}>
                    <MDBCardBody style={{ position: "absolute", width: "99%", margin: "0 auto", top: "45%", transform: "translateY(-50%)" }}>
                    <MDBCardTitle className="h1">
                        Full Stack Developer, Graphic Designer, Visual Effects Artist
                    </MDBCardTitle>
                    <hr className="my-4" />
                    <div className="pt-2">
                        <ScrollLink activeClass="active" className="test6" to="about" spy={true} smooth={true} duration={800}>
                        <MDBBtn color={Skin.MDBColor} className="Button">
                        About
                        </MDBBtn>
                        </ScrollLink>
                        <Link to="/portfolio">
                        <MDBBtn color={Skin.MDBColor} className="Button">
                        Portfolio
                        </MDBBtn>
                        </Link>
                        <ScrollLink activeClass="active" className="test6" to="contact" spy={true} smooth={true} duration={800}>
                        <MDBBtn color={Skin.MDBColor} className="Button">
                        Contact
                        </MDBBtn>
                        </ScrollLink>
                    </div>
                    </MDBCardBody>
                    <Particles params={ParticlesConfig} height={650} />
                </MDBJumbotron>
                </MDBCol>
            </MDBRow>
            </MDBContainer>
            <Element id="about">
                <About />
            </Element>
            <hr className="my-4" />
            <Skills />
            <hr className="my-4" />
            <Portfolio />
            <hr className="my-4" />
            <Spotify />
            <hr className="my-4" />
            <Element id="contact">
                <Contact />
            </Element>
            </div>
        );
    }
};

export default HomePage;