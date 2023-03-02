import React from 'react';
import { FaEquals } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './SubNab.css'
import logo from '../../../asset/banar-asset/266fc9cf1ad499d5c3f7b137ec321246-removebg-preview.png'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const SubNavber = () => {
    return (

        <Navbar collapseOnSelect sticky="top" className='nav-bg-color mx-auto' expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <h1 id='logo'>SnapShot</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mx-auto">
                        <Link className='mx-3' to="/">Home</Link>
                        <Link className='mx-3' to='/explor'>Work</Link>
                        <Link className='mx-3' to="/services">Service</Link>
                        <Link className='mx-3' to='/about'>About Me</Link>
                        <Link className='mx-3' to='/reviw'>Reviw</Link>
                        <Link className='mx-3' to='/contactus'>Contact Us</Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        // <div className='nav-container container fixed-top'>
        //     <Link id='faequals' to='/navber'> <FaEquals></FaEquals></Link>
        //     <Link to={'/navber'}><img width={200} src={logo} alt="" /></Link>
        //     <Link to='/login'><button className=''>LogIn</button></Link>

        // </div>
    );
};

export default SubNavber;