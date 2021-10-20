import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Banner.css';


const Banner = () => {
    return (
        <div>
            <Container className="px-0 mt-5">
                        <Carousel fade>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 height"
                                src="https://i.ibb.co/rFGhmmd/homecare-1.jpg"
                                alt="First slide"
                                />
                                <Carousel.Caption>
                                <h1 className="banner-title-design">Trusted Help from <br /> Our Family to Yours</h1>
                                <NavLink className="btn btn-light text-dark mb-3" to="/login">Apply Now</NavLink>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item>
                                <img
                                className="d-block w-100 height"
                                src="https://i.ibb.co/7jpMpYC/homecare-2-min.jpg"
                                alt="Second slide"
                                />

                                <Carousel.Caption>
                                <h1 className="banner-title-design">Quality Home <br /> Care for Seniors</h1>
                                <NavLink className="btn btn-light text-dark mb-3" to="/login">Apply Now</NavLink>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </Container>
        </div>
    );
};

export default Banner;