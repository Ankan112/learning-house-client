import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../img/notfound.png'

const NotFound = () => {
    return (
        <div className='mt-5 text-center'>
            <img className='w-50' src={img} alt="" /><br />
            <Link to='/'>Go Home</Link>
        </div>
    );
};

export default NotFound;