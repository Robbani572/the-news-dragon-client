import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


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
            <Navbar className='mt-5' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link className='fw-semibold' href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button className='rounded-0 btn btn-secondary' style={{width: 100}}>Login</Button>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default Header;