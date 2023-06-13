import React, {Fragment} from 'react';
import {TypeAnimation} from "react-type-animation";
import face from '../../asset/image/face.png'
import {Col, Container, Row} from "react-bootstrap";

function AboutMe() {
    return (
        <Fragment>
            <Container className="aboutMe text-center my-5">
                <Row className="mt-5">
                    <Col lg={6} md={12} sm={12} data-aos="slide-right">
                        <img className="aboutImg rounded-circle img-fluid" src={face}/>
                    </Col>
                    <Col lg={6} md={12} sm={12} data-aos="slide-left">
                        <div className="aboutMeBody">
                            <h2 className="aboutMeDetails">Hello There, I am</h2>
                            <h2 className="aboutMeTitle">Jordan Lynn</h2>
                            <h3 className="aboutMeDetails">I Specialise In <TypeAnimation
                                sequence={[
                                    'Planning and Timing',
                                    1000,
                                    'Project Management',
                                    1000,
                                    'Warehousing and Handling',
                                    1000,
                                    'Training, development and people placement',
                                    1000,
                                    'Infrastructure',
                                    1000,
                                    'Warehousing and Handling',
                                    1000,
                                ]}
                                repeat={Infinity}
                            /></h3>
                            <button className="aboutButton mt-3 mb-5" variant="primary">More About Me</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AboutMe;