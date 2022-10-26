import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import './Navigation.css'

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
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
                    {
                        user && user.email ?

                            <Nav>
                                {/* <Link className='route' to="/log">Log Out</Link> */}
                                <Link className='route' onClick={logOut}>Log Out</Link>
                            </Nav>
                            :
                            <Nav>
                                <Link className='route' to="/blog">Toggle</Link>
                                <Link className='route' to="/login">Log In</Link>
                            </Nav>
                    }


                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;