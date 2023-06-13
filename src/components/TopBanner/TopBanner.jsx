import React, {Fragment, useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";

function TopBanner() {
    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000,
            easing: 'ease-in-sine',
            delay: 100,
        });
    }, []);
    return (
        <Fragment>
            <Container fluid={true} className="topFixedBanner p-0 vh-100 vw-100">
                <div className="topBannerOverlay vh-100 vw-100">
                    <Container className="d-flex align-items-center justify-content-center vh-100 vw-100">
                        <Row className="vw-100">
                            <Col className="text-center">
                                <h1 data-aos="slide-left" className="topTitle">JKL Rail</h1>
                                <h4 data-aos="slide-right" className="topSubTitle">Freight Train Services</h4>
                                <button data-aos="fade-up" className="topButton mt-3" variant="primary">Contact Us</button>
                            </Col>
                        </Row>
                    </Container>
                </div>


            </Container>
        </Fragment>

    );
}


export default TopBanner;