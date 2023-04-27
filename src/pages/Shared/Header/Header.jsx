import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container} from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import TopNav from './TopNav';


const Header = () => {
    return (
        <Container>
            <div className="text-center">
                <img src={logo} alt="" />
                <h5 className='text-secondary'>Journalism Without Fear or Favour</h5>
                <h5 className='text-secondary'>{moment().format("dddd, MMMM D, YYYY")}</h5>
            </div>
            <div className='d-flex gap-4 mt-5'>
                <Button className='rounded-0 btn btn-danger' style={{width: 100}}>Latest</Button>
                <Marquee>
                    <h4>I can be a React component, multiple React components, or just some text.</h4>
                </Marquee>
            </div>
        </Container>
    );
};

export default Header;