import React, { useState } from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import {Link} from 'react-router-dom'
import toast from 'react-hot-toast';

const Register = () => {
    const { createUser, updateUserProfile, varyfyEmail } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [accept, setAccept] = useState(false)

    const handleTerms = (event) => {
        const checked = event.target.checked;
        setAccept(checked);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photourl = form.photourl.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                handleUpdateUserProfile(name, photourl);
                toast.success('Registration request submitted!')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            })
    }

    const handleUpdateUserProfile = (name, photoURL) =>{
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
        .then(result => {
            const user = result.user;
            console.log('updated successfully', user)
        })
        .catch(e => console.error(e))
    }

    

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Your Name" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>PhotoURL</Form.Label>
                <Form.Control type="text" name="photourl" placeholder="Your photo url" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" required />

                <Form.Text className="text-danger">
                    {error}
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" onClick={handleTerms} label={<>Accept our <Link to='/terms'>Terms and Condition</Link></>} />
            </Form.Group>

            <Button variant="primary" type="submit" disabled={!accept}>
                Register
            </Button>
        </Form>
    );
};

export default Register;