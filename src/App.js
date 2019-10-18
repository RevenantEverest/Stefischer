import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';

import { 
    faEnvelope, faUser, faPhone, faArrowCircleRight, faGlobeAmericas, 
    faTachometerAlt, faMagic, faChartLine, faCoins, faInfoCircle, 
    faCrown, faComments, faMusic, faAward, faBolt,
    faSignOutAlt, faCode, faCog, faCogs, faUserAstronaut,
    faTrashAlt, faNewspaper, faBullhorn, faCompactDisc, faClock, 
    faHeadphonesAlt, faArrowAltCircleRight, faTimes, faCrosshairs, faEdit, 
    faLink, faMugHot, faPaperPlane, faDatabase, faHeart, 
    faMapMarkerAlt, faPlayCircle, faPalette, faPhotoVideo, faBars
} from '@fortawesome/free-solid-svg-icons';

import { fab } from '@fortawesome/free-brands-svg-icons';

import HomePage from './components/HomePage/HomePage';
import PortfolioFull from './components/PortfolioFull/PortfolioFull';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';

library.add(
    fab,
    faEnvelope, faUser, faArrowCircleRight, faPhone, faGlobeAmericas,
    faTachometerAlt, faMagic, faChartLine, faCrown, faCoins,
    faInfoCircle, faComments, faMusic, faAward, faBolt,
    faSignOutAlt, faCode, faCog, faCogs, faUserAstronaut,
    faTrashAlt, faNewspaper, faBullhorn, faCompactDisc, faClock,
    faHeadphonesAlt, faArrowAltCircleRight, faTimes, faCrosshairs, faEdit,
    faLink, faMugHot, faPaperPlane, faDatabase, faHeart,
    faMapMarkerAlt, faPlayCircle, faPalette, faPhotoVideo, faBars
);

class App extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    render() {
        return(
            <div id="App">
            <Router>
                <div id="App_Contents">
                <NavBar />
                <Route exact path="/" component={HomePage} />
                <Route eaxct path="/portfolio" component={PortfolioFull} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/about" component={About} />
                <Footer />
                </div>
            </Router>
            </div>
        );
    }
};

export default App;