import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png'


const RightNav = () => {
    return (
        <div>
            <div>
                <h3>Login With</h3>
                <div className="mt-4">
                    <Button className='d-flex justify-content-center gap-2 w-100 align-items-center' variant="outline-primary"> <FaGoogle />  <span className='fw-semibold'>Login with Google</span></Button>
                    <Button className='d-flex justify-content-center gap-2 w-100 align-items-center mt-2' variant="outline-secondary"> <FaGithub />  <span className='fw-semibold'>Login with GitHub</span></Button>
                </div>
            </div>
            <div className='mt-4'>
                <h3>Find Us On</h3>
                <ListGroup className='mt-4'>
                    <ListGroup.Item className='d-flex align-items-center gap-4 text-primary'> <FaFacebook /> <span className='fw-semibold text-secondary'>Facebook</span></ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center gap-4 text-primary'> <FaTwitter /> <span className='fw-semibold text-secondary'>Twitter</span></ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center gap-4 text-danger'> <FaInstagram /> <span className='fw-semibold text-secondary'>Instagram</span></ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-4'>
                <QZone></QZone>
            </div>
            <div className='mt-4'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;