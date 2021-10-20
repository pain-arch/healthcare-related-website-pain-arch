import React from 'react';
import { Card, CardGroup, Container } from 'react-bootstrap';
import './Blog.css';

const Blog = () => {
    return (
        <div style={{marginTop: "100px"}}>
            <Container>
                <div className="text-center">
                    <h1 className="my-2 headline-design text-center">Articles</h1>
                    <h4 className="my-3 fs-6 text-center">When we needed care for a loved one, we couldn’t find the right mix of expertise. <br /> That’s why our caregivers mean so much more to the people and organizations they serve.</h4>
                </div>
                <CardGroup className="my-4">
                        <Card className="mx-2 border-0 card-design">
                            <Card.Img variant="top" src="https://i.ibb.co/nrfk0MT/blog-03.jpg" />
                            <Card.Body>
                            <Card.Title className="title">Chronic Mental Problems</Card.Title>
                            <Card.Text>
                            According to the World Health Organization, over 15 percent of adults over the age of 60 suffer from a mental disorder. A common ...
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 bg-dark text-light">
                            <small className="text-muted">Last updated 45 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="mx-2 border-0 card-design">
                            <Card.Img variant="top" src="https://i.ibb.co/vzZ6VYC/Young-carer-supporting-senior-disabled-woman-with-walking-stick.jpg" />
                            <Card.Body>
                            <Card.Title className="title">Comfort Living: Why It Is Okay To Age</Card.Title>
                            <Card.Text>
                            The fact that you are growing in age shouldn’t be a consideration for a change in location. There is also the alarming possibility of ...
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 bg-dark text-light">
                            <small className="text-muted">Last updated 1 hour 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="mx-2 border-0 card-design">
                            <Card.Img variant="top" src="https://i.ibb.co/nPq0NXh/homecare-1-min.jpg" />
                            <Card.Body>
                            <Card.Title className="title">How to build a long distance care team</Card.Title>
                            <Card.Text>
                            We live in a mobile society and that means that adult children are not always going to live in close proximity to aging parents. That ...
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 bg-dark text-light">
                            <small className="text-muted">Last updated 26 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="mx-2 border-0 card-design">
                            <Card.Img variant="top" src="https://i.ibb.co/nrfk0MT/blog-03.jpg" />
                            <Card.Body>
                            <Card.Title className="title">Chronic Mental Problems</Card.Title>
                            <Card.Text>
                            According to the World Health Organization, over 15 percent of adults over the age of 60 suffer from a mental disorder. A common ...
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 bg-dark text-light">
                            <small className="text-muted">Last updated 45 mins ago</small>
                            </Card.Footer>
                        </Card>
                    </CardGroup>
                    <CardGroup className="my-4">
                        <Card className="mx-2 border-0 card-design">
                            <Card.Img variant="top" src="https://i.ibb.co/vzZ6VYC/Young-carer-supporting-senior-disabled-woman-with-walking-stick.jpg" />
                            <Card.Body>
                            <Card.Title className="title">Comfort Living: Why It Is Okay To Age</Card.Title>
                            <Card.Text>
                            The fact that you are growing in age shouldn’t be a consideration for a change in location. There is also the alarming possibility of ...
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 bg-dark text-light">
                            <small className="text-muted">Last updated 1 hour 3 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="mx-2 border-0 card-design">
                            <Card.Img variant="top" src="https://i.ibb.co/nPq0NXh/homecare-1-min.jpg" />
                            <Card.Body>
                            <Card.Title className="title">How to build a long distance care team</Card.Title>
                            <Card.Text>
                            We live in a mobile society and that means that adult children are not always going to live in close proximity to aging parents. That ...
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 bg-dark text-light">
                            <small className="text-muted">Last updated 26 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="mx-2 border-0 card-design">
                            <Card.Img variant="top" src="https://i.ibb.co/nrfk0MT/blog-03.jpg" />
                            <Card.Body>
                            <Card.Title className="title">Chronic Mental Problems</Card.Title>
                            <Card.Text>
                            According to the World Health Organization, over 15 percent of adults over the age of 60 suffer from a mental disorder. A common ...
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 bg-dark text-light">
                            <small className="text-muted">Last updated 45 mins ago</small>
                            </Card.Footer>
                        </Card>
                        <Card className="mx-2 border-0 card-design">
                            <Card.Img variant="top" src="https://i.ibb.co/vzZ6VYC/Young-carer-supporting-senior-disabled-woman-with-walking-stick.jpg" />
                            <Card.Body>
                            <Card.Title className="title">Comfort Living: Why It Is Okay To Age</Card.Title>
                            <Card.Text>
                            The fact that you are growing in age shouldn’t be a consideration for a change in location. There is also the alarming possibility of ...
                            </Card.Text>
                            </Card.Body>
                            <Card.Footer className="border-0 bg-dark text-light">
                            <small className="text-muted">Last updated 1 hour 3 mins ago</small>
                            </Card.Footer>
                        </Card>

                    </CardGroup>
                </Container>
        </div>
    );
};

export default Blog;