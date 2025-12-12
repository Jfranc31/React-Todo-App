import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

function ContactPage() {

    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        comments: ""
    });

    const [submitted, setSubmitted] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);

        setFormData({
            firstname: "",
            lastname: "",
            email: "",
            comments: ""
        });

        setTimeout(() => {
            setSubmitted(false);
        }, 3000);
    };

    return (
        <Container className="page-container">
            <Row className="justify-content-center">
                <Col md={8}>
                    <h1>Contact Me</h1>

                    {submitted && (
                        <Alert variant="success">
                            Thank you for reaching out! I will get back to you soon.
                        </Alert>
                    )}

                    <div className="contact-form">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="firstname"
                                    value={formData.firstname}
                                    onChange={handleInputChange}
                                    placeholder="Enter your first name"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="lastname"
                                    value={formData.lastname}
                                    onChange={handleInputChange}
                                    placeholder="Enter your last name"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="Enter your email"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3">
                                <Form.Label>Comments</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={4}
                                    name="comments"
                                    value={formData.comments}
                                    onChange={handleInputChange}
                                    placeholder="Enter your comments"
                                    required
                                />
                            </Form.Group>

                            <Button variant="primary" type="submit" size="lg">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactPage;