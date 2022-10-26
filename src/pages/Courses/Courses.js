import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Courses.css'

const Courses = () => {
    const courses = useLoaderData();
    return (
        <div>
            <div className='row text-center'>
                <div className='col-12 col-md-4 bg-secondary pt-5'>
                    {
                        courses.map(course => <div
                            key={course.id}
                        >
                            <Link className='items' to={`/courses/${course.id}`}><h6 className='items-name'>{course.name}</h6></Link>
                        </div>)
                    }
                </div>
                <div className='col-12 col-md-8 row d-flex justify-content-center'>
                    <h2 className='mt-2'>Make Yourself Better</h2>
                    {
                        courses.map(course => <Card
                            key={course.id}
                            className='col-5 m-4'
                        >
                            <Card.Img variant="top" src={course.img} />
                            <Card.Body>
                                <Card.Title>{course.name}</Card.Title>
                                {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text> */}
                                <Link className='items' to={`/courses/${course.id}`}><Button variant="primary">Check Details</Button></Link>
                            </Card.Body>
                        </Card>)
                    }

                </div>
            </div>
        </div>
    );
};

export default Courses;