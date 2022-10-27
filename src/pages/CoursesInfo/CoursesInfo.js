import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button } from 'react-bootstrap';

const CoursesInfo = () => {
    const course = useLoaderData();
    const { name, img, price, liveclass, modeltest, id } = course;
    return (
        <div className='container my-5 d-flex justify-content-center'>
            <Card className='' style={{ width: '28rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <p>Online education enables the teacher and the student to set their own learning pace, and there's the added flexibility of setting a schedule that fits everyone's agenda.</p>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item> <b>Total {price} Taka</b> </ListGroup.Item>
                    <ListGroup.Item>Total {liveclass}</ListGroup.Item>
                    <ListGroup.Item>Total {modeltest}</ListGroup.Item>
                </ListGroup>
                <Card.Body>

                    <Link to={`/checkout/${id}`}><Button variant="primary">Get Access</Button> </Link><br />
                    <Link to='/courses'>Go Back</Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CoursesInfo;