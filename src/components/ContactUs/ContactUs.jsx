import React, {Fragment, useState} from 'react';
import {Button, Col, Container, Form, Row} from "react-bootstrap";

function ContactUs() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };
    return (
        <Fragment>
            <Container fluid className="contactUsContainer p-0">
                <div className="contactUsOverlay vw-100 p-5">
                    <Row>
                        <Col lg={6}>
                            <h3 className="contactUsTitle">Contact Information</h3>
                            <p className="contactUsText">
                                <strong>Name:</strong> Jordan Lynn
                            </p>
                            <p className="contactUsText">
                                <strong>Address:</strong> You can add address here
                            </p>
                            <p className="contactUsText">
                                <strong>Phone:</strong> +44 7900785686
                            </p>
                            <p className="contactUsText mb-5">
                                <strong>Email:</strong> jordanlynn@jklrail.com
                            </p>
                        </Col>
                        <Col lg={6}>
                            <h3 className="contactUsTitle">Contact Form</h3>
                            <Form noValidate validated={validated} onSubmit={handleSubmit} className="contactUsForm">
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formFirstName">
                                            <Form.Label>First Name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Enter your first name"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a first name.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formLastName">
                                            <Form.Label>Last Name</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder="Enter your last name"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a last name.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formEmail">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                required
                                                type="email"
                                                placeholder="Enter your email"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a valid email address.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                    <Col md={6} className="mb-3">
                                        <Form.Group controlId="formPhone">
                                            <Form.Label>Phone Number</Form.Label>
                                            <Form.Control
                                                required
                                                type="tel"
                                                placeholder="Enter your phone number"
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                Please provide a phone number.
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Form.Group controlId="formMessage" className="mb-3">
                                    <Form.Label>Tell Us How We Can Help</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={5}
                                        placeholder="Enter your message"
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                    </Row>
                </div>
            </Container>
        </Fragment>
    );
}

export default ContactUs;