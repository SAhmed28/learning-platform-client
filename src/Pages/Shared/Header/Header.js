import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import logo from './logo.png'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

const Header = () => {
    // const {user} = useContext();
    const user = null;
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} style={{ height: '25px' }} alt="logo" />Bright</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Link className='px-3' href="/courses">Courses</Link>
                            <Link className='px-3' href="/faq">FAQ</Link>
                            <Link className='px-3' href="/blog">Blog</Link>
                            <button>Dark/Light</button>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets">
                                {
                                    user?.uid ?
                                        <>
                                            <span>{user?.displayName}</span>
                                            <Button className='mx-2' variant="light">Log Out</Button>
                                        </>
                                        :
                                        <>
                                            <Link to='/login' className='mx-2'>Login</Link>
                                            <Link to='/register'>Register</Link>
                                        </>
                                }
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                {
                                    user?.photoURL ?
                                        <Image style={{ height: '40px', width: '40px' }} src={user.photoURL} roundedCircle></Image>
                                        :
                                        <FaUser></FaUser>
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