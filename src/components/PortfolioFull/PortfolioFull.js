import React, { Component } from 'react';
import './PortfolioFull.css';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBNav,
    MDBNavItem,
    MDBNavLink,
    MDBTabContent,
    MDBTabPane
} from 'mdbreact';

import FullStack from '../FullStack/FullStack';
import Frontend from '../Frontend/Frontend';
import Backend from '../Backend/Backend';
import MotionGraphics from '../MotionGraphics/MotionGraphics';
import Logos from '../Logos/Logos';

class PortfolioFull extends Component {

    state = {
        activeItem: "1"
    };
  
    toggle = tab => e => {
      if (this.state.activeItem !== tab)
        this.setState({activeItem: tab});
    };

    render() {
        return(
            <div id="PortfolioFull">
            <MDBContainer style={{  width: "85vw", marginTop: "5%" }}>
                <MDBRow className="justify-content-md-center">
                    <MDBCol>
                        <h1 className="text-center" style={{ fontWeight: "600" }}>Portfolio</h1>
                    </MDBCol>
                </MDBRow>
                <MDBRow className="justify-content-md-center">
                    <MDBNav className="nav-tabs mt-5">
                        <MDBNavItem>
                        <MDBNavLink to="#" active={this.state.activeItem === "1"} onClick={this.toggle("1")} role="tab"
                        style={this.state.activeItem === "1" ? {backgroundColor: "#1f1f1f", color: "#cccccc"} : {}}
                        >
                            Full Stack Applications
                        </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBNavLink to="#" active={this.state.activeItem === "2"} onClick={this.toggle("2")} role="tab"
                        style={this.state.activeItem === "2" ? {backgroundColor: "#1f1f1f", color: "#cccccc"} : {}}
                        >
                            Frontend Applications
                        </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBNavLink to="#" active={this.state.activeItem === "3"} onClick={this.toggle("3")} role="tab" 
                        style={this.state.activeItem === "3" ? {backgroundColor: "#1f1f1f", color: "#cccccc"} : {}}
                        >
                            Backend Applications
                        </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBNavLink to="#" active={this.state.activeItem === "4"} onClick={this.toggle("4")} role="tab"
                        style={this.state.activeItem === "4" ? {backgroundColor: "#1f1f1f", color: "#cccccc"} : {}}
                        >
                            Motion Graphics
                        </MDBNavLink>
                        </MDBNavItem>
                        <MDBNavItem>
                        <MDBNavLink to="#" active={this.state.activeItem === "5"} onClick={this.toggle("5")} role="tab"
                        style={this.state.activeItem === "5" ? {backgroundColor: "#1f1f1f", color: "#cccccc"} : {}}
                        >
                            Logos
                        </MDBNavLink>
                        </MDBNavItem>
                    </MDBNav>
                </MDBRow>
                <MDBRow className="justify-content-md-center">
                    <MDBTabContent activeItem={this.state.activeItem} style={{ marginTop: "25px" }}>
                        <MDBTabPane tabId="1" role="tabpanel">
                            <FullStack />
                        </MDBTabPane>
                        <MDBTabPane tabId="2" role="tabpanel" style={{ marginTop: "25px" }}>
                            <Frontend />
                        </MDBTabPane>
                        <MDBTabPane tabId="3" role="tabpanel" style={{ marginTop: "25px" }}>
                            <Backend />
                        </MDBTabPane>
                        <MDBTabPane tabId="4" role="tabpanel" style={{ marginTop: "25px" }}>
                            <MotionGraphics />
                        </MDBTabPane>
                        <MDBTabPane tabId="5" role="tabpanel" style={{ marginTop: "25px" }}>
                            <Logos />
                        </MDBTabPane>
                        {/* <MDBTabPane tabId="6" role="tabpanel" style={{ marginTop: "25px" }}>
                            <SkillsOther />
                        </MDBTabPane> */}
                    </MDBTabContent>
                </MDBRow>
            </MDBContainer>
            </div>
        );
    }
};

export default PortfolioFull;