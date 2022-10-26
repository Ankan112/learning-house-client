import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Context/UserContext';
import Toggle from '../../Toggle/Toggle';
// import { SiSololearn } from 'react-icons/fa';

const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h1>this is home page</h1>
            <p>{user?.email}</p>
            <p>Name:  {user?.displayName}</p>
            <Toggle></Toggle>
        </div>
    );
};

export default Home;