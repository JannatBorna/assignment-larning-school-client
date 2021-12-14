import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import logo from '../../../../image/logo/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div id="header">
            <Navbar collapseOnSelect expand="lg" variant="black">
                <Container>
                    <Navbar.Brand>
                        <h5 className="website-name"><span className="skill_text mx-3 my-3">LS</span></h5>
                    </Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" className="text-white" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">

                        <Nav defaultActiveKey="/home">
                            <Nav.Link className="nav_bar active" as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link className="nav_bar" as={HashLink} to="/ourServices#ourServices">Our services</Nav.Link>
                            <Nav.Link className="nav_bar" as={HashLink} to="/about#about">About</Nav.Link>
                           
                            <Nav.Link className="nav_bar" as={HashLink} to="/contact">Contact</Nav.Link>
                            <Nav.Link className="nav_bar dashboard" as={HashLink} to="/dashboard#dashboard">Dashboard</Nav.Link>

                            <Nav.Link className="nav_bar" as={HashLink} to="/login#login">Login</Nav.Link>


                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;        
                       

                    