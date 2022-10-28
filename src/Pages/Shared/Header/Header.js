import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import logo from './logo.png'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css'
import { useState } from 'react';

const Header = () => {
    const {user, logout, theme, setTheme} = useContext(AuthContext);

    const [btnText, setBtnText] = useState("Dark Mode");

    const handleSignOut = () => {
        logout()
        .then(()=>{})
        .catch(error=>console.error);
    }

    const handlemode = (event) => {
        setTheme(curr => curr === "dark" ? "light" : "dark");

        if(btnText === "Dark Mode"){
            setBtnText("Light Mode")
        }
        else{
            setBtnText("Dark Mode");
        }

    }
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg={theme} variant={theme}>
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} style={{ height: '25px' }} alt="logo" />Bright</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="">
                            <Link className={theme === 'dark' ? "btn btn-outline-info" : "btn btn-info"} to="/courses">Courses</Link>
                            <Link className={theme === 'dark' ? "btn btn-outline-info" : "btn btn-info"}  to="/faq">FAQ</Link>
                            <Link className={theme === 'dark' ? "btn btn-outline-info" : "btn btn-info"}  to="/blog">Blog</Link>
                            <button className='ms-5 btn btn-outline-warning' onClick={handlemode}>{btnText}</button>
                        </Nav>
                        <Nav>
                            <>
                                {
                                    user?.uid &&
                                        <>
                                            <a className='my-auto' href="#">{user?.displayName}</a>
                                        </>
                                }
                            </>
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user?.photoURL ?
                                        <Image style={{ height: '40px', width: '40px' }} src={user.photoURL} roundedCircle></Image>
                                        :
                                        <FaUser></FaUser>
                                }
                                {
                                    user?.uid ?
                                        <Button onClick={handleSignOut} className='mx-2' variant="light">Log Out</Button>
                                        :
                                        <>
                                            <Link to='/login' className='mx-2'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;