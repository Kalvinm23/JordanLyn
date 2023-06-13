import React, {Fragment, useEffect, useState} from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import image1 from '../../asset/image/AboutUs1.png';
import image2 from '../../asset/image/AboutUs2.png';
import image3 from '../../asset/image/AboutUs3.png';
import image4 from '../../asset/image/AboutUs4.png';
import image5 from '../../asset/image/AboutUs5.png';
import image6 from '../../asset/image/AboutUs6.png';


function AboutUs() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6
    ];


    return (
        <Fragment>
            <Container fluid className="my-5">
                <Row>
                    <Col lg={6} className="order-lg-1 p-5 pt-0">
                        <Carousel activeIndex={index} controls={false} interval={null}>
                            {images.map((image, idx) => (
                                <Carousel.Item key={idx}>
                                    <img src={image} alt={`Image ${idx}`} className="d-block w-100 rounded" />
                                </Carousel.Item>
                            ))}
                        </Carousel>
                    </Col>
                    <Col lg={6} className="order-lg-2">
                        <div className="text-section">
                            <h2 className="aboutUsTitle">Draft Heading</h2>
                            <p className="aboutUsDetails">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce convallis vestibulum risus at auctor. Mauris lobortis,
                                mauris sed facilisis sagittis, nisi ipsum cursus elit, sit amet
                                aliquet leo ligula in dui. Curabitur ut fringilla justo.
                                Aenean ut convallis massa. Sed at neque sed tellus facilisis
                                consectetur. Vestibulum ullamcorper neque eget risus ultricies,
                                sit amet elementum ex dapibus.
                            </p>
                            <p className="aboutUsDetails">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                Fusce convallis vestibulum risus at auctor. Mauris lobortis,
                                mauris sed facilisis sagittis, nisi ipsum cursus elit, sit amet
                                aliquet leo ligula in dui. Curabitur ut fringilla justo.
                                Aenean ut convallis massa. Sed at neque sed tellus facilisis
                                consectetur. Vestibulum ullamcorper neque eget risus ultricies,
                                sit amet elementum ex dapibus.
                            </p>
                            <button className="aboutButton mt-3 mb-5" variant="primary">More About Us</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default AboutUs;
