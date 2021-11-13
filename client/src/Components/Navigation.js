import React from 'react'
import {Navbar, Container, Nav, Offcanvas} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../Redux/State/state.action';

const Navigation = () => {
    const dispatch = useDispatch();
    return (
        <Navbar bg="light" expand={false} fixed='top'>
            <Container fluid>
                <Navbar.Brand href="/dashboard">User-Dashboard</Navbar.Brand>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                id="offcanvasNavbar"
                aria-labelledby="offcanvasNavbarLabel"
                placement="end"
                >
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title id="offcanvasNavbarLabel">Menu</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link href="/dashboard">Home</Nav.Link>
                    <Nav.Link href="/users">View Users</Nav.Link>
                    <Nav.Link href="/edit">Edit Profile</Nav.Link>
                    <Nav.Link onClick={() => dispatch(logoutUser())}>Logout</Nav.Link>
                    </Nav>
                </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}

export default Navigation
