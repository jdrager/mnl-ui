import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => (
    <Navbar id="navbar" bg="dark" variant="dark">
        <Navbar.Brand>
            <img
                alt=""
                src="/logo.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />
            {' '}
            React SPA Example
        </Navbar.Brand>
    </Navbar>
);

export default NavBar;
