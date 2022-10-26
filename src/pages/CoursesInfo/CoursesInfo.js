import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

const CoursesInfo = () => {
    const course = useLoaderData();
    const { name, img, price, liveclass, modeltest } = course;
    return (
        <div className='container my-5 d-flex justify-content-center'>
            <Card className='' style={{ width: '28rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item> <b>Total {price} Taka</b> </ListGroup.Item>
                    <ListGroup.Item>Total {liveclass}</ListGroup.Item>
                    <ListGroup.Item>Total {modeltest}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                    <Button variant="primary">Download Now</Button> <br />
                    <Link to='/courses'>Go Back</Link>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CoursesInfo;