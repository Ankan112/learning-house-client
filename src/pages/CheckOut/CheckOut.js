import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/UserContext';

const CheckOut = () => {
    const data = useLoaderData();
    const { price, name } = data;
    const { user } = useContext(AuthContext)
    const handleOrderForm = e => {
        e.preventDefault();
    }
    const handleOrder = () => {
        toast.success('Order Successful')
    }
    return (
        <div className='container'>
            <h1>Header</h1>
            <div className='d-flex justify-content-center my-4'>
                <Form onSubmit={handleOrderForm} className='w-75'>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Course Name</Form.Label>
                        <Form.Control defaultValue={name} readOnly type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Course Price</Form.Label>
                        <Form.Control defaultValue={price} readOnly type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control defaultValue={user?.email} readOnly type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicDisplayName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control defaultValue={user?.displayName} type="text" placeholder="Enter name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="number" placeholder="Enter phone number" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Label>Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter address" />
                    </Form.Group>
                    <Button onClick={handleOrder} variant="primary" type="submit">
                        Order Now
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default CheckOut;