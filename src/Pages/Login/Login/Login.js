import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import {useNavigate, useLocation, Link} from 'react-router-dom'
import toast from 'react-hot-toast';

const Login = () => {
    const { providerLogin, login, setLoading } = useContext(AuthContext);
    const [error,setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const googleProvider = new GoogleAuthProvider;

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        login(email,password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setError('')
            navigate(from, {replace:true});

            // if(user.emailVerifyed){
            //     navigate(from, {replace:true});
            // }
            // else{
            //     toast.error('Please verify your email')
            // }
        })
        .catch(e => {
            console.error(e);
            setError(e.message);
        })
        .finally(() => {
            setLoading(false)
        })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }
    return (
        <div className="">
            <Form onSubmit={handleSubmit} className='mt-4'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>

                <p>New to our site? Please <Link to='/register'>Register</Link></p>
            </Form>


            <ButtonGroup size="lg" className="my-4">
                <Button onClick={handleGoogleSignIn} className='mx-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
                <Button className='mx-2' variant="outline-dark"> <FaGithub /> Login with Github</Button>
            </ButtonGroup>


        </div>
    );
};

export default Login;