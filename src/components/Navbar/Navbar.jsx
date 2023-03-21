import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../styles/Navbar.css'

export default function Navbar() {
    return (
        <>
            <div className="main-navbar">
                <div className="logo">
                    <img src={require('../image/reddit-logo-2.png').default} alt="logo" />
                </div>
                <div className="searchbar">
                    <Form>
                        <Form.Control
                            type="search"
                            placeholder="Search Reddit"
                            className="me-2"
                            aria-label="Search"
                        />
                    </Form>
                </div>
                <div className="getapp-btn">
                    <Button variant="outline-primary">Get App</Button>
                </div>
                <div className="dropdown">
                    <NavDropdown title="More" id="basic-nav-dropdown" >
                        <NavDropdown.Item >Dark mode</NavDropdown.Item>
                        <NavDropdown.Item >Help Center</NavDropdown.Item>
                        <NavDropdown.Item >Advertise on Reddit</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href='./'>Logout</NavDropdown.Item>
                    </NavDropdown>
                </div>
            </div>
        </>
    )
}
