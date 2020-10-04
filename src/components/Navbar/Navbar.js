import React from 'react';
import { Nav } from 'react-bootstrap';
import logo from '../../images/icon/logo.png';
import './Navbar.css';
const Navbar = () => {
    return (
        <div className=" header">
              <div className="row">
                  <div className="logo-img">
                       <img src={logo} alt=""></img>
                  </div>
                  <Nav className="text">
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled href="/home">Home</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled href="/donation">Donation</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled href="/events">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="disabled" disabled href="/blog">Blog</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link defaultActiveKey="/register" href="/register">Register</Nav.Link>
                    </Nav.Item>
                    <Nav.Item  className="dark">
                        <Nav.Link defaultActiveKey="/admin">Admin</Nav.Link>
                    </Nav.Item>
                </Nav>
              </div>
        </div>
    );
};

export default Navbar;