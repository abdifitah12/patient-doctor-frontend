import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">My App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/doctors">Doctors</Nav.Link>
          <Nav.Link as={Link} to="/patients">Patients</Nav.Link>
          <Nav.Link as={Link} to="/appointments">Appointments</Nav.Link>
          
          <Nav.Link as={Link} to="/register-appointment">Register & Make Appointment</Nav.Link> {/* New link */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
