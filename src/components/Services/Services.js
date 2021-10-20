import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch('./fakedb.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    
    return (
        <div>
            <div className="my-5">
                <Container>
                    <div className="text-center">
                    <h1 className="my-5 page-title">Services</h1>
                    </div>
                    <Row xs={1} md={3} className="g-5 mx-3">
                        {services.map( service => (
                            <Col key={service.key} >
                                <Card className="card-design">
                                    <Card.Img className="w-25 mx-auto p-3" variant="top" src={service.img} />
                                    <Card.Body>
                                    <Card.Title className="fs-2 title-design">{service.title}</Card.Title>
                                    <Card.Text>
                                        {service.basicdiscription}
                                    </Card.Text>
                                    <div className="d-flex mb-3 text-center">
                                        <Card.Title >Price: $ {service.price} (per month)</Card.Title>
                                    </div>
                                    <Link to={`/service/${service.title}`} className="text-center">
                                         <Button className="btn btn-dark mx-auto" variant="dark">Details</Button>
                                    </Link>    
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Services;