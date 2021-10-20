import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Features.css';

const Features = () => {
    return (
        <div className="div-margin">
            <Container>
                <p className="fs-6 fw-bold text-secondary">LET’S FIND US IN</p>
                <div className="d-flex">
                    <h2 style={{color: "#FFDE59"}} className="fs-3 titl-design">Canada, </h2>
                    <h2 className="fs-3 titl-design"> United States, </h2>
                    <h2 className="fs-3 titl-design"> United Kingdom</h2>
                </div>
                <Row>
                    <Col className="my-2 ">
                            <h5 className="mt-4">Adress Details</h5>
                            <div className="mt-3">
                                <p  className="d-block">95 Black River Suite 833,<br/> Toronto, Canada</p>
                            </div>
                    </Col>
                    <Col className="my-2 ">
                            <h5 className="mt-4">Email us</h5>
                            <div className="mt-3">
                                <p  className="d-block">helps@old-care.com <br /> admins@old-care.com</p>
                            </div>
                    </Col>
                    <Col className="my-2">
                            <h5 className="mt-4">Phone Number</h5>
                            <div className="mt-3">
                                <p  className="d-block">458-990-4476 <br /> 458-681-1745</p>
                            </div>
                    </Col>
                    <Col className="my-2">
                            <h5 className="mt-4">Follow Us</h5>
                            <div className="d-flex my-3">
                                <a href="https://facebook.com/" target="_blank" rel="noreferrer" >
                                    <i className="fab fa-facebook-square mx-2 fs-5 text-secondary"></i>
                                </a>
                                <a href="https://facebook.com/" target="_blank" rel="noreferrer" >
                                    <i className="fab fa-twitter-square mx-2 fs-5 text-secondary"></i>
                                </a>
                                <a href="https://facebook.com/" target="_blank" rel="noreferrer" >
                                    <i className="fab fa-instagram mx-2 fs-5 text-secondary"></i>
                                </a>
                                <a href="https://facebook.com/" target="_blank" rel="noreferrer" >
                                    <i className="fab fa-google-plus-square mx-2 fs-5 text-secondary"></i>
                                </a>
                            </div>
                    </Col>
                </Row>
                <img className="w-100" src="https://i.ibb.co/m56nhwK/daniel-frank-201416-unsplash-min.jpg" alt="img" />
            </Container>
        </div>
    );
};

export default Features;