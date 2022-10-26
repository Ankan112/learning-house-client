import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/UserContext';
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
const Register = () => {
    const { user, googleSignIn, createUser, updateUserProfile, githubSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    console.log(user)
    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const url = form.url.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, name,);
        form.reset();
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Registaion Successful')
                handleUpdateUserProfile(name, url)
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message);
            })
    }
    const handleUpdateUserProfile = (name, url) => {
        const profile = {
            displayName: name,
            photoURL: url
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error))
    }
    const handleGoogle = () => {
        googleSignIn(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
            })
    }
    const handleGithub = () => {
        githubSignIn(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message)
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
                    <Form.Group className="mb-3" controlId="formBasicPhotoURL">
                        <Form.Label>Photo URL</Form.Label>
                        <Form.Control name='url' type="text" placeholder="Enter photo url" />
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
                    <Button onClick={handleGithub} variant="primary" className='w-100' type="submit">
                        GitHub
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Register;