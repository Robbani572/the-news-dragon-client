import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';

const TopNav = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
        .then(() => {

        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <Container>
            <Navbar className='' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className='fw-semibold text-decoration-none ms-4 text-secondary' to={`/category/0`}>Home</Link>
                            <Link className='fw-semibold text-decoration-none ms-4 text-secondary' to={`/about`}>Career</Link>
                        </Nav>
                        <Nav className='d-flex align-items-center'>
                            {
                                !user ? <Link to={'/login'}><Button className='rounded-0 btn btn-secondary' style={{ width: 100 }}>Login</Button></Link> :
                                    <Link onClick={handleLogOut} className='custom-link'><Button className='rounded-0 btn btn-secondary' style={{ width: 100 }}>Log out</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default TopNav;