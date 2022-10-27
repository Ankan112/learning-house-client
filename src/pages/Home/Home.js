import React from 'react';
import { Button } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import banner from '../../img/banner.jpg'
import './Home.css'
// import { useContext } from 'react';
// import { AuthContext } from '../../Context/UserContext';
// import { SiSololearn } from 'react-icons/fa';

let sectionStyle = {
    width: "100%",
    height: "100vh",
    backgroundImage: "url(" + { banner } + ")"
};

const Home = () => {
    // const { user } = useContext(AuthContext)
    return (
        <div style={sectionStyle} className=''>
            {/* <h1>this is home page</h1>
            <p>{user?.email}</p>
            <p>Name:  {user?.displayName}</p>
            <Toggle></Toggle> */}
            <Card className="bg-dark text-white text-center">
                <Card.Img className='w-100' src={banner} alt="Card image" />
                <Card.ImgOverlay className=' pt-5'>
                    <div>
                        <h1 className='title'>Welcome To Learning House</h1>
                        <p className='w-75 m-auto description'>
                            Online education enables the teacher and the student to set their own learning pace, and there's the added flexibility of setting a schedule that fits everyone's agenda. As a result, using an online educational platform allows for a better balance of work and studies, so there's no need to give anything up.
                        </p>
                        <Link to='/courses'> <Button className='button' variant="primary">View Courses</Button></Link>
                    </div>
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Home;