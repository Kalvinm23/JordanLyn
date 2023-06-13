import React, {Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBoxes, faBuilding, faChalkboardTeacher, faClock, faTasks, faTruck} from '@fortawesome/free-solid-svg-icons';


function Service() {
    const serviceItems = [
        {
            title: 'Training And Development',
            icon: faChalkboardTeacher,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget enim ut orci scelerisque pulvinar. Nullam pharetra nisl eget arcu tristique, et aliquet est accumsan.',
        },
        {
            title: 'Planning and Timing',
            icon: faClock,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget enim ut orci scelerisque pulvinar. Nullam pharetra nisl eget arcu tristique, et aliquet est accumsan.',
        },
        {
            title: 'Project Management',
            icon: faTasks,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget enim ut orci scelerisque pulvinar. Nullam pharetra nisl eget arcu tristique, et aliquet est accumsan.',
        },
        {
            title: 'Warehousing and Handling',
            icon: faBoxes,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget enim ut orci scelerisque pulvinar. Nullam pharetra nisl eget arcu tristique, et aliquet est accumsan.',
        },
        {
            title: 'Infrastructure',
            icon: faBuilding,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget enim ut orci scelerisque pulvinar. Nullam pharetra nisl eget arcu tristique, et aliquet est accumsan.',
        },
        {
            title: 'Modal Shift',
            icon: faTruck,
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eget enim ut orci scelerisque pulvinar. Nullam pharetra nisl eget arcu tristique, et aliquet est accumsan.',
        },
    ];

    return (
        <Fragment>
            <Container fluid className="serviceContainer p-lg-5 p-md-4 p-sm-3 p-2">
                <Row xs={1} sm={2} md={2} lg={3} xl={3} xxl={3}>
                    {serviceItems.map((item, index) => (
                        <Col key={index}>
                            <Card className="serviceCard mb-4 mx-2">
                                <Card.Body>
                                    <div className="text-center">
                                        <FontAwesomeIcon icon={item.icon} size="3x"/>
                                    </div>
                                    <Card.Title className="serviceTitle text-center mt-3">{item.title}</Card.Title>
                                    <div className="serviceDetails">
                                        <Card.Text>{item.description}</Card.Text>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <Row>
                    <Col className="text-center">
                        <button className="serviceButton mt-3 mb-2" variant="primary">More Services</button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Service;