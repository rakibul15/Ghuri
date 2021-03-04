import { logDOM } from '@testing-library/react';
import React from 'react'
import { Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import './Topnav.css'
import logo from './ghuri4.png';



const Topnav = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="md">
                <Navbar.Brand href="#home">
                 <img className="ghuri_logo img-fluid" src={logo} fluid />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link className="px-4 active">Home</Nav.Link>
                        <Nav.Link className=" px-4">Blog</Nav.Link>
                        <Nav.Link className="px-4" >Marchant</Nav.Link>
                        <Nav.Link className="language"><i class="fa fa-globe"></i > &nbsp; EN</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Topnav;
