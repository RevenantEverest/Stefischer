import React, { Component } from 'react';
import './Spotify.css';

import { Container, Row, Col } from 'react-bootstrap';

class Spotify extends Component {

    render() {
        return(
            <div id="Spotify">
            <Container>
                <Row className="justify-content-md-center justify-content-sm-center">
                <Col sm={9} md={7} lg={5} style={{ marginBottom: "5%" }}>
                    <iframe 
                    title="Spotify"
                    src="https://open.spotify.com/embed/playlist/3yeJRBe2oyyZkRBFVaiC6Q" 
                    width="345"
                    height="380"
                    frameBorder="0"
                    allowtransparency="true"
                    allow="encrypted-media"
                    />
                </Col>
                <Col sm={9} md={7} lg={5} style={{ marginBottom: "5%" }}>
                    <Container>
                    <Row>
                        <Col>
                        <h1 style={{ fontWeight: "800" }}>My Favorite Coding Playlist</h1>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: "5%" }}>
                        <Col style={{ fontSize: "18px" }}>
                        <p>Take a listen to some of my favorite songs to code to.</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col style={{ fontSize: "18px" }}>
                        <p style={{ display: "inline" }}>View the whole playlist </p>
                        <a 
                        className="Playlist_Link" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://open.spotify.com/playlist/3yeJRBe2oyyZkRBFVaiC6Q?si=sU8s33-8QPai8WczS7iYqg"
                        >
                        here.
                        </a>
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

export default Spotify;