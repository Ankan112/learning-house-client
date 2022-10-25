import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>this is home page</h1>
            <p>{user?.email}</p>
        </div>
    );
};

export default Home;