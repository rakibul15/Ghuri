import { logDOM } from '@testing-library/react';
import React from 'react'
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import './Topnav.css'
import logo from './ghuri_logo.png';


const Topnav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md">
                <Navbar.Brand className="logo_combination" href="#home">
                
                <h1 className="logo">GHURI</h1> <img className="ghuri_logo img-fluid" src={logo} fluid />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="nav_item px-4">Blog</Nav.Link>
                        <Nav.Link className="px-4" href="#pricing">Log In</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Topnav;
