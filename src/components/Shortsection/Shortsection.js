import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';
import './Shortsection.css';

const Shortsection = () => {
    return (
        <div className="my-5">
            <Container fluid>
            <Row>
                <Col className="left-side">
                    <div className="left">
                        <div className="text-center"> 
                            <h1 className="my-2 headline-design text-center">How we Care</h1>
                        </div>
                        <h4 className="my-3 fs-5 text-center">The importance of self-care for caregivers</h4>
                        <div className="my-4">
                        <Accordion >
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Our Philosophy</Accordion.Header>
                                <Accordion.Body>
                                Our Pholosophy is independence and personal preference for how care is delivered. You tell us how you want it done. You decide when you get up, when you go to bed, when you eat, and so on.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Our History</Accordion.Header>
                                <Accordion.Body>
                                We providing high quality home health care services to the Tennessee community since 2011. Our Agency is locally owned and operated and specializes in serving a suburban clientele. We pride ourselves on the level of involvement and commitment which we sustain in each client relationship.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Our Mission -- Our Mission is to enhance the quality of life for her clients by recognizing </Accordion.Header>
                                <Accordion.Body>
                                Our Mission is to enhance the quality of life for her clients by recognizing that each person is an individual with unique needs and abilities. We are committed to enriching lives by allowing clients to remain in the comfort of their own homes with a helping hand from our caring staff.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                            
                        </div>
                    <div className="text-center">    
                        <Button href="/about-us" className=" btn btn-dark fs-5 px-5" variant="dark">Click for more details</Button>
                    </div>    
                    </div>
                </Col>
                <Col className="right-side" >
                    <div className="text-center">
                        <img className="w-100" src="https://i.ibb.co/SJjZPnL/care-image.jpg" alt="img" />
                    </div>
                </Col>
            </Row>
           </Container>
            
        </div>
    );
};

export default Shortsection;