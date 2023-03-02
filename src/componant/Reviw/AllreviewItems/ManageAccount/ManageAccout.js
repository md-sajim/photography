import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';

const ManageAccout = () => {

    return (
        <div style={{ fontSize: "2rem" }}>
            <h1>My Account</h1>
            <div>
                <Row xs={1} md={2} className="g-4">

                    <Col>
                        <Card style={{ backgroundColor: "#8AA1B1", height: "280px" }} className='p-0'>
                            <Card.Body>
                                <Card.Title style={{ fontSize: "2.5rem" }}>Personal Profile</Card.Title>
                                <Card.Text>MD ABU TALEB
                                </Card.Text>
                                <Card.Text>email: mdabutaliveb@gmail.com
                                </Card.Text>
                                <Card.Link href="#">EDIT</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ backgroundColor: "#8AA1B1", height: "280px" }} className='p-0'>
                            <Card.Body>
                                <Card.Title style={{ fontSize: "2.5rem" }}>Address Book</Card.Title>
                                <Card.Text>DEFAULT ADDRESS
                                </Card.Text>
                                <Card.Text>SAJIM</Card.Text>
                                <Card.Text>RAIPUR</Card.Text>
                                <Card.Text>Chattogram - Raypur - Raypur Sadar</Card.Text>
                                <Card.Text>(+880) 1745508868</Card.Text>
                                <Card.Link href="#">EDIT</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ backgroundColor: "#8AA1B1", height: "280px" }} className='p-0'>
                            <Card.Body>
                                <Card.Title style={{ fontSize: "2.5rem" }}>DEFAULT SECONDE ADDRESS</Card.Title>
                                <Card.Text>SAJIM</Card.Text>
                                <Card.Text>RAIPUR</Card.Text>
                                <Card.Text>Chattogram - Raypur - Raypur Sadar</Card.Text>
                                <Card.Text>(+880) 1745508868</Card.Text>
                                <Card.Link href="#">EDIT</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </div>
        </div>
    );
};

export default ManageAccout;