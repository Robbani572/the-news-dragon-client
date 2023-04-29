import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';

const Login = () => {

    const {user, singInUser} = useContext(AuthContext)
    const [error, setError] = useState('')

    const handleSingInUser = event => {
        event.preventDefault()

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)

        singInUser(email, password)
        .then(result => {
            event.target.reset()
            const loggedUser = result.user;
            setError('')
            console.log(loggedUser)
        })
        .catch(error => {
            console.log(error)
            setError(error.message)
        })

    }

    return (
        <Container className='mt-5'>
            <h3 className='text-center'>Login Please!!</h3>
                <Form onSubmit={handleSingInUser} className='w-25 mx-auto'>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                    <Button className='w-100' variant="secondary" type="submit">
                        Login
                    </Button>
                    <br />
                    <Form.Text className="text-secondary">
                        Don't have an account? <Link to={'/register'}>Register</Link>
                    </Form.Text>
                    <br />
                    <Form.Text className="text-danger">
                        {error}
                    </Form.Text>
                </Form>
        </Container>
    );
};

export default Login;