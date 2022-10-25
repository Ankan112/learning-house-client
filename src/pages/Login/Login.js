import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const Login = () => {
    const { googleSignIn, logIn } = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        form.reset();
        logIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
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
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className='row m-auto'>
            <h1 className='text-center mt-3'>Log In</h1>
            <div>
                <Form onSubmit={handleLogin} className='col-4 m-auto'>
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
                    <p className='text-center my-2'>Not Registered? <Link to='/register'>Create an Account</Link></p>
                    <Button variant="primary" className='w-100' type="submit">
                        Log In
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

export default Login;