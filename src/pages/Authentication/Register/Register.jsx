import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider/AuthProvider';

const Register = () => {

    const [error, setError] = useState('')
    const [success, setSuccess] = useState('')

    const { createUser } = useContext(AuthContext)

    const handleCreateUser = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        setSuccess('')
        setError('')

        const re = /^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])/;

        console.log(name, email, password, confirm)

        if (password !== confirm) {
            setError("Password doesn't match")
            console.log(error)
            return
        }
        else if (password.length < 7) {
            setError('Password must contain 8 characters')
            return
        }
        else if(re.test(password) === false){
            setError('make a storng password')
            return
        }

        else {
            createUser(email, password)
                .then(result => {
                    event.target.reset()
                    const createdUser = result.user;
                    setSuccess('Account created successfully')
                    setError('')
                    console.log(createdUser)
                })
                .catch(error => {
                    console.log(error)
                    setError(error.message)
                })

        }
    }

    return (
        <Container className='mt-5'>
            <h3 className='text-center'>Login Please!!</h3>
            <Form onSubmit={handleCreateUser} className='w-25 mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirm">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name='confirm' placeholder="Confirm Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Agree with Terms and Conditions" required />
                </Form.Group>
                <Button className='w-100' variant="secondary" type="submit">
                    Submit
                </Button>
                <br />
                <Form.Text className="text-secondary">
                    Already have an account? <Link to={'/login'}>Login</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
                <Form.Text className="text-success">
                    {success}
                </Form.Text>
            </Form>
        </Container>
    );
};

export default Register;