import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavBar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link as ScrollLink, Element } from 'react-scroll';
import { 
    MDBNavbar, 
    MDBNavbarBrand, 
    MDBCollapse, 
    MDBNavbarNav, 
    MDBNavItem, 
    MDBNavLink
} from 'mdbreact';

class NavBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            homeActive: false
        }
    }

    toggleCollapse = () => this.setState({ isOpen: !this.state.isOpen });

    renderLogo() {
        if(this.props.location.pathname !== "/")
        return(<Link to="/"><img src="https://i.imgur.com/J9gcsoF.png" alt="" style={{ height: "45px" }}/></Link>);
        else return(<img src="https://i.imgur.com/J9gcsoF.png" alt="" style={{ height: "45px" }}/>);
    }

    renderHome() {
        if(this.props.location.pathname !== "/")
            return <MDBNavLink to="/" className="NavLink">Home</MDBNavLink>;
        else return <MDBNavLink to="#" className="NavLink">Home</MDBNavLink>;
    }

    renderAbout() {
        if(this.props.location.pathname !== "/")
            return <MDBNavLink to="/about" className="NavLink">About</MDBNavLink>;
        else return <ScrollLink activeClass="active" className="test6 NavLink" to="about" spy={true} smooth={true} duration={800}>About</ScrollLink>;
    }

    renderContact() {
        if(this.props.location.pathname !== "/")
            return <MDBNavLink to="/contact" className="NavLink">Contact</MDBNavLink>;
        else return <ScrollLink activeClass="active" className="test6 NavLink" to="contact" spy={true} smooth={true} duration={800}>Contact</ScrollLink>;
    }

    renderPortfolio() {
        if(this.props.location.pathname !== "/portfolio")
            return <MDBNavLink to="/portfolio" className="NavLink">Portfolio</MDBNavLink>;
        else return <MDBNavLink to="#" className="NavLink">Portfolio</MDBNavLink>;
    }

    render() {
        return(
            <div id="NavBar">
            <Element id="home">
            <MDBNavbar expand="md">
                <MDBNavbarBrand>
                {this.renderLogo()}
                </MDBNavbarBrand>
                <FontAwesomeIcon icon="bars" onClick={this.toggleCollapse} id="NavBar-Collapse" />
                <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
                <MDBNavbarNav left id="NavBar-Nav">
                    <MDBNavItem active={this.state.HomeActive}>
                    {this.renderHome()}
                    </MDBNavItem>
                    <MDBNavItem>
                    {this.renderAbout()}
                    </MDBNavItem>
                    <MDBNavItem>
                    {this.renderPortfolio()}
                    </MDBNavItem>
                    <MDBNavItem>
                    {this.renderContact()}
                    </MDBNavItem>
                </MDBNavbarNav>
                </MDBCollapse>
            </MDBNavbar>
            </Element>
            </div>
        );
    }
};

export default withRouter(NavBar);