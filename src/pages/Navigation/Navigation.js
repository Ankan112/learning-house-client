import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { FaRegUserCircle } from 'react-icons/fa';
import './Navigation.css'
import Toggle from '../../Toggle/Toggle';

const Navigation = () => {
    const { user, logOut } = useContext(AuthContext);
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
            <Container>
                <Navbar.Brand>
                    <img
                        alt=""
                        src={`https://img.icons8.com/external-flatart-icons-flat-flatarticons/64/000000/external-pencil-high-school-flatart-icons-flat-flatarticons.png`}
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'   '}
                    Learning House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Link className='route' to="/">Home</Link>
                        <Link className='route' to="/courses">Courses</Link>
                        <Link className='route' to="/faq">FAQ</Link>
                        <Link className='route' to="/blog">Blog</Link>

                    </Nav>

                    {
                        user && user.uid ?

                            <Nav className=''>
                                <div className='md:d-flex md:align-items-center' style={{ cursor: 'pointer' }} title={user.displayName}>
                                    {
                                        user.email ?
                                            <img style={{ width: '22px', height: '22px', borderRadius: '50%' }} src={user.photoURL} alt="" />
                                            :
                                            <FaRegUserCircle className='icon' />
                                    }
                                </div>
                                {/* <Link className='route' to="/log">Log Out</Link> */}
                                <Link className='route' onClick={logOut}>Log Out</Link>
                            </Nav>
                            :
                            <Nav>

                                <Link className='route' to="/login">Log In</Link>
                            </Nav>
                    }

                    <span className='route me-3'>Dark Mode</span> <Toggle></Toggle>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;