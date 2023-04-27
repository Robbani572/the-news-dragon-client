import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const TopNav = () => {
    return (
        <Container>
            <Navbar className='mt-5' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='fw-semibold text-decoration-none ms-4 text-secondary' to={`/category/0`}>Home</Link>
                            <Link className='fw-semibold text-decoration-none ms-4 text-secondary' to={`/about`}>Career</Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            <Nav.Link className='fw-semibold' href="#deets">Profile</Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Link to={'/login'}><Button className='rounded-0 btn btn-secondary' style={{width: 100}}>Login</Button></Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default TopNav;