import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import './Navigation.css'

const Navigation = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand>Learning House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='route' to="/">Home</Link>
                        <Link className='route' to="/courses">Courses</Link>
                        <Link className='route' to="/faq">FAQ</Link>
                        <Link className='route' to="/blog">Blog</Link>

                    </Nav>
                    <Nav>
                        <Link className='route' to="/blog">Toggle</Link>
                        <Link className='route' to="/login">Log In</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;