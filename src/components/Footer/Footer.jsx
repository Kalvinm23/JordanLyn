import React, {Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebook, faLinkedin, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";

function Footer() {
    return (
        <Fragment>
            <Container fluid={true} className="footerSection">
                <Row>
                    <Col lg={3} md={6} sm={12} className="p-lg-5 mb-3 text-lg-center">
                        <h2 className="footerName">Follow Us</h2>
                        <div className="socialContainer">
                            <a className="social" href="#"><FontAwesomeIcon icon={faFacebook}
                                                                                     size="2x"/></a>
                            <a className="social" href="#"><FontAwesomeIcon icon={faYoutube} size="2x"/></a>
                            <a className="social" href="#"><FontAwesomeIcon icon={faLinkedin} size="2x"/></a>
                        </div>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-lg-5 mb-3 text-start">
                        <h2 className="footerName">Address</h2>
                        <p className="footerDescription my-0">You can add address here</p>
                        <p className="footerDescription my-0"><FontAwesomeIcon
                            icon={faEnvelope}/> Email:jordanlynn@jklrail.com</p>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-lg-5 mb-3 text-start">
                        <h2 className="footerName">Information</h2>
                        <a className="footerLink" href="#">About Me</a><br/>
                        <a className="footerLink" href="#">Company Profile</a><br/>
                        <a className="footerLink" href="#">Contact Us</a>
                    </Col>
                    <Col lg={3} md={6} sm={12} className="p-lg-5 mb-3 text-start">
                        <h2 className="footerName">Policy</h2>
                        <a className="footerLink" href="#">Refund Policy</a><br/>
                        <a className="footerLink" href="#">Terms and Conditions</a><br/>
                        <a className="footerLink" href="#">Privacy Policy</a>
                    </Col>
                </Row>
            </Container>
            <Container fluid={true} className="text-center p-3">
                <a className="copyrightLink" href="#">@ Copyright 2023 by JKL Rail, All Rights Reserved.</a>
            </Container>

        </Fragment>
    );
}

export default Footer;