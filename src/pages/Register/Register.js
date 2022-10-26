import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const Register = () => {
    const { user, googleSignIn, createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    console.log(user)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name);
        form.reset();
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleGoogle = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='row m-auto'>
            <h1 className='text-center mt-3'>Register</h1>
            <div>
                <Form onSubmit={handleRegister} className='col-4 m-auto'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group> */}
                    <p className='text-center my-2'>Already Registered? <Link to='/login'>Login</Link></p>
                    <Button variant="primary" className='w-100' type="submit">
                        Register
                    </Button>
                </Form>
                <div className='col-4 m-auto'>
                    <p className='text-center my-1'>Or</p>
                    <Button onClick={handleGoogle} variant="primary" className='w-100 mb-3' type="submit">
                        Google
                    </Button>
                    <Button variant="primary" className='w-100' type="submit">
                        GitHub
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Register;